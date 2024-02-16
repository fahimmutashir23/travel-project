import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Utils/Loader/Loader";
import AdvertisementTable from "./AdvertisementTable";

const AdvertisementSec = () => {
  const axiosSecure = useAxiosSecure();

  

  const {
    data: advertisements = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["advertisements"],
    queryFn: async () => {
      const res = await axiosSecure("/advertisements");
      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const poster = e.target.poster.value;
    const data = {
      url: poster,
      isActive: false,
    };

    axiosSecure.post("/advertisements", data).then((res) => {
      if (res.data.insertedId) {
        toast("Upload Successful");
        refetch()
        e.target.reset()
      }
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="border-[2px] border-blue-400">
      <div className="m-2">
        <h4 className="text-lg font-semibold">Upload Advertisement poster</h4>
        <form onSubmit={handleSubmit} className="flex my-2">
          <input type="text" name="poster" className="w-full px-3 py-2 bg-gray-100 rounded-l-md" placeholder="Poster URL" />
          <button className="bg-blue-400 text-white font-semibold px-4 rounded-r-md" type="submit">Upload</button>
        </form>
      </div>
      <div>
        <table className="w-full text-left rtl:text-right ">
          <thead className="text-lg uppercase bg-blue-400 text-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {advertisements.map((advertisement, idx) => (
              <AdvertisementTable
                key={advertisement._id}
                advertisement={advertisement}
                refetch={refetch}
                idx = {idx + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvertisementSec;
