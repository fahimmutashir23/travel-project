import useTourPackages from "../../Hooks/useTourPackages";
import Loader from "../../Utils/Loader/Loader";
import PageTitle from "../Shared/PageTitle/PageTitle";
import TourPackagesCard from "./TourPackagesCard";

const TourPackages = () => {
  const [tourPackages, isLoading] = useTourPackages();

  if (isLoading) {
    return <Loader width="20" center="center" />;
  }

  return (
    <div className="mt-10">
      <PageTitle title="Our Featured Packages" />
      <div className="lg:grid grid-cols-2 gap-2">
        {tourPackages.map((tourPackage) => (
          <TourPackagesCard
            key={tourPackage._id}
            tourPackage={tourPackage}
          ></TourPackagesCard>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
