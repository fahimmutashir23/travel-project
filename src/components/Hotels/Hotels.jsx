/* eslint-disable react/prop-types */
import HotelCard from "../../Utils/Card/HotelCard";
import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome";

const Hotels = ({hotels}) => {

  return (
    <div>
      <div>
        <p className="text-center text-lg -mb-5 mt-10 font-bold">Discover</p>
        <PageTitleForHome title='Featured Hotels' />
      </div>
      <div>
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hotels.slice(0, 8)?.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel}></HotelCard>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
>>>>>>> 530a273da61911b375783e48e7333fca5f3e10f5
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
