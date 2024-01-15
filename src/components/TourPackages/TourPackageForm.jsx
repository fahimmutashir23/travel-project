/* eslint-disable react/prop-types */
import { RiHeadphoneFill } from "react-icons/ri";

const TourPackageForm = ({details}) => {
  const {
    name,
    price,
    discount
  } = details;

  return (
    <div className="flex justify-end">
      <div className="">
        <div className="text-neutral-content">
          <div className="w-full max-w-sm bg-transparent border border-gray-200 rounded-lg shadow p-6">
            <form className="space-y-6 text-black">
              <div className="flex font-bold items-center justify-center text-xs gap-2 rounded-lg text-black">
                <RiHeadphoneFill /> Call Center: +84 012 345 888
              </div>
              <div className="font-semibold text-black text-center text-lg">
                Total : {price}$
                <br />
                <small className="text-xs">From ${price}/Person</small>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Last Name"
                  className="bg-gray-50 border input border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
                >
                  Departure Date
                </label>
                <input
                  type="date"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
                >
                  Departure Time
                </label>
                <input
                  type="date"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  placeholder="Email"
                  required
                />
                <p className="text-xs mt-2 text-center">
                  ( Please select date and time <br />
                  before select people )
                </p>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
                >
                  Adults
                </label>
                <input
                  type="number"
                  name="number"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
                >
                  Children
                </label>
                <input
                  type="number"
                  name="number"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  placeholder="Email"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-pink-700 hover:bg-pink-900 focus:ring-4 focus:outline-none rounded-lg py-2"
              >
                Booking Now
              </button>
              <div className="divider">OR</div>
              <p className="text-xs text-center">
                Fill up the form below to tell us
                <br /> what you&apos;re looking for
              </p>
              <div>
                <label className="text-sm">Full name</label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full bg-slate-100 border p-3 rounded "
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border bg-slate-100 rounded "
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
        </div>
      </div>
    </div>
  );
};

export default TourPackageForm;
