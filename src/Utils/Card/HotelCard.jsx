import { Rating } from "@mui/material";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const fromRoomRate = hotel.hotel_room?.map((room) => room.room_price);
  const fromRate = fromRoomRate?.reduce((acc, slip) => Math.min(acc, slip));


  
  return (
   <div className="">
     <Link to={`/hotelDetails/${hotel._id}`}>
      <div className="w-80 bg-white rounded-lg dark:border-gray-700 shadow-lg">
        <div className="w-full h-56 rounded-t-lg relative">
          <img
            className="p-2 w-full h-full object-cover rounded-2xl"
            src={hotel.hotel_img}
            alt="product image"
          />
          <div className="absolute right-1 top-[6px] bg-white px-2" style={{ borderRadius: "0 0 0 70px" }}>
            <Rating sx={{fontSize: '14px'}} name="read-only" value={5} readOnly />
          </div>
          <div className="absolute right-32 bottom-[6px] bg-white px-2 rounded-t-2xl">
          <span className="text-xs font-bold"><small>From</small>  ${fromRate}</span>
          </div>
        </div>
        <div className="px-2 pb-2 sp text-center">
          <h5 className="text-lg font-semibold">{hotel.hotel_name}</h5>
          <p className="text-sm">{hotel.hotel_location}</p>
         
        </div>
      </div>
    </Link>
   </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.object,
};

export default HotelCard;




