import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome";
import videoBG from "../../assets/videobg/videoBG.mp4";
import CountUp from "react-countup";
const WhyChoose = () => {
  return (
    <div className="mt-[60px]">
      <PageTitleForHome title="Why Choose us" />

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
      <div className="w-full h-80 mt-5 overflow-hidden rounded-lg relative">
        <video
          src={videoBG}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        ></video>
        <div className="text-white absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]  w-full font-bold text-4xl">
          <div className="flex justify-evenly">
            <div className="items-center text-center bg-black p-4 bg-opacity-40 rounded-md w-44">
              <CountUp start={0} end={3000} delay={10} />
              <h1 className="italic">Package</h1>
            </div>
            <div className="items-center text-center bg-black p-4 bg-opacity-40 rounded-md w-44">
              <CountUp start={0} end={13} delay={10} />
              <h1 className="italic">Award</h1>{" "}
            </div>
            <div className="items-center text-center bg-black p-4 bg-opacity-40 rounded-md w-44">
              <CountUp start={0} end={12} delay={10} />{" "}
              <h1 className="italic">Hotel</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
