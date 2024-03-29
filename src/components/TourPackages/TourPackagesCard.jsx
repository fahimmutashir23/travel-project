import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TourPackagesCard = ({ tourPackage }) => {
  const {
    name,
    destination,
    image,
    price,
    departureDate,
    ratings,
    duration,
    discount,
    _id,
  } = tourPackage;

  return (
    <div>
      <div className="flex max-w-5xl bg-base-200 border-dotted border-slate-800 mb-5 rounded-xl group hover:-skew-x-6 transition-all duration-300 overflow-hidden">
        <div className="relative">
          <img className="overflow-hidden w-80 h-64 rounded-xl group-hover:scale-105 transition-all duration-300" src={image} />

          {discount && (
            <span
              className="absolute top-3 rounded-r-md text-white text-lg px-5  bg-yellow-600"
              style={{ borderRadius: "0 100px 0 100px" }}
            >
              {discount}% OFF
            </span>
          )}
        </div>
        <div className="flex justify-between flex-1 mb-2 p-4">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{name}</h1>
              <p className="text-sm">{duration} days</p>
            </div>
            <div className="flex gap-10">
              <p className="text-xs uppercase flex flex-col">
                <span className="font-semibold text-sm mb-1">date</span>
                {departureDate}
              </p>
              <p className="text-xs uppercase flex flex-col">
                <span className="font-semibold text-sm mb-1">departure</span>
                {destination}
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn bg-[#BBCD77] text-white rounded-none h-9 text-base py-1 min-h-fit hover:bg-green-700">
                Show Reviews
              </button>
              <Link to={`/packagesDetails/${_id}`}>
                <button className="btn bg-[#DC8051] text-white rounded-none h-9 text-base py-1 min-h-fit hover:bg-red-700">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <Rating
                sx={{ fontSize: "22px" }}
                name="read-only"
                value={ratings}
                readOnly
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800 text-end">
                {price}$
              </h1>
            </div>
            <div className="flex justify-end">
              <button className="btn bg-[#E36252] text-white rounded-none h-9 text-base py-1 min-h-fit hover:bg-red-500">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TourPackagesCard.propTypes = {
  tourPackage: PropTypes.object,
};

export default TourPackagesCard;
