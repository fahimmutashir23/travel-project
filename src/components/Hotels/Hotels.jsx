import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";

const Hotels = () => {

const axiosPublic = useAxiosPublic()

    const {data: hotels = [], isPending} = useQuery({
        queryKey: ['hotels'],
        queryFn: async () => {
            const res = await axiosPublic('/hotels')
            return res.data
        }
    })

  if(isPending){
    return <Loader width='20' center='center'></Loader>
 }
  return (
    <div>
      <div>
        <p className="text-center text-lg mb-2 mt-10 font-bold">Discover</p>
        <h1 className="text-center text-4xl mb-5 font-bold">Discover Hotels</h1>
      </div>
      <div>
        <h2 className="text-xl font-medium">Total Hotels: {hotels.length}</h2>
        <div className="md:grid grid-cols-2 gap-4">
          {hotels.map((hotel) => (
            <div key={hotel._id} className="">
              <img
                src={hotel.hotel_img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
