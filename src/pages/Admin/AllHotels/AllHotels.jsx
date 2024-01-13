import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Utils/Loader/Loader";
import Table from "./AllHotelsTable";
import PageTitleWithTotal from "../../../Utils/PageTitleWithTotal/PageTitleWithTotal";

const AllHotels = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allHotelsForAdmin"],
    queryFn: async () => {
      const res = await axiosSecure("/hotels");
      return res.data;
    },
  });

  if (isLoading) {
   return <Loader width="20" center="center"></Loader>;
  }

  return (
    <div>
      <PageTitleWithTotal title='All Hotels' totalName='Hotels' totalNumber={data.length} />
      <div>
        <div className="relative overflow-x-auto shadow-md rounded-md">
          <table className="w-full text-left rtl:text-right ">
            <thead className="text-lg uppercase bg-blue-400 text-white ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Hotel name
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Room
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  View
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Add Room
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((hotel) => (
                <Table key={hotel._id} hotel={hotel} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllHotels;
