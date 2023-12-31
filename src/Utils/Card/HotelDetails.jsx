/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams()
  console.log(id);
  const {
    data: hotel = [] } = useQuery({
      queryKey: ["hotels"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/hotels/${id}`);
        return res.data;
      },
    });
  console.log(hotel);
  return (

    <div className="container">
      <div className="px-2 pb-2">
        <h5 className="font-semibold text-5xl mb-3 leading-[130%]">{hotel.hotel_name}</h5>
        <p>{hotel.hotel_location}</p>
      </div>
      <div className="flex gap-2 flex-col 2xl:flex-row">
        <div className="w-1/2" >
          <img src="https://i.postimg.cc/N0bYyZRj/westine2.jpg" alt="" className="w-[100%] h-full rounded-md" />
        </div>
        <div className="w-1/2">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex gap-2">
              <img src="https://i.postimg.cc/Yq9dq4mH/westine3.jpg" alt="" className="w-[45%] h-[50%] mb-5 rounded-md ml-2" />
              <img src="https://i.postimg.cc/yxkBmxGQ/westine1.jpg" alt="" className="w-[45%] h-[50%] mb-5 rounded-md mr-2" />
            </div>
            <div className="flex gap-2">
              <img src="https://i.postimg.cc/B6VCvQ6c/westine4.jpg" alt="" className="w-[45%] rounded-md ml-2" />
              <img src="https://i.postimg.cc/B6VCvQ6c/westine4.jpg" alt="" className="w-[45%] rounded-md mr-2" />
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-between my-4 mx-auto">
        <div className="font-semibold capitalize text-lg">Rooms details in the westine hotel
          <div className="text-[#9e9e9e] text-base 2xl:text-lg">
            <span className="after:content-['•'] after:inline-block after:text-primary after:mx-1 ">
              3 rooms
            </span>
            <span> coming........</span>
            <div className="mt-20">
              <h1 className="font-semibold mb-5 text-black">Our facilities</h1>
              <div className="flex justify-between gap-24">
                <div><ul className="text-black">
                  <li>{hotel.Service[0]}</li>
                  <li>{hotel.Service[1]}</li>
                  <li>{hotel.Service[2]}</li>
                  <li>{hotel.Service[3]}</li>
                  <li>{hotel.Service[4]}</li>
                  <li>{hotel.Service[5]}</li>
                  <li>{hotel.Service[6]}</li>
                  <li>{hotel.Service[7]}</li>
                </ul></div>
                <div>
                <div><ul className="text-black">
                  <li>{hotel.Service[8]}</li>
                  <li>{hotel.Service[9]}</li>
                  <li>{hotel.Service[10]}</li>
                  <li>{hotel.Service[11]}</li>
                  <li>{hotel.Service[12]}</li>
                  <li>{hotel.Service[13]}</li>
                  <li>{hotel.Service[14]}</li>
                  
                </ul></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl mr-10">
            <div className="card-body">
              <h2 className="card-title">$255
                <span></span></h2>
              <form action="">
                <div className="flex justify-between">
                  <div>
                    <label htmlFor="">check-in</label><br />
                    <input type="date" className="bg-gray-50 border px-1 rounded-md mt-2" />
                  </div>
                  <div>
                    <label htmlFor="">check-out</label><br />
                    <input type="date" className="bg-gray-50 border px-1 rounded-md mt-2" />
                  </div>
                </div>
                <button className="btn btn-primary w-full bg-red-400 mt-5 ">Reserve</button>
                <p className="mt-5 text-center">You won&apos;t be change yet</p>
              </form>



            </div>
          </div></div>
      </div>
      
    </div>

  );
};

export default HotelDetails;