import useTourPackages from "../../Hooks/useTourPackages";
import Loader from "../../Utils/Loader/Loader";
import TourPackagesCard from "../../components/TourPackages/TourPackagesCard";


const TourPackagesPage = () => {
    const [tourPackages, isLoading] = useTourPackages('', {})

    if(isLoading){
        return <Loader width='20' center='center' />
    }
    
    return (
        <div>
            {
                tourPackages.map(tourPackage => <TourPackagesCard key={tourPackage._id} tourPackage={tourPackage} />)
            }
        </div>
    );
};

export default TourPackagesPage;