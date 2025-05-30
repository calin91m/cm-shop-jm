export function CategoryCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
      <div className="flex flex-row items-center justify-center p-4 md:col-span-2 row-span-2 text-3xl text-center border-1 rounded-xl shadow-sm aspect-video xl:aspect-auto">
        New Arrivals
      </div>
      <div className="flex flex-row items-center justify-center p-4 aspect-video text-3xl text-center border-1 rounded-xl shadow-sm">
        Women
      </div>
      <div className="flex flex-row items-center justify-center p-4 aspect-video text-3xl text-center border-1 rounded-xl shadow-sm">
        Men
      </div>
    </div>
  );
}
