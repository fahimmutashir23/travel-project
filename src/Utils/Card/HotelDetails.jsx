/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const HotelDetails = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {user} = useAuth();

  const { data: hotel = [], isLoading } = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/hotels/${id}`);
      return res.data;
    },
  });

  console.log(hotel);
  const handleReserve = e => {
    e.preventDefault()
    const checkIn = e.target.checkIn.value;
    const checkOut = e.target.checkOut.value;
    const reserveInfo = {
      id: id,
      email: user?.email,
      userName: user?.displayName,
      hotelName: hotel.hotel_name,
      roomName: hotel.hotel_room[0].room_name,
      roomPrice: hotel.hotel_room[0].room_price,
      checkIn,
      checkOut
    }
    axiosSecure.post('/bookings', reserveInfo)
    .then(res => {
      if(res.data.insertedId){
        toast('Booking Success')
      }
    })
  }

  if(isLoading){
    return <Loader width={20} center='center'></Loader>
  }
  
  return (
    <div className="container">
      <div className="px-2 pb-2">
        <h5 className="font-semibold text-5xl mb-3 leading-[130%]">
          {hotel.hotel_name}
        </h5>
        <p>{hotel.hotel_location}</p>
      </div>
      <div className="flex gap-2 flex-col 2xl:flex-row">
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
                className="w-[45%] h-[50%] mb-5 rounded-md ml-2"
              />
              <img
                src="https://i.postimg.cc/yxkBmxGQ/westine1.jpg"
                alt=""
                className="w-[45%] h-[50%] mb-5 rounded-md mr-2"
              />
            </div>
            <div className="flex gap-2">
              <img
                src="https://i.postimg.cc/B6VCvQ6c/westine4.jpg"
                alt=""
                className="w-[45%] rounded-md ml-2"
              />
              <img
                src="https://i.postimg.cc/B6VCvQ6c/westine4.jpg"
                alt=""
                className="w-[45%] rounded-md mr-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:justify-between my-4 mx-auto">
        <div className="font-semibold capitalize text-lg">
          Rooms details in the westine hotel
           <p className="text-base mt-5 text-black text-left w-1/2">{hotel.description}</p>
          <div className="text-[#9e9e9e] text-base 2xl:text-lg">
           <div className="grid grid-cols-2 md:grid-cols-3 mt-5 w-3/4 gap-2">
            {
              hotel.hotel_room?.map(room=><div key={room.room_id} className="flex flex-col justify-center max-w-xs p-2 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
               <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                <div className="my-1 space-y-1">
                <svg fill="#000000" height="34px" width="34px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463" xmlns:xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 463 463"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m439.5,224h-8.5v-104.5c0-8.547-6.953-15.5-15.5-15.5h-39.319c-3.158,0-6.102-0.827-8.513-2.392-28.577-18.54-79.481-29.608-136.168-29.608s-107.591,11.068-136.168,29.608c-2.411,1.564-5.354,2.392-8.513,2.392h-39.319c-8.547,0-15.5,6.953-15.5,15.5v104.5h-8.5c-12.958,0-23.5,10.542-23.5,23.5v16c0,10.336 6.71,19.128 16,22.266v65.734c0,10.336 6.71,19.128 16,22.266v9.734c0,4.143 3.358,7.5 7.5,7.5s7.5-3.357 7.5-7.5v-8.5h369v8.5c0,4.143 3.358,7.5 7.5,7.5s7.5-3.357 7.5-7.5v-9.734c9.29-3.138 16-11.93 16-22.266v-65.734c9.29-3.138 16-11.93 16-22.266v-16c0-12.958-10.542-23.5-23.5-23.5zm-392.5-104.5c0-0.275 0.224-0.5 0.5-0.5h39.319c6.063,0 11.83-1.662 16.677-4.808 25.853-16.772 74.901-27.192 128.004-27.192s102.151,10.42 128.003,27.192c4.848,3.146 10.614,4.808 16.677,4.808h39.32c0.276,0 0.5,0.225 0.5,0.5v104.5h-21.681c2.965-4.802 4.681-10.454 4.681-16.5v-32c0-17.369-14.131-31.5-31.5-31.5h-96c-17.369,0-31.5,14.131-31.5,31.5v32c0,6.046 1.716,11.698 4.681,16.5h-26.363c2.965-4.802 4.681-10.454 4.681-16.5v-32c0-17.369-14.131-31.5-31.5-31.5h-96c-17.368,0-31.499,14.131-31.499,31.5v32c0,6.046 1.716,11.698 4.681,16.5h-21.681v-104.5zm208,88v-32c0-9.098 7.402-16.5 16.5-16.5h96c9.098,0 16.5,7.402 16.5,16.5v32c0,9.098-7.402,16.5-16.5,16.5h-96c-9.098,0-16.5-7.402-16.5-16.5zm-176,0v-32c0-9.098 7.402-16.5 16.5-16.5h96c9.098,0 16.5,7.402 16.5,16.5v32c0,9.098-7.402,16.5-16.5,16.5h-96c-9.098,0-16.5-7.402-16.5-16.5zm344.5,152.5h-384c-4.687,0-8.5-3.813-8.5-8.5v-64.5h401v64.5c0,4.687-3.813,8.5-8.5,8.5zm24.5-96.5c0,4.687-3.813,8.5-8.5,8.5h-416c-4.687,0-8.5-3.813-8.5-8.5v-16c0-4.687 3.813-8.5 8.5-8.5h16 56 96 80 96 56 16c4.687,0 8.5,3.813 8.5,8.5v16z"></path> </g></svg>

                  <h2 className="text-base font-base text-black text-left ">{room.room_name}</h2>
                  <h2 className="text-base font-semibold text-black text-left">Bed: {room.sleeps}</h2>
                  <h2 className="text-base font-semibold text-black text-left">Bed size: {room.beds}</h2>
                  <p className="text-xs sm:text-base text-black dark:text-gray-400 text-left">Price: {room.room_price}</p>
                </div>
                <form onSubmit={handleReserve}>
                <div className="flex flex-col lg:flex-row lg:justify-between text-sm mt-4 items-start ">
                  <div>
                    <label className="text-left mr-20">check-in</label>
                    <br />
                    <input
                      type="date"
                      name="checkIn"
                      className="bg-gray-50 border rounded-md mt-2 mr-3"
                    />
                  </div>
                  <div>
                    <label className="lg:mr-12">check-out</label>
                    <br />
                    <input
                      type="date"
                      name="checkOut"
                      className="bg-gray-50 border rounded-md mt-2"
                    />
                  </div>
                </div>
                <button type="submit" className="w-full bg-pink-700 mt-5 text-white rounded-md py-1">
                  Reserve
                </button>
                <p className="mt-5 text-center text-base ">You won&apos;t be change yet</p>
              </form>
              </div>
            </div>)
            }
           </div>
            <div className="mt-20">
              <h1 className="font-semibold mb-5 text-black dark:text-white">Our facilities</h1>
              <div className="">
               <ul className="grid grid-cols-2 gap-3">
               {
                  hotel.Service?.map((item,idx) => (
                    <li key={idx}>{idx+1}. {item}</li>
                  ))
                }
               </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
