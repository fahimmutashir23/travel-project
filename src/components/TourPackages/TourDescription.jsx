/* eslint-disable react/prop-types */
import { IoMdArrowDropright } from "react-icons/io";


const TourDescription = ({ details }) => {

  const {
    name,
    description,
    destination,
    image,
    duration,
    activities,
    accommodation,
    included,
    departureDate,
    total_sale,
    ratings,
    reviews,
  } = details;

  return (
    <div>
     <div className="flex flex-row gap-5 mt-16 mb-4">
     <h1 className="text-2xl font-semibold bg-red-50 px-4 rounded-lg py-2">Name: {name}</h1>
      <h1 className="text-2xl font-semibold bg-red-50 px-4 rounded-lg py-2">Type: {accommodation.type}</h1>
      <h1 className="text-2xl font-semibold bg-red-50 px-4 rounded-lg py-2">NIghts: {accommodation.nights}</h1>
     </div>
      <p>
        {description}
      </p>
      <p className="mt-5">
        {description}
      </p>
      <p className="mt-5">
      {description}
      </p>
      <div className="divider"></div>
      <div className="flex gap-14">
        <div>DEPARTURE/RETURN LOCATION</div>
        <div> {destination} (Google Map)</div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-40">
        <div>DEPARTURE TIME</div>
        <div>{departureDate}</div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-52">
        <div>INCLUDED</div>
        <div className="grid grid-cols-2 gap-x-24">
            {
                included.map((include, idx) => (
                    <h1 key={idx}>{include}</h1>
                ))
            }
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-44">
        <div>NOT INCLUDED</div>
        <div className="">
          <div>Airfare</div>
          <div>5 days cruise</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-44">
        <div>ACTIVITIES</div>
        <div className="">
          <div>{activities[0]}</div>
          <div>{activities[1]}</div>
          <div>{activities[2]}</div>
          
        </div>
      </div>
      <div className="divider"></div>
      <div>

        <p className="mt-5">
          On your maiden visit to the Big Apple, be sure to allow a minimum of
          three days so you can take a breath and enjoy all the city has to
          offer without being in transit every moment of your trip. The
          following will only scratch the surface of what to expect but will arm
          you with information to feel confident during your time in New York
          City.
        </p>

        <div className="mt-5 flex items-center">
          <IoMdArrowDropright className="text-blue-700" />2 Nights at a 4* star
          hotel in Cairo.
        </div>
        <div className="mt-5 flex items-center ">
          <IoMdArrowDropright className="text-blue-700" />1 Night on a
          traditional felucca sailing boat.
        </div>
        <div className="mt-5 flex items-center">
          <IoMdArrowDropright className="text-blue-700" />
          Experience the crazy Robot Restaurant show.
        </div>
        <div className="mt-5 flex items-center">
          <IoMdArrowDropright className="text-blue-700" />
          Take a sushi making masterclass.
        </div>
        <div className="mt-5 flex items-center">
          <IoMdArrowDropright className="text-blue-700" />
          Morning market tour.
        </div>
      </div>
     <div className="flex gap-10 mt-4 "> <img src={image} alt="" className="h-64 rounded-lg w-80" />
     <img src={image} alt="" className="h-64 rounded-lg w-80" />
     <img src={image} alt="" className="h-64 rounded-lg w-80" />
     </div>
  
    </div>
  );
};

export default TourDescription;
