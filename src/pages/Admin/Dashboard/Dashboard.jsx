import { FaUsers } from "react-icons/fa6";

import { FaHandHoldingUsd } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Dashboard = () => {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border flex justify-between items-center w-60 h-20 rounded-lg">
          <div className="h-full text-center bg-violet-700 p-6"><FaUsers className="text-white text-center w-16 h-9" /></div>
          <div className="p-5"><small>Total users</small><br />Total users</div>
        </div>
        <div className="border flex justify-between items-center w-60 h-20 rounded-lg">
          <div className="h-full text-center bg-green-500 p-6"><FaHandHoldingUsd className="text-white text-center w-16 h-9" /></div>
          <div className="p-5"><small>Revenue</small><br />Revenue

          </div>
        </div>
        <div className="border flex justify-between items-center w-60 h-20 rounded-lg">
          <div className="h-full text-center bg-blue-700 p-6"><FaCartPlus className="text-white text-center w-16 h-9" /></div>
          <div className="p-4"><small>Total Bookings</small><br />Bookings</div>
        </div>

        <div className="border flex justify-between items-center w-60 h-20 rounded-lg">
          <div className="h-full text-center bg-pink-700 p-6"><MdMarkEmailUnread className="text-white text-center w-16 h-9" /></div>
          <div className="p-5"><small>Email</small><br />Email</div>
        </div>
      </div>

      <div className="mt-24">
       <iframe
      
        className=""
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7114350606766!2d90.41214257543398!3d23.793287978641107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a72f17bb83%3A0x57188ff62fd95026!2sThe%20Westin%20Dhaka!5e0!3m2!1sen!2sus!4v1705070715390!5m2!1sen!2sus" 
        width="1000"
         height="400"
          allowfullscreen="" 
          loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Dashboard;