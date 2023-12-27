/* eslint-disable react/prop-types */

import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const Banner = ({ bannerImg }) => {
  const [values, setValues] = useState([new DateObject(), new DateObject()]);
  

  return (
    <div className="" data-aos="zoom-in">
      <div
        className="rounded-xl hero  h-[300px] text-white"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="flex justify-center items-center"
        >
          <div className="text-center z-10">
            <DatePicker
            style={{
              backgroundColor: "#A076F9",
              color: 'white',
              height: "24px",
              borderRadius: "8px",
              border: 'none',
              fontSize: "16px",
              padding: "16px 20px"
            }}
            value={values} onChange={setValues} range />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
