import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import PageTitle from "../Shared/PageTitle/PageTitle";
import Loader from "../../Utils/Loader/Loader";

const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_API_KEY
}`;
const ReviewForm = () => {
    const [services, setServices] = useState(null);
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const hotel_name = e.target.hotel_name.value;
      const hotel_location = e.target.hotel_location.value;
      const country = e.target.country.value;
      const category = e.target.category.value;
      const description = e.target.description.value;
      const hotel_image = e.target.image.files[0];
      const hotel_service = services.map((service) => service.value);
  
      const imgFile = { image: hotel_image };
      const res = await axiosPublic.post(imgUploadUrl, imgFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
  
      if (res.data.data.display_url) {
        setLoading(false);
        const hotelInfo = {
          hotel_name,
          hotel_img: res.data.data.display_url,
          hotel_location,
          Service: hotel_service,
          category,
          description,
          hotel_country: country,
        };
  
        const response = await axiosSecure.post(`/hotels`, hotelInfo);
        if (response.data) {
          toast("Hotel Added Successfully");
          e.target.reset();
          setLoading(false);
        }
      }
    };
  
  return (
    <div><div className="mt-5 max-w-3xl mx-auto border-[6px] p-2 bg-white shadow-lg shadow-gray-300">
    <PageTitle title="Add Reviews"></PageTitle>
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Your_Name"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Your Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="hotel_star"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Hotel Star
          </label>
        </div>
      </div>
      
      <div className="">
        <div className="relative w-full mb-5 group z-30">
          
        </div>
        <div className="relative z-0 w-full mb-5 group pt-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Upload Your Image
          </label>
          <input
            className="block w-full pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            name="image"
            multiple
          />
        </div>
      </div>
      <div className="pt-5">
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            id="message"
            name="description"
            rows="5"
            required
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
            placeholder="Write The Hotel Descriptions here..."
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn w-full bg-blue-600 text-white text-xl hover:bg-blue-700">
          {loading ? <Loader width="10"></Loader> : "Submit"}
        </button>
      </div>
    </form>
  </div></div>
  )
}

export default ReviewForm