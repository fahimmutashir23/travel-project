import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="col-span-4 md:col-span-2 px-3 mt-5">
      <div>
        <div>
          <h3 className="text-2xl font-bold pb-3">Latest Blogs</h3>
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="">
                <div>
                  <img
                    className="w-full object-cover object-center h-24"
                    src="https://aventura.templaza.net/wp-content/uploads/2017/06/shifaaz-shamoon-465339-unsplash-600x400.jpg"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-dark dark:text-white"></h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Published on{" "}
                </p>
                <Link className="text-primary hover:underline block">
                  Read more
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden my-2">
              <div className="">
                <div>
                  <img
                    className="w-full object-cover object-center h-24"
                    src="https://aventura.templaza.net/wp-content/uploads/2017/06/shifaaz-shamoon-465339-unsplash-600x400.jpg"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-2"></h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Published on{" "}
                </p>
                <Link className="text-primary hover:underline block">
                  Read more
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden my-5">
              <div className="">
                <div>
                  <img
                    className="w-full object-cover object-center h-24"
                    src="https://aventura.templaza.net/wp-content/uploads/2017/06/shifaaz-shamoon-465339-unsplash-600x400.jpg"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-dark dark:text-white"></h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Published on{" "}
                </p>
                <Link className="text-primary hover:underline block">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap py-3 gap-2">
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <h3 className="text-2xl font-bold pb-3">Categories</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden my-5">
          <ul className="px-5 py-3.5">Travel</ul>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold pb-3">Stay Connected</h3>
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-5 my-5">
          <div className="grid grid-cols-2 gap-5">
            <Link className="flex items-center bg-blue-600 px-3 py-2 rounded gap-2">
              <FiFacebook
                className="text-white"
                size={25}
                fill="#0866FF"
              ></FiFacebook>
              <h3 className="text-md text-white font-semibold">Facebook</h3>
            </Link>
            <Link className="flex items-center bg-pink-600 px-3 py-2 rounded gap-2">
              <FiInstagram
                className="text-white"
                size={25}
                fill="#EB4A50"
              ></FiInstagram>
              <h3 className="text-md text-white font-semibold">Instagram</h3>
            </Link>
            <Link className="flex items-center bg-blue-700 px-3 py-2 rounded gap-2">
              <FiLinkedin
                className="text-white"
                size={25}
                fill="#0077B5"
              ></FiLinkedin>
              <h3 className="text-md text-white font-semibold">Linkedin</h3>
            </Link>
            <Link className="flex items-center bg-blue-500 px-3 py-2 rounded gap-2">
              <FiTwitter
                className="text-white"
                size={25}
                fill="#1DA1F2"
              ></FiTwitter>
              <h3 className="text-md text-white font-semibold">Twitter</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
