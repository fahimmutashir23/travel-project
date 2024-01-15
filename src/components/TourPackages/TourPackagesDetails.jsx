import TourDescription from "./TourDescription";
import TourPackageForm from "./TourPackageForm";
import Banner from "./package/Banner";


const TourPackagesDetails = () => {

  return (
    <div>
      <Banner />
       <div className="flex">
        <TourDescription/>
       <TourPackageForm/>
       </div>
    </div>
  );
};

export default TourPackagesDetails;