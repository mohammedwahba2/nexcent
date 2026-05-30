export default function Loading() {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col">

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24 flex-1">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-12 w-1/2 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mt-2" />
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
            <div className="h-12 w-32 bg-gray-200 rounded-lg animate-pulse mt-4" />
          </div>
          <div className="h-80 w-full bg-gray-200 rounded-2xl animate-pulse" />
        </div>
  
      </div>
    );
  }