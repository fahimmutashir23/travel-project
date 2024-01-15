import { useParams } from "react-router-dom";
import TourDescription from "./TourDescription";
import TourPackageForm from "./TourPackageForm";
import Banner from "./package/Banner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";

const TourPackagesDetails = () => {
  const {id} = useParams()
  const axiosPublic = useAxiosPublic();

  const {data: details = [], isLoading} = useQuery({
    queryKey:  ["packagesDetails"],
    queryFn: async () => {
      const res = await axiosPublic(`/packages/${id}`)
      return res.data;
    }
  })

  if(isLoading) {
    return <Loader width='20' center='center' />
  }

  return (
    <div>
      <Banner />
      <div className="flex">
        <TourDescription details ={details} />
        <TourPackageForm details ={details} />
      </div>
    </div>
  );
};

export default TourPackagesDetails;
