import { Link, useParams } from "react-router-dom";
import TourDescription from "./TourDescription";
import TourPackageForm from "./TourPackageForm";
import Banner from "./package/Banner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import Title from "../../Utils/Title/Title";

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
      <Title title="Details" />
      <Banner />
      <div className="flex gap-4">
        <div className="w-8/12"><TourDescription details ={details} /></div>
        <div className="flex-1"><TourPackageForm details ={details} /></div>
      </div>
      <Link to='/pdf'>PDF</Link>
    </div>
  );
};

export default TourPackagesDetails;
