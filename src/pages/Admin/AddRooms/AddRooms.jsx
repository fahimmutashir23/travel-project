import { useState } from "react";
import PageTitle from "../../../components/Shared/PageTitle/PageTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Loader from "../../../Utils/Loader/Loader";
const animatedComponents = makeAnimated();

// const hotelCategory = [
//   "Business Hotel",
//   "Airport Hotels",
//   "Suite Hotels",
//   "Extended Stay Hotels",
//   "Serviced Apartments",
//   "Resort Hotels",
//   "Casino Hotels",
//   "Convention Center",
//   "City Hotels",
//   "Motels",
// ];
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

const AddRooms = () => {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [bedRoomNumber, setBedRoomNumber] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);
  const [sleepsCount, setSleepsCount] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [guest, setGuest] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const hotel_name = e.target.hotel_name.value;
    const room_name = e.target.room_name.value;
    const room_price = roomPrice;
    const sleeps = sleepsCount;
    const beds = e.target.bed_name.value;
    const room_img = e.target.image.files[0];
    const guests = guest;
    const bathrooms = bathroom;
    const bedrooms = bedRoomNumber;
    const room_details = services.map((service) => service.value);

    const imgFile = { image: room_img };
    const res = await axiosPublic.post(imgUploadUrl, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.data.display_url) {
      setLoading(false);
      const roomInfo = {
        room_name: room_name,
        room_price: room_price,
        sleeps: sleeps,
        beds: beds,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        guests: guests,
        room_img: [res.data.data.display_url],
        room_details: [room_details]
      };

      const response = await axiosSecure.patch(`/rooms/${hotel_name}`, roomInfo);
      if (response.data) {
        toast("Room Added Successfully");
        e.target.reset();
        setLoading(false);
      }
    }
  };

  return (
    <div className="mt-5 min-h-screen">
      <PageTitle title="add rooms"></PageTitle>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="md:flex gap-5">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="hotel_name"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Hotel Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="room_name"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Room Name
            </label>
          </div>
        </div>
        <div className="md:flex justify-between gap-5">
          <div className="">
            <span>BedRoom Number</span>
            <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
              <button
                onClick={() => setBedRoomNumber(bedRoomNumber + 1)}
                className="text-2xl border-r-[2px] pr-4"
              >
                +
              </button>
              <span className="text-lg">{bedRoomNumber}</span>
              <button
                onClick={() => setBedRoomNumber(bedRoomNumber - 1)}
                className={`text-2xl border-l-[2px] pl-4 ${
                  bedRoomNumber <= 0 && "btn-disabled"
                }`}
              >
                -
              </button>
            </div>
          </div>
          <div className="">
            <span>BathRoom Number</span>
            <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
              <button
                onClick={() => setBathroom(bathroom + 1)}
                className="text-2xl border-r-[2px] pr-4"
              >
                +
              </button>
              <span className="text-lg">{bathroom}</span>
              <button
                onClick={() => setBathroom(bathroom - 1)}
                className={`text-2xl border-l-[2px] pl-4 ${
                  bathroom <= 0 && "btn-disabled"
                }`}
              >
                -
              </button>
            </div>
          </div>
          <div className="">
            <span>Room Price</span>
            <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
              <button
                onClick={() => setRoomPrice(roomPrice + 1)}
                className="text-2xl border-r-[2px] pr-4"
              >
                +
              </button>
              <span className="text-lg">{roomPrice}</span>
              <button
                onClick={() => setRoomPrice(roomPrice - 1)}
                className={`text-2xl border-l-[2px] pl-4 ${
                  roomPrice <= 0 && "btn-disabled"
                }`}
              >
                -
              </button>
            </div>
          </div>
          <div className="">
            <span>Sleeps</span>
            <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
              <button
                onClick={() => setSleepsCount(sleepsCount + 1)}
                className="text-2xl border-r-[2px] pr-4"
              >
                +
              </button>
              <span className="text-lg">{sleepsCount}</span>
              <button
                onClick={() => setSleepsCount(sleepsCount - 1)}
                className={`text-2xl border-l-[2px] pl-4 ${
                  sleepsCount <= 0 && "btn-disabled"
                }`}
              >
                -
              </button>
            </div>
          </div>
          <div className="">
            <span>Bed Number</span>
            <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
              <button
                onClick={() => setGuest(guest + 1)}
                className="text-2xl border-r-[2px] pr-4"
              >
                +
              </button>
              <span className="text-lg">{guest}</span>
              <button
                onClick={() => setGuest(guest - 1)}
                className={`text-2xl border-l-[2px] pl-4 ${
                  guest <= 0 && "btn-disabled"
                }`}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="relative w-full mb-5 group z-30">
            <span>Room Facilities</span>
            <Select
              name="service"
              closeMenuOnSelect={false}
              onChange={setServices}
              components={animatedComponents}
              isMulti
              options={options}
            />
          </div>
          <div className="relative z-0 w-full mb-5 mt-5 group">
            <input
              type="text"
              name="bed_name"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Bed Name
            </label>
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="relative z-0 w-full group flex-1">
            <label className="block mb-1 text-sm text-gray-900">
              Upload Room Image
            </label>
            <input
              className="block w-full py-1 text-gray-900 border border-gray-300 rounded-sm cursor-pointer dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              name="image"
              multiple
            />
          </div>
          <button className="btn w-full bg-green-600 text-white text-xl hover:bg-green-700 flex-1 mt-5">
            {loading ? <Loader width="10"></Loader> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRooms;
