/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import Loader from "../../Utils/Loader/Loader";
import HotelCard from "../../Utils/Card/HotelCard";

const Hotels = ({hotels}) => {
  // const axiosPublic = useAxiosPublic();

  // const { data: hotels = [], isPending } = useQuery({
  //   queryKey: ["hotels"],
  //   queryFn: async () => {
  //     const res = await axiosPublic("/hotels");
  //     return res.data;
  //   },
  // });

  // if (isPending) {
  //   return <Loader width="20" center="center"></Loader>;
  // }
  return (
    <div>
      <div>
        <p className="text-center text-lg mb-2 mt-10 font-bold">Discover</p>
        <h1 className="text-center text-4xl mb-5 font-bold">Discover Hotels</h1>
      </div>
      <div>
        <h2 className="text-xl font-medium">Total Hotels: {hotels.length}</h2>
        <div className="flex flex-wrap gap-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel}></HotelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
