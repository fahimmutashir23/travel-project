import videoBG from "../../assets/videobg/videoBG.mp4";

const WhyChoose = () => {
  return (
    <div>
      <p className="text-center text-3xl mb-2 mt-10 font-bold">Why Choose Us</p>
      <h1 className="text-center text-lg mb-5 font-bold">
        Here are reasons you should plan trip with us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <div className="flex-1 justify-center items-center">
          <div className="flex justify-center">
            <img
              src="https://max-themes.net/demos/grandtour/upload/Map-Marker-300x300.png"
              alt=""
              className="w-36 text-center justify-center"
            />
          </div>
          <h1 className="text-center">Handpicked Hotels</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              src="https://max-themes.net/demos/grandtour/upload/Worldwide-Location-300x300.png"
              alt=""
              className="w-36 text-center  justify-center"
            />
          </div>
          <h1 className="text-center">World Class Service</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              src="https://max-themes.net/demos/grandtour/upload/Hot-Air-Balloon-300x300.png"
              alt=""
              className="w-36 text-center  justify-center"
            />
          </div>
          <h1 className="text-center">Best Price Guarantee</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa
          </p>
        </div>
      </div>
      <div className="w-full h-80 mt-5 overflow-hidden rounded-lg">
        <video src={videoBG} autoPlay loop muted className="h-full w-full object-cover"></video>
      </div>
    </div>
  );
};

export default WhyChoose;
