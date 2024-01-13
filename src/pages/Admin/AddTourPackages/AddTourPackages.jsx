import { useState } from "react";
import PageTitle from "../../../components/Shared/PageTitle/PageTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Loader from "../../../Utils/Loader/Loader";
const animatedComponents = makeAnimated();

const options = [
  { value: "Non-Smoking", label: "Non-Smoking" },
  { value: "40m", label: "40m" },
  { value: "Privet Bathroom", label: "Privet Bathroom" },
  { value: "Air Conditioning", label: "Air Conditioning" },
  { value: "Refrigerator", label: "Refrigerator" },
];

const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_API_KEY
}`;

const AddTourPackages = () => {
  const [activities, setActivities] = useState(null);
  const [includes, setIncludes] = useState(null);
  const [types, setTypes] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [duration, setDuration] = useState(0);
  const [maxParticipant, setMaxParticipant] = useState(0);
  const [nights, setNights] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const destination = e.target.destination.value;
    const img1 = e.target.image1.files[0];
    const img2 = e.target.image2.files[0];
    const img3 = e.target.image3.files[0];
    const durations = duration;
    const night = nights;
    const maxParticipants = maxParticipant;
    const price = parseInt(e.target.price.value);
    const description = e.target.description.value;
    const tourActivities = activities.map((service) => service.value);
    const tourIncludes = includes.map((service) => service.value);
    // const info = {name, destination, img1, img2, img3, durations, night, maxParticipants,price, description, tourActivities, tourIncludes}
   

    const imgFile = { image: img1};
    const res = await axiosPublic.post(imgUploadUrl, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.data.display_url) {
      setLoading(false);
      const packageInfo = {
            name,
            description,
            destination,
            image: res.data.data.display_url,
            duration: durations,
            price,
            activities: tourActivities,
            accommodation: { nights: night, type: types },
            included: tourIncludes,
            maxParticipants: maxParticipants,
            total_sale: 0,
            ratings: 0,
            reviews: [
                {
                    name: "",
                    review: ""
                }
            ]
      };

      const response = await axiosSecure.patch(`/packages`, packageInfo);
      if (response.data) {
        toast("Package Added Successfully");
        e.target.reset();
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <PageTitle title="Add Tour Packages" />
      <form className="space-y-5 mb-10" onSubmit={handleSubmit}>
        <div className="md:flex gap-5">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Package Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="destination"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Destination
            </label>
          </div>
        </div>
        <div className="md:flex justify-between gap-5">
          <div className="">
            <span>Durations</span>
            <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
              <button
                onClick={() => setDuration(duration + 1)}
                className="text-2xl border-r-[2px] pr-4"
              >
                +
              </button>
              <span className="text-lg">{duration}</span>
              <button
                onClick={() => setDuration(duration - 1)}
                className={`text-2xl border-l-[2px] pl-4 ${
                  duration <= 0 && "btn-disabled"
                }`}
              >
                -
              </button>
            </div>
          </div>
          <div className="">
            <span>Nights</span>
            <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
              <button
                onClick={() => setNights(nights + 1)}
                className="text-2xl border-r-[2px] pr-4"
              >
                +
              </button>
              <span className="text-lg">{nights}</span>
              <button
                onClick={() => setNights(nights - 1)}
                className={`text-2xl border-l-[2px] pl-4 ${
                  nights <= 0 && "btn-disabled"
                }`}
              >
                -
              </button>
            </div>
          </div>
          <div className="">
            <span>Max Participants</span>
            <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
              <button
                onClick={() => setMaxParticipant(maxParticipant + 1)}
                className="text-2xl border-r-[2px] pr-4"
              >
                +
              </button>
              <span className="text-lg">{maxParticipant}</span>
              <button
                onClick={() => setMaxParticipant(maxParticipant - 1)}
                className={`text-2xl border-l-[2px] pl-4 ${
                  maxParticipant <= 0 && "btn-disabled"
                }`}
              >
                -
              </button>
            </div>
          </div>
          <div className="">
            <div className=" py-1 rounded-md flex items-center gap-5 max-w-fit mt-2 relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Price
              </label>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between gap-5">
        <div className="relative w-full mb-5 group z-30 flex-1">
        <span>Types</span>
            <Select
              closeMenuOnSelect={false}
              onChange={setTypes}
              components={animatedComponents}
              isMulti
              options={options}
            />
        </div>
          <div className="flex-1">
            <div className=" py-1 rounded-md flex items-center gap-5 mt-2 relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Price
              </label>
            </div>
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="relative w-full mb-5 group z-30">
            <span>Activities</span>
            <Select
              name="service"
              closeMenuOnSelect={false}
              onChange={setActivities}
              components={animatedComponents}
              isMulti
              options={options}
            />
          </div>
          <div className="relative w-full mb-5 group">
            <span>Includes</span>
            <Select
              name="service"
              closeMenuOnSelect={false}
              onChange={setIncludes}
              components={animatedComponents}
              isMulti
              options={options}
            />
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="relative z-0 w-full group flex-1">
            <label className="block mb-1 text-sm text-gray-900">Image 1</label>
            <input
              className="block w-full py-1 text-gray-900 border border-gray-300 rounded-sm cursor-pointer dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              name="image1"
              multiple
            />
          </div>
          <div className="relative z-0 w-full group flex-1">
            <label className="block mb-1 text-sm text-gray-900">Image 2</label>
            <input
              className="block w-full py-1 text-gray-900 border border-gray-300 rounded-sm cursor-pointer dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              name="image2"
              multiple
            />
          </div>
          <div className="relative z-0 w-full group flex-1">
            <label className="block mb-1 text-sm text-gray-900">Image 3</label>
            <input
              className="block w-full py-1 text-gray-900 border border-gray-300 rounded-sm cursor-pointer dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              name="image3"
              multiple
            />
          </div>
        </div>
        <div className="md:flex gap-5">
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
        <button className="btn w-full bg-green-600 text-white text-xl hover:bg-green-700 flex-1 mt-5">
          {loading ? <Loader width="10"></Loader> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddTourPackages;
