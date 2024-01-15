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
      <p>
        Budapest is one of the most beautiful cities in Europe to be enjoyed on
        Hungary tours. It comprises of two distinct parts, Buda which is hilly
        and is located on the west bank of the Danube and Pest which is flat and
        is located on the right bank. The city has 5 UNESCO world heritage
        protected sites. It has two large islands in the middle of the river
        which are both very central. One is Margarita Island which is popular
        with the locals with its parks, leisure centres and swimming pools.
      </p>
      <p className="mt-5">
        It is a city of culture with more than 200 museums, 40 theatres, 7
        concert halls and an opera house. It is also known for its “coffee
        culture” due to its many cafes and is also well known for its many
        excellent spas first introduced by the Romans who discovered the
        underground thermal springs.
      </p>
      <p className="mt-5">
        The principal tourist attractions on Hungary tours are many. Buda Castle
        was originally built in 1265. The Hungarian Parliament Building is a
        Gothic landmark. The Museum of Fine Arts has more than 100,000 exhibits.
        St. Stephen’s Cathedral is a tall and imposing building and St. Mathias
        Church is over 700 years old. There are some magnificent and beautiful
        wide boulevards and squares. Andrassy Avenue is an elegant tree-lined
        avenue which has been awarded UNESCO World Heritage status. It is 2.5
        kms/1.5 miles long. Another is Vaci Street with its many shops,
        restaurants and cafes. Other prominent landmarks are Heroes Square, the
        attractive Hungarian State Opera House, the largest baroque castle in
        the world, Godollo Castle, Fisherman’s Bastion situated on Castle Hill
        with its many stairs and walkways and where one has amazing panoramic
        views of the city and the Chain Bridge which spans the Danube and was
        considered an architectural wonder when it was built in 1849.
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
      <div>
        <h1>What to Expect</h1>
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
    </div>
  );
};

export default TourDescription;
