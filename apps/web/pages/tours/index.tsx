import { QueryStateHandler } from '@/components/query-state-handler/query-state-handler';
import { NextPageWithLayout } from '../_app';
import { ToursLayout } from './tours-layout';
import { useGetAllTours } from '@/lib/api-client/_generated';

const AllTours: NextPageWithLayout = () => {
  const { data: tours, isFetching, error, refetch } = useGetAllTours();

  return (
    <QueryStateHandler
      data={tours?.data.data}
      error={error}
      isFetching={isFetching}
      onRetry={() => refetch()}
      loadingText="Loading tours..."
      emptyText="No tours available"
    >
      {({ data: tours }) => (
        <main className="p-4">
          <h1 className="text-2xl font-bold mb-6">All Tours</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white p-4 rounded-md shadow">
                <h2 className="font-medium">{tour.name}</h2>
                {tour.description && (
                  <p className="text-gray-600 mt-2">{tour.description}</p>
                )}
                {/* Add more tour details as needed */}
              </div>
            ))}
          </div>
        </main>
      )}
    </QueryStateHandler>
  );
};

AllTours.getLayout = function (page) {
  return <ToursLayout>{page}</ToursLayout>;
};

export default AllTours;
