import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome";

const PopularDestination = () => {
  return (
    <div>
      <p className="text-center text-lg -mb-5 mt-10 font-bold">Discover</p>
      <PageTitleForHome title='Popular Destination' />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="space-y-2">
          <a href="#" className="group relative block overflow-hidden">
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span className="sr-only">Wishlist</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-red-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <img
              src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-4.jpg"
              alt="Image Description"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-md"
            />
          </a>
          <img
            className="w-full h-[500px] object-cover rounded-md"
            src="http://themecrazy.net/html/manali/img/destination/1.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-[400px] object-cover rounded-md"
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-[400px] object-cover rounded-md"
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6-600x540.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-[600px] object-cover rounded-md"
            src="http://themecrazy.net/html/manali/img/gallery/6.jpg"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover rounded-md"
            src="https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/instagram/insta-6.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-[600px] object-cover rounded-md"
            src="http://themecrazy.net/html/manali/img/tour/1.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover rounded-md"
            src="https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/instagram/insta-14-thumb.jpg"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-[600px] object-cover rounded-md"
            src="http://themecrazy.net/html/manali/img/gallery/3.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-[600px] object-cover rounded-md"
            src="http://themecrazy.net/html/manali/img/destination/6.jpg"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
