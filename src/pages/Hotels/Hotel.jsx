import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const img = "https://i.postimg.cc/x8dvVkZ6/pexels-julius-silver-753626.jpg";
const cityOptions = [
  "The Westin",
  "Gulshan-2, Dhaka, Bangladesh",
  "Bangladesh",
  "Grand Palace Hotel",
  "Downtown, London, UK",
  "United Kingdom",
  "Azure Shores Resort",
  "Waikiki Beach, Honolulu, USA",
  "Tropical Oasis Resort",
  "Maui, Hawaii, USA",
  "Sunny Beach Resort",
  "Cancun, Mexico",
  "Phuket, Thailand",
  "Serene Cove Retreat",
   "Coastal Vista Resort",
  "Gold Coast, Australia",
   "Mountain Vista Lodge",
   "Aspen, Colorado, USA",
  "Island Paradise Retreat",
  "Bora Bora, French Polynesia",
  "French Polynesia",
  "Dubai Marina, Dubai, UAE",
  "United Arab Emirates",
  "Downtown Dubai, Dubai, UAE",
  "United Arab Emirates",
]
                     

const Hotel = () => {
  const [values, setValues] = useState([new DateObject(), new DateObject()]);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const axiosPublic = useAxiosPublic();
  const checkInDay = values[0].day;
  const checkInMonth = values[0].monthIndex;
  const checkInYear = values[0].year;
  const checkOutDay = values[1]?.day;
  const checkOutMonth = values[1]?.monthIndex;
  const checkOutYear = values[1]?.year;
  
  
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const room = e.target.rooms.value;
    const checkInDate = `${checkInDay}/${checkInMonth}/${checkInYear}`;
    const checkOutDate = `${checkOutDay}/${checkOutMonth}/${checkOutYear}`;
    setSearchValue({location, room, checkInDate, checkOutDate})
    axiosPublic(`/hotels?search=${searchValue.location}`)
    .then(res => {
      setData(res.data)
    })
    e.target.reset()
  };

  return (
    <div className="relative">
      <div className="" data-aos="zoom-in">
        <div
          className="rounded-xl hero  h-[500px] text-white"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-40"></div>
          <div
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-full md:px-14 sticky top-[84px]"
          >
            <h1 className="text text-4xl font-semibold mb-3 border-l-[4px] border-l-white pl-2">Hotels</h1>
            <form onSubmit={handleSearch}>
              <div className="text-center z-10 px-4 py-6 backdrop-blur-md backdrop-invert max-w-full rounded-lg flex items-center justify-evenly gap-4">
                <div className="flex gap-4 flex-1">
                  <label className="form-control border-[1px] border-blue-600 rounded-md flex-1">
                    <div className="label">
                      <span className="label-text">
                        Pick Country, City or Hotels
                      </span>
                    </div>
                    <select
                      name="location"
                      className="select bg-transparent text-black"
                    >
                      <option disabled selected>
                        Pick one
                      </option>
                      {
                        cityOptions.map((option, idx) => (
                          <option key={idx}>{option}</option>
                        ))
                      }
                    </select>
                  </label>
                  <div className="border-[1px] border-blue-600 rounded-md p-2 flex-1">
                    <p className="text-black text-sm">
                      Select Check In and Check Out date
                    </p>
                    <DatePicker
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        height: "24px",
                        borderRadius: "8px",
                        border: "none",
                        fontSize: "16px",
                        padding: "24px 16px",
                      }}
                      value={values}
                      onChange={setValues}
                      range
                    />
                  </div>
                  <div className="flex-1">
                    <label className="form-control border-[1px] rounded-md border-blue-600">
                      <div className="label">
                        <span className="label-text">
                          Pick Country, City or Hotels
                        </span>
                      </div>
                      <select
                        name="rooms"
                        className="select bg-transparent text-black"
                      >
                        <option disabled selected>
                          Pick one
                        </option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="">
                  <button className="btn btn-primary text-white text-xl">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center mt-5 text-3xl font-bold">Property Found : {data?.length}</p>
    </div>
  );
};

export default Hotel;
