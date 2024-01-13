
import useTourPackages from "../../Hooks/useTourPackages";
import Loader from "../../Utils/Loader/Loader";
import Blogs from "../Blogs/Blogs";

import TourPackagesCard from "./TourPackagesCard";


const TourPackages = () => {
  const [tourPackages, isLoading] = useTourPackages(5);

  if (isLoading) {
    return <Loader width="20" center="center" />;
  }

  return (
    <div className="mt-16">
      <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
        <div className="col-span-4 p-2">
          <h3 className="text-4xl font-bold mb-8">FEATURED TOURS</h3>
          <div className="">
            {tourPackages.map((tourPackage) => (
              <TourPackagesCard
                key={tourPackage._id}
                tourPackage={tourPackage}
              ></TourPackagesCard>
            ))}
          </div>
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default TourPackages;
{
  /* <div className="relative">
<img
  className="overflow-hidden w-2/3 h-56"
  src="https://aventura.templaza.net/wp-content/uploads/2017/06/shifaaz-shamoon-465339-unsplash-600x400.jpg"
/>

<span className="absolute top-5 rounded-md text-white px-5 py-.5 bg-yellow-500">
  25% OFF
</span>
</div> */
}
