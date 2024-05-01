import { Link } from "react-router-dom";
import Logo from "../../../Utils/Logo/Logo";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import moment from "moment/moment";
import moon from "../../../assets/Pattern/Sprinkle.svg"


const Footer = () => {
  const year = moment().format('YYYY');
  return (
    <div
    style={{backgroundImage: `url(${moon})`}}
    className="mt-16 bg-[#231F20] ml-16 text-white">
      <div className="flex flex-col justify-between py-10 px-5 mx-auto lg:flex-row lg:space-y-0">
        <div className="lg:w-2/5 text-white">
          <Link to="/">
            <Logo width="28" />
          </Link>
          <p className="max-w-sm mt-2">
          Welcome to Our Travels, your gateway to unforgettable adventures and immersive travel experiences. Explore with us and let your journey begin!
          </p>
          <div className="space-y-1 mt-2">
            <div className="uppercase dark:text-gray-50 text-black font-semibold text-lg">Follow Us</div>
            <div className="flex space-x-3 items-center">
            <FaSquareFacebook className="text-3xl text-green-200" />
            <FaLinkedin className="text-3xl text-green-200" />
            <FaSquareInstagram  className="text-3xl text-green-200"/>
            <FaYoutube className="text-4xl text-green-200" />
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 flex justify-between">
        <div className="space-y-3">
            <h3 className="font-semibold text-2xl text-green-200">Company</h3>
            <ul className="space-y-2 text-base-300 text-lg">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link>Career</Link>
              </li>
              <li>
                <Link>Travel Guides</Link>
              </li>
              <li>
                <Link>Traveler Review</Link>
              </li>
              <li>
                <Link>Contact Now</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-2xl text-green-200">Service</h3>
            <ul className="space-y-2 text-base-300 text-lg">
              <li>
                <Link to="/">Destinations</Link>
              </li>
              <li>
                <Link>Tour Booking</Link>
              </li>
              <li>
                <Link>Hotel Booking</Link>
              </li>
              <li>
                <Link>Travel Packages</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-semibold text-2xl text-green-200 mb-2">Speak Our Expert at:</h1>
            <div className="flex items-center gap-2 bg-green-600 px-3 py-2 rounded-md">
            <TfiHeadphoneAlt className="text-green-200 text-2xl" />
            <a  href="https://wa.me/01759530743" rel='noreferrer' target="_blank" className="text-lg text-base-300">01581868984</a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 bg-green-600 opacity-90 text-lg text-center">
        © {year} Our Travels. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
