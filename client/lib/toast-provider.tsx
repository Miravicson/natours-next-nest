import { createContext, ReactNode, useContext,useMemo } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { DEFAULT_WAIT_BEFORE_NAVIGAGION_SECS } from './constants';

type ToastProviderProps = {
  children: ReactNode;
};

interface ToastContextType {
  alertSuccess(_msg: string): void;
  alertError(_msg: string): void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: ToastProviderProps) {
  const contextValue = useMemo(() => {
    const alertSuccess = (msg: string) => {
      toast.success(msg);
    };

    const alertError = (msg: string) => {
      toast.error(msg);
    };
    return {
      alertSuccess,
      alertError,
    };
  }, []);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{ duration: DEFAULT_WAIT_BEFORE_NAVIGAGION_SECS }}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error(
      'useToast has to be used within <ToastProvider></ToastProvider>',
    );
  }

  return toastContext;
}
