
import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome";
import videoBG from "../../assets/videobg/videoBG.mp4";
import CountUp from 'react-countup';
const WhyChoose = () => {
  return (
    <div className="mt-[60px]">
      <PageTitleForHome title='Why Choose us' />

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
        <video src={videoBG} autoPlay loop muted className="h-full w-full object-cover"></video>
        
      </div>
      <div className="text-white flex absolute -mt-56 font-bold gap-80 px-36 text-3xl leading-10">
          <div className="items-center text-center">
          <CountUp start={0} end={3000} delay={6}/>
          <h1 className="te">Total Package</h1>
          </div>
          <div className="items-center text-center">
          <CountUp start={0} end={2200} delay={6}/><h1>Total Booking</h1> </div>
          <div className="items-center text-center"><CountUp start={0} end={12} delay={6}/> <h1>Total Hotel</h1></div>
        </div>
    </div>
  );
};

export default WhyChoose;
