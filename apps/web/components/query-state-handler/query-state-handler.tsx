import React, { ReactNode, ReactElement } from 'react';

interface QueryStateHandlerProps<T> {
  /**
   * The data returned from the query
   */
  data: T | undefined;

  /**
   * Error state from the query
   */
  error: Error | null | unknown;

  /**
   * Loading state from the query
   */
  isFetching: boolean;

  /**
   * Custom loading component (optional)
   */
  LoadingComponent?: React.ComponentType | ReactElement;

  /**
   * Custom error component (optional)
   */
  ErrorComponent?:
    | React.ComponentType<{ error: Error | null | unknown; retry?: () => void }>
    | ReactElement;

  /**
   * Custom empty state component (optional)
   */
  EmptyComponent?: React.ComponentType | ReactElement;

  /**
   * Function to handle retry on error (optional)
   */
  onRetry?: () => void;

  /**
   * Render function that receives the data
   */
  children: (props: { data: T }) => ReactNode;

  /**
   * Whether to check for empty arrays (default: true)
   */
  checkForEmptyArray?: boolean;

  /**
   * Text to display during loading
   */
  loadingText?: string;

  /**
   * Text to display when data is empty
   */
  emptyText?: string;

  /**
   * Should the component show a smaller loading indicator when refetching data in the background
   */
  showRefetchingIndicator?: boolean;
}

/**
 * A component that handles loading, error, and empty states for data fetching
 */
export function QueryStateHandler<T>({
  data,
  error,
  isFetching,
  children,
  LoadingComponent,
  ErrorComponent,
  EmptyComponent,
  onRetry,
  checkForEmptyArray = true,
  loadingText = 'Loading data...',
  emptyText = 'No data available',
  showRefetchingIndicator = true,
}: QueryStateHandlerProps<T>): ReactElement {
  // Default loading component
  const DefaultLoadingComponent = () => (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-pulse text-gray-600">{loadingText}</div>
    </div>
  );

  // Default error component
  const DefaultErrorComponent = ({
    error,
    retry,
  }: {
    error: unknown;
    retry?: () => void;
  }) => (
    <div className="bg-red-50 p-4 rounded-md border border-red-200">
      <h2 className="text-red-700 font-medium mb-2">Something went wrong</h2>
      <p className="text-red-600">
        {error instanceof Error
          ? error.message
          : 'An unknown error occurred. Please try again.'}
      </p>
      {retry && (
        <button
          className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-md transition-colors"
          onClick={retry}
        >
          Retry
        </button>
      )}
    </div>
  );

  // Default empty component
  const DefaultEmptyComponent = () => (
    <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-center">
      <h2 className="text-gray-700 font-medium mb-2">{emptyText}</h2>
    </div>
  );

  // Handle initial loading state
  if (isFetching && !data) {
    if (LoadingComponent) {
      return typeof LoadingComponent === 'function'
        ? ((<LoadingComponent />) as ReactElement)
        : LoadingComponent;
    }
    return <DefaultLoadingComponent />;
  }

  // Handle error state
  if (error) {
    if (ErrorComponent) {
      return typeof ErrorComponent === 'function'
        ? ((<ErrorComponent error={error} retry={onRetry} />) as ReactElement)
        : ErrorComponent;
    }
    return <DefaultErrorComponent error={error} retry={onRetry} />;
  }

  // Handle empty state for arrays
  const isEmpty =
    data === undefined ||
    data === null ||
    (checkForEmptyArray && Array.isArray(data) && data.length === 0);

  if (isEmpty) {
    if (EmptyComponent) {
      return typeof EmptyComponent === 'function'
        ? ((<EmptyComponent />) as ReactElement)
        : EmptyComponent;
    }
    return <DefaultEmptyComponent />;
  }

  // Render content with data
  const content = children({ data: data as T });

  // Ensure the content is a valid React element
  return (
    <React.Fragment>
      {content}

      {/* Background refetching indicator */}
      {showRefetchingIndicator && isFetching && data && (
        <div className="mt-4 text-center text-sm text-gray-500">
          Refreshing...
        </div>
      )}
    </React.Fragment>
  );
}
