import { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import addNotification from "react-push-notification";
const img = "https://i.postimg.cc/x8dvVkZ6/pexels-julius-silver-753626.jpg";
import google from "../../assets/icon/google.png";
import { ArrowDownward } from "@mui/icons-material";

const Hotel = () => {
  const [values, setValues] = useState([new DateObject(), new DateObject()]);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const axiosPublic = useAxiosPublic();
  
  const checkInDay = values[0].day;
  const checkInMonth = values[0].monthIndex + 1;
  const checkInYear = values[0].year;
  const checkOutDay = values[1]?.day;
  const checkOutMonth = values[1]?.monthIndex + 1;
  const checkOutYear = values[1]?.year;


  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const room = e.target.room.value;
    const adult = e.target.adult.value;
    const children = e.target.children.value;
    const checkInDate = `${checkInYear}-${checkInMonth}-${checkInDay}`;
    const checkOutDate = `${checkOutYear}-${checkOutMonth}-${checkOutDay}`;
    setSearchValue({ location, room, adult, children, checkInDate, checkOutDate });

    axiosPublic(`/hotels?search=${searchValue.location}`)
    .then((res) => {
      setData(res.data);
    });
    e.target.reset();
  };

  const handleNotify = () => {
    addNotification({
      title: "Your Notification",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      icon: google,
      theme: "darkblue",
    });
  };

  useEffect(() => {
    const now = new Date();

    const desire = new Date('2024-01-01T18:49:00.000Z')
    const desiredTime = new Date(desire);

    if (now > desiredTime) {
      desiredTime.setDate(desiredTime.getDate() + 1);
    }

    const timeDifference = desiredTime - now;
    
    const timeoutId = setTimeout(() => {
      handleNotify() 
    }, timeDifference);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
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
            <h1 className="text text-4xl font-semibold mb-3 border-l-[4px] border-l-white pl-2">
              Hotels
            </h1>
            <form onSubmit={handleSearch}>
              <div className="text-center z-10 px-4 py-6 backdrop-blur-md backdrop-invert max-w-full rounded-lg flex items-center justify-evenly gap-4">
                <div className="flex gap-4 flex-1">
                  <label className="form-control border-[1px] border-blue-600 rounded-md flex-1">
                    <label className="block mb-2 text-sm font-medium text-gray-600 mt-2">
                      Search Your Hotel, City or Country
                    </label>
                    <input
                      type="text"
                      id="default-input"
                      name="location"
                      className="bg-transparent text-gray-900 rounded-sm block w-full p-2.5"
                    />
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
                    <div className="form-control border-[1px] rounded-md border-blue-600">
                      <div className="label">
                        <span className="label-text">Rooms and Guests</span>
                      </div>
                      <div className="dropdown dropdown-bottom dropdown-end">
                        <div
                          tabIndex={0}
                          className="m-1 border-none text-black hover:cursor-pointer flex"
                        >
                          <p className="flex-1 text-left mx-1 text-black text-sm font-semibold">
                           Select Rooms, Adults, Children
                          </p>
                          <ArrowDownward />
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] p-2 shadow bg-white rounded-md w-60 text-black"
                        >
                          <li className="flex">
                            <p className="flex-1 text-left"> Rooms</p>
                            <input type="number" className="bg-transparent w-12 pl-2 font-medium text-xl" min={0} name="room" defaultValue={0}/>
                          </li>
                          <li className="flex justify-between">
                           Adult
                            <input type="number" className="bg-transparent w-12 pl-2 font-medium text-xl" min={0} name="adult" defaultValue={0} />
                          </li>
                          <li className="flex justify-between">
                            Children
                            <input type="number" className="bg-transparent w-12 pl-2 font-medium text-xl" min={0} name="children" defaultValue={0} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary text-white text-xl">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center mt-5 text-3xl font-bold">
        Property Found : {data?.length}
      </p>
    </div>
  );
};

export default Hotel;
