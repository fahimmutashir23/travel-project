/* eslint-disable react/prop-types */
import mapImg from "../../assets/backgroundImage/mapImg.jpg";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useState } from "react";
import Payment from "../../pages/Payment/Payment";
import { Button, Rating } from "@mui/material";
import { IoBed } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import Title from "../Title/Title";
import { LaunchOutlined } from "@mui/icons-material";
import MapModal from "../MapModal/MapModal";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import useTourPackages from "../../Hooks/useTourPackages";

const HotelDetails = () => {
  const { user } = useAuth();
  const [tourPackages] = useTourPackages("", {});
  console.log(tourPackages);

  const [checkInDate, setCheckInDate] = useState({});
  const [checkOutDate, setCheckOutDate] = useState({});
  const [roomId, setRoomId] = useState(null);
  const [open, setOpen] = useState(false);


  const reserveDaysMillisecond =
    new Date(checkOutDate.date) - new Date(checkInDate.date);
  const days = reserveDaysMillisecond / (1000 * 60 * 60 * 24);
  const reserveDays = { days, id: checkOutDate.id };
  const reserveDate = { checkIn: checkInDate, checkOut: checkOutDate };

  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const handleOpen = (id) => {
    setOpen(true);
    setRoomId(id);
  };

  const { data: hotel = [], isLoading } = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/hotels/${id}`);
      return res.data;
    },
  });

  const handleCheckIn = (date, id) => {
    setCheckInDate({ date, id });
  };

  const handleCheckOut = (date, id) => {
    setCheckOutDate({ date, id });
  };

  if (isLoading) {
    return <Loader width={20} center="center"></Loader>;
  }

  return (
    <div className=" px-10 mx-auto pt-[90px]">
      <Title title={hotel.hotel_name} />
      <div className="px-2 pb-2">
        <h5 className="font-semibold text-5xl mb-3 leading-[130%]">
          {hotel.hotel_name}
        </h5>
        <p>{hotel.hotel_location}</p>
      </div>
      <div className="flex gap-2 flex-col md:flex-row 2xl:flex-row">
        <div className="md:w-1/2">
          <img
            src={hotel.img_gallery.img1}
            alt=""
            className="md:w-full rounded-md md:h-[600px]"
          />
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-1.5">
            <img
              src={hotel.img_gallery.img2}
              alt=""
              className="rounded-md md:w-full md:h-[297px] h-[100px]"
            />
            <img
              src={hotel.img_gallery.img3}
              alt=""
              className="rounded-md md:w-full md:h-[297px] h-[100px]"
            />
            <img
              src={hotel.img_gallery.img4}
              alt=""
              className="rounded-md md:w-full md:h-[297px] h-[100px]"
            />
            <img
              src={hotel.img_gallery.img5}
              alt=""
              className="rounded-md md:w-full md:h-[297px] h-[100px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:justify-between my-4 mx-auto">
        <div className="font-semibold capitalize text-lg">
          <div className="md:flex gap-4">
            <div className="flex-1">
              Details of{" "}
              <span className="text-xl font-bold">{hotel.hotel_name}</span>
              <p className="text-base mt-2 text-black text-left mb-10">
                {hotel.description}
              </p>
            </div>
            <div
              style={{ backgroundImage: `url(${mapImg})` }}
              className="w-3/12 h-28 rounded-lg bg-cover border-2 border-violet-600 md:mt-10 overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-b from-white flex justify-center items-center">
                <div className="text-center space-y-5">
                  <h3 className="text-2xl font-bold text-blue-700">
                    See Hotel Location
                  </h3>
                  <Button
                    onClick={() => document.getElementById('map_modal').showModal()}
                    variant="contained" endIcon={<LaunchOutlined />}>
                    View Map
                  </Button>
                </div>
                <MapModal id="map_modal" hotel={hotel} />
              </div>
            </div>
          </div>
          <div>
            {hotel.hotel_room?.map((room, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center shadow-md rounded-xl text-black"
              >
                <div>
                  <div className="flex mx-auto border-dotted border-slate-800">
                    <div className="">
                      <img
                        className="overflow-hidden w-72 h-52 p-2"
                        src={room.room_img}
                      />
                    </div>
                    <div className="flex justify-between flex-1 px-4 mt-5 mb-5">
                      <div className="flex flex-col justify-between">
                        <div>
                          <h1 className="text-lg font-semibold text-blue-950">
                            {room.room_name}
                          </h1>
                          <div className="flex mt-1">
                            <h1>Room Price: {room.room_price}$</h1>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <button className="rounded-none h-9 text-base py-1 min-h-fit ">
                            <FaUser />
                          </button>
                          <div className="flex items-center text-sm">
                            <IoBed className="w-6 h-6 mr-1" />
                            {room.beds}{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex justify-end">
                          <Rating
                            sx={{ fontSize: "22px", color: "yellow" }}
                            name="read-only"
                            readOnly
                          />
                        </div>
                        <div>
                          <div className="flex flex-col lg:flex-row lg:justify-between text-sm mt-4 items-start ">
                            <div>
                              <label className="text-left mr-20">
                                check-in
                              </label>
                              <br />
                              <input
                                onChange={(e) =>
                                  handleCheckIn(e.target.value, room.room_id)
                                }
                                type="date"
                                name="checkIn"
                                className="p-2 border rounded-md mt-2 mr-3"
                              />
                            </div>
                            <div>
                              <label className="lg:mr-12">check-out</label>
                              <br />
                              <input
                                onChange={(e) =>
                                  handleCheckOut(e.target.value, room.room_id)
                                }
                                type="date"
                                name="checkOut"
                                className="p-2 border rounded-md mt-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-end">
                          <p className="mt-5 text-sm text-gray-600">
                            {!user && "Login first to reserve"}
                          </p>
                          <button
                            onClick={() => handleOpen(idx + 1)}
                            type="submit"
                            className={`btn w-full bg-[#E36252] text-white rounded-md py-1 ${(!user && "btn-disabled") ||
                              (idx + 1 !== checkOutDate.id && "btn-disabled")
                              }`}
                          >
                            Reserve
                          </button>
                        </div>
                        <Payment
                          room_id={roomId}
                          open={open}
                          setOpen={setOpen}
                          hotel={hotel}
                          room={room}
                          reserveDate={reserveDate}
                          reserveDays={reserveDays}
                        ></Payment>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <h1 className="font-semibold mb-5 text-black dark:text-white text-3xl">
              Our facilities
            </h1>
            <div className="">
              <ul className="flex flex-wrap gap-16">
                <div className="flex items-center bg-cover p-8 rounded-lg w-64" style={{ backgroundImage: "url(https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/section-bg-5.png)" }}>
                  <img
                    src="https://i.postimg.cc/4yszwd3s/POOL-7.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li className="ml-3 font-semibold text-xl">{hotel?.Service[0]} </li>
                </div>
                <div className="flex items-center p-8 rounded-lg w-64 bg-cover" style={{ backgroundImage: "url(https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/section-bg-5.png)" }}>
                  <img
                    src="https://i.postimg.cc/tJKFvZxM/attachment-127305076.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li className="ml-3 font-semibold text-xl">{hotel.Service[1]} </li>
                </div>
                <div className="flex items-center p-8 rounded-lg w-64 bg-cover" style={{ backgroundImage: "url(https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/section-bg-5.png)" }}>
                  <img
                    src="https://i.postimg.cc/JtCB5www/casino-vector-text-sign-freehand-typography-design-casino-vector-text-sign-125148175.webp"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li className="ml-3 font-semibold text-xl">{hotel?.Service[2]} </li>
                </div>
                <div className="flex items-center p-8 rounded-lg w-64 bg-cover" style={{ backgroundImage: "url(https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/section-bg-5.png)" }}>
                  <img
                    src="https://i.postimg.cc/k4rRWVk1/modern.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li className="ml-3 font-semibold text-xl">{hotel.Service[3]} </li>
                </div>
                <div className="flex items-center p-8 rounded-lg w-64 bg-cover" style={{ backgroundImage: "url(https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/section-bg-5.png)" }}>
                  <img
                    src="https://i.postimg.cc/Px2hT9zW/OIP.jpg"
                    alt=""
                    className="w-10 mr-1"
                  />{" "}
                  <li className="ml-3 font-semibold text-xl">{hotel?.Service[4]} </li>
                </div>
                <div className="flex items-center p-8 rounded-lg w-64 bg-cover" style={{ backgroundImage: "url(https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/section-bg-5.png)" }}>
                  <img
                    src="https://i.postimg.cc/gjSt5J0F/OIP-2.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li className="ml-3 font-semibold text-xl">{hotel?.Service[6]} </li>
                </div>
                <div className="flex items-center p-8 rounded-lg w-64 bg-cover" style={{ backgroundImage: "url(https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/section-bg-5.png)" }}>
                  <img
                    src="https://i.postimg.cc/Px7cSyrz/R.jpg"
                    alt=""
                    className="w-10"
                  />{" "}
                  <li className="ml-3 font-semibold text-xl">{hotel?.Service[7]} </li>
                </div>
                <div className="flex items-center p-8 rounded-lg w-64 bg-cover" style={{ backgroundImage: "url(https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/section-bg-5.png)" }}>
                  <img
                    src="https://i.postimg.cc/vmWgGYNp/59499f328b852-thumb900.webp"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li className="ml-3 font-semibold text-xl">{hotel?.Service[8]} </li>
                </div>
                {/* <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/13Y3ycfb/restaurant-logo-design-636083.webp"
                    alt=""
                    className="w-10"
                  />{" "}
                  <li>{hotel?.Service[9]} </li>
                </div> */}
                {/* <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/TwFp988d/R.png"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[10]} </li>
                </div> */}
                {/* <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/5NbSQGJc/cropped-roomswithgreatviews.png"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[11]} </li>
                </div> */}
                {/* <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/8cKc5jDz/currency-exchange-glyph-black-icon-vector.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[12]} </li>
                </div> */}
                {/* <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/gjcNvBh2/OIP-1.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[13]} </li>
                </div> */}
                {/* <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/tgfq0hBD/reception-desk-line-icon-24-hour-help-sign-hotel-vector-28139555.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[14]} </li>
                </div> */}
              </ul>
            </div>
          </div>
          <div className="mt-20">
          
            <div className="dark:text-gray-100">
              <p className="font-semibold mb-5 text-black dark:text-white text-3xl"> Reviews...</p>
            </div>
            <div className="pt-12 border-t dark:border-gray-700 border w-1/3">
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold mb-3" >Leroy Jenkins</h4>
                  <div>
                    <Rating
                      sx={{ fontSize: "20px" }}
                      name="read-only"
                      value={5}
                      readOnly
                    />
                  </div>
                  <p className="dark:text-gray-400 mt-3">{hotel?.guest_review?.description}</p>
                </div>
              </div>
              <div className="flex justify-center pt-4 space-x-4 align-center">
                <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                  <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                    <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        breakpoints={{
          570: { slidesPerView: 1, spaceBetween: 70 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1152: { slidesPerView: 4, spaceBetween: 50 }
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow,]}
        navigation={true}
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper mt-32"
      >
        {tourPackages.map(item => (

          <SwiperSlide key={item.id} className='pb-9'>
            <article className="shadow-2xl rounded-lg pb-5">
              <div className="_item-image">
                <img src={item.image} alt="" className="h-80 rounded-xl" />
              </div>
              <h3 className='ml-3 mt-2'>{item.name}</h3>
              <div className="">

              </div>
            </article>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default HotelDetails;
