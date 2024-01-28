/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiHeadphoneFill } from "react-icons/ri";
import PackagePayment from "../../pages/TourPackagesPage/packagesPayment";

const TourPackageForm = ({ details }) => {
  const [bookingsInfo, setBookingsInfo] = useState({});
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [open, setOpen] = useState(false);

  const {_id, name, price, discount } = details;
  const discountRate = (price * discount || 0 ) / 100;


  const handleSubmit = (e) => {
    e.preventDefault();
    const userFirstName = firstName;
    const userLastName = lastName
    const userName = userFirstName + " " + userLastName
    const userEmail = email
    const dDate = date
    const adultPerson = adult;
    const childrenPerson = children;
    const bookingsInfo = {id: _id, packageName: name, userName, userEmail, date: dDate, adultPerson, childrenPerson, price, discountRate}
    setBookingsInfo(bookingsInfo)
    setOpen(true)
  };

  return (
        <div>
          <div className="w-full max-w-sm bg-transparent border border-gray-200 rounded-lg shadow p-6">
            <div className="space-y-6 text-black">
              <div className="flex font-bold items-center justify-center text-xs gap-2 rounded-lg text-black">
                <RiHeadphoneFill /> Call Center: +84 012 345 888
              </div>
              <div className="font-semibold text-black text-center text-lg">
                Package Price : {price}$ <br />
                <span className="text-base">Discount : {discountRate}$</span>
                <br />
                <small className="text-xs">From ${price}/Person</small>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={(e)=> setFirstName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white-900">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e)=> setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white-900">
                  Departure Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={(e)=> setDate(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <p className="text-xs mt-2 text-center">
                  ( Please select date and time <br />
                  before select people )
                </p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-center text-sm -mb-2">Adult</p>
                  <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
                    <button
                      onClick={() => setAdult(adult + 1)}
                      className="text-2xl border-r-[2px] pr-4"
                    >
                      +
                    </button>
                    <span className="text-lg">{adult}</span>
                    <button
                      onClick={() => setAdult(adult - 1)}
                      className={`text-2xl border-l-[2px] pl-4 ${
                        adult <= 0 && "btn-disabled"
                      }`}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-center text-sm -mb-2">Children</p>
                  <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
                    <button
                      onClick={() => setChildren(children + 1)}
                      className="text-2xl border-r-[2px] pr-4"
                    >
                      +
                    </button>
                    <span className="text-lg">{children}</span>
                    <button
                      onClick={() => setChildren(children - 1)}
                      className={`text-2xl border-l-[2px] pl-4 ${
                        children <= 0 && "btn-disabled"
                      }`}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <button
              onClick={handleSubmit}
                className="btn w-full text-white bg-pink-700 hover:bg-pink-900 focus:ring-4 focus:outline-none rounded-lg py-2"
              >
                Booking Now
              </button>
            </div>
            
              <div className="divider">OR</div>

            <p className="text-xs text-center text-black">
              Fill up the form below to tell us
              <br /> what you&apos;re looking for
            </p>
            <form className="text-black">
              <div>
                <label className="text-sm">Full name</label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full bg-slate-100 border p-1 rounded "
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-1 border bg-slate-100 rounded "
                />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full border p-3 bg-slate-100 rounded "
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-pink-400 hover:bg-pink-900 focus:ring-4 focus:outline-none rounded-lg py-2"
              >
                Send Enquiry
              </button>
            </form>
          </div>
          <PackagePayment open={open} setOpen={setOpen} bookingsInfo={bookingsInfo} />
        </div>
  );
};

export default TourPackageForm;
