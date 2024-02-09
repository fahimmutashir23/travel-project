
import useTourPackages from "../../Hooks/useTourPackages";
import Loader from "../../Utils/Loader/Loader";
import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome";
import Blogs from "../Blogs/Blogs";


import TourPackagesCard from "./TourPackagesCard";


const TourPackages = () => {
  const [tourPackages, isLoading] = useTourPackages(5, {});

  if (isLoading) {
    return <Loader width="20" center="center" />;
  }

  return (
    <div className="mt-16">
        <PageTitleForHome title='Featured tours' />
      <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
        <div className="col-span-4 p-2">
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

