import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PageTitleWithTotal from "../../../Utils/PageTitleWithTotal/PageTitleWithTotal";
import Loader from "../../../Utils/Loader/Loader";
import AllPackagesTable from "./AllPackagesTable";

const AllPackages = () => {
  const axiosSecure = useAxiosSecure();

  const {data: tourPackages = [], isLoading, refetch} = useQuery({
    queryKey: ['allPackages'],
    queryFn: async () => {
      const res = await axiosSecure('/packages')
      return res.data
    }
  })
  if(isLoading) {
    return <Loader width='20' center='center' />
  }
  return (
    <div>
      <PageTitleWithTotal title='All Packages' totalName='Packages' totalNumber={tourPackages.length} />
      <div className="relative overflow-x-auto shadow-md rounded-md">
          <table className="w-full text-left rtl:text-right ">
            <thead className="text-lg uppercase bg-blue-400 text-white ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Package name
                </th>
                <th scope="col" className="px-6 py-3">
                  Destination
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  View
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
              {tourPackages.map((tourPackage) => (
                <AllPackagesTable key={tourPackage._id} tourPackage={tourPackage} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default AllPackages;
