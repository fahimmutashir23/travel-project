/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useState } from "react";
import Payment from "../../pages/Payment/Payment";
import { Rating } from "@mui/material";
import { IoBed } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
const HotelDetails = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const reserveDaysMillisecond = new Date(checkOutDate) - new Date(checkInDate);
  const reserveDays = reserveDaysMillisecond / (1000 * 60 * 60 * 24);
  const reserveDate = { checkIn: checkInDate, checkOut: checkOutDate };
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const { data: hotel = [], isLoading } = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/hotels/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader width={20} center="center"></Loader>;
  }

  return (
    <div className="container">
      <div className="px-2 pb-2">
        <h5 className="font-semibold text-5xl mb-3 leading-[130%]">
          {hotel.hotel_name}
        </h5>
        <p>{hotel.hotel_location}</p>
      </div>
      <div className="flex gap-2 flex-col md:flex-row  2xl:flex-row">
        <div className="w-1/2">
          <img
            src="https://i.postimg.cc/N0bYyZRj/westine2.jpg"
            alt=""
            className="w-[100%] h-full rounded-md"
          />
        </div>
        <div className="w-1/2">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex gap-2">
              <img
                src="https://i.postimg.cc/Yq9dq4mH/westine3.jpg"
                alt=""
                className="w-[47%] h-[51%] mb-5 rounded-md ml-2"
              />
              <img
                src="https://i.postimg.cc/yxkBmxGQ/westine1.jpg"
                alt=""
                className="w-[47%] h-[51%] mb-5 rounded-md mr-2"
              />
            </div>
            <div className="flex gap-2">
              <img
                src="https://i.postimg.cc/B6VCvQ6c/westine4.jpg"
                alt=""
                className="w-[47%] rounded-md ml-2"
              />
              <img
                src="https://i.postimg.cc/B6VCvQ6c/westine4.jpg"
                alt=""
                className="w-[47%] rounded-md mr-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:justify-between my-4 mx-auto">
        <div className="font-semibold capitalize text-lg">
          Rooms details in {hotel.hotel_name} hotel
          <p className="text-base mt-5 text-black text-left w-1/2">
            {hotel.description}
          </p>
          <div className="">
            {hotel.hotel_room?.map((room) => (
              <div
                key={room.room_id}
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
                                onChange={(e) => setCheckInDate(e.target.value)}
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
                                  setCheckOutDate(e.target.value)
                                }
                                type="date"
                                name="checkOut"
                                className="p-2 border rounded-md mt-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={handleOpen}
                            type="submit"
                            className={`btn w-full bg-[#E36252] mt-5 text-white rounded-md py-1 ${
                              (!checkInDate && "btn-disabled") ||
                              (!checkOutDate && "btn-disabled")
                            }`}
                          >
                            Reserve
                          </button>
                        </div>
                        <Payment
                          open={open}
                          setOpen={setOpen}
                          room={room}
                          hotel_name={hotel.hotel_name}
                          reserveDate={reserveDate}
                          id={hotel._id}
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
            <h1 className="font-semibold mb-5 text-black dark:text-white">
              Our facilities
            </h1>
            <div className="">
              <ul className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/4yszwd3s/POOL-7.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[0]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/tJKFvZxM/attachment-127305076.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel.Service[1]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/JtCB5www/casino-vector-text-sign-freehand-typography-design-casino-vector-text-sign-125148175.webp"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[2]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/k4rRWVk1/modern.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel.Service[3]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/Px2hT9zW/OIP.jpg"
                    alt=""
                    className="w-10 mr-1"
                  />{" "}
                  <li>{hotel?.Service[4]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/gjSt5J0F/OIP-2.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[6]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/Px7cSyrz/R.jpg"
                    alt=""
                    className="w-10"
                  />{" "}
                  <li>{hotel?.Service[7]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/vmWgGYNp/59499f328b852-thumb900.webp"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[8]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/13Y3ycfb/restaurant-logo-design-636083.webp"
                    alt=""
                    className="w-10"
                  />{" "}
                  <li>{hotel?.Service[9]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/TwFp988d/R.png"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[10]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/5NbSQGJc/cropped-roomswithgreatviews.png"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[11]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/8cKc5jDz/currency-exchange-glyph-black-icon-vector.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[12]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/gjcNvBh2/OIP-1.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[13]} </li>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.postimg.cc/tgfq0hBD/reception-desk-line-icon-24-hour-help-sign-hotel-vector-28139555.jpg"
                    alt=""
                    className="w-12"
                  />{" "}
                  <li>{hotel?.Service[14]} </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-semibold mb-5 text-black dark:text-white">
              Reviews
            </h1>
            <h1>{hotel?.guest_review?.description}</h1>
            <div>
              <Rating
                sx={{ fontSize: "20px" }}
                name="read-only"
                value={5}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
