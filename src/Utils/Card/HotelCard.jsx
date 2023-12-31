import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const fromRoomRate = hotel.hotel_room.map((room) => room.room_price);
  const fromRate = fromRoomRate.reduce((acc, slip) => Math.min(acc, slip));

  return (
    <Link to={`/hotel/${hotel._id}`}>
      <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full h-52 rounded-t-lg relative">
          <img
            className="p-2 w-full h-full object-cover rounded-t-xl"
            src={hotel.hotel_img}
            alt="product image"
          />
          <div className="absolute -bottom-[7px] right-2 bg-gray-800 px-2 py-1 rounded-2xl">
            <Rating sx={{fontSize: '20px'}} name="read-only" value={5} readOnly />
          </div>
        </div>
        <div className="px-2 pb-2">
          <h5 className="text-xl font-semibold">{hotel.hotel_name}</h5>
          <p>{hotel.hotel_location}</p>
          <div className="flex justify-end">
            <h4 className="text-xl font-bold  dark:text-gray-300">
              <span className="text-base font-normal">From</span> ${fromRate}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.object,
};

export default HotelCard;
