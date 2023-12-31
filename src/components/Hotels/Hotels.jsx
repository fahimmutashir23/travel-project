/* eslint-disable react/prop-types */
import HotelCard from "../../Utils/Card/HotelCard";

const Hotels = ({hotels}) => {

  return (
    <div>
      <div>
        <p className="text-center text-lg mb-2 mt-10 font-bold">Discover</p>
        <h1 className="text-center text-4xl mb-5 font-bold">Discover Hotels</h1>
      </div>
      <div>
        <div className="flex flex-wrap gap-4">
          {hotels?.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel}></HotelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
