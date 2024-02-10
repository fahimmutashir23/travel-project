import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome";

const PopularDestination = () => {
  return (
    <div>
      <p className="text-center text-lg -mb-5 mt-10 font-bold">Discover</p>
      <PageTitleForHome title='Popular Destination' />
       {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
      </div>  */}

<div className="container mx-auto">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
   <div className="w-[55%]">
   <div className="w-full">
   <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
  <div className="grid gap-4">
    <div>
      {/* <img
        className="h-44 w-96 rounded-lg object-cover object-center"
        src="https://i.postimg.cc/wx2RDsjw/pexels-ahmet-polat-9289144.jpg"
        alt="gallery-photo"
      /> */}
    </div>
    <div>
      {/* <img
        className=" max-w-full rounded-lg object-cover object-center h-[480px]"
        src="https://i.postimg.cc/BZpFMGZV/pexels-confinedriley-11595339.jpg"
        alt="gallery-photo"
      /> */}
        <a href="#" className="group relative block bg-black max-w-full h-[480px] rounded-xl">
  <img
    alt=""
    src="https://i.postimg.cc/BZpFMGZV/pexels-confinedriley-11595339.jpg"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">new zealand</p>

    <p className="text-xl font-bold text-white sm:text-2xl">new zealand</p>

    <div className="mt-32 sm:mt-48 lg:mt-72">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        A group of passionate adventurers dedicated to creating the best journey for every traveler
        </p>
      </div>
    </div>
  </div>
</a>
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
        alt="gallery-photo"
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center "
        src="https://docs.material-tailwind.com/img/team-3.jpg"
        alt="gallery-photo"
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center "
        src="https://docs.material-tailwind.com/img/team-3.jpg"
        alt="gallery-photo"
      />
    </div>
    <div>
      {/* <img
        className="h-auto max-w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
        alt="gallery-photo"
      /> */}
      <a href="#" className="group relative block bg-black max-w-full h-[400px] rounded-xl">
  <img
    alt=""
    src="https://i.postimg.cc/5N9BV2kJ/pexels-yusuke-furuya-9477630.jpg"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">new zealand</p>

    <p className="text-xl font-bold text-white sm:text-2xl">new zealand</p>

    <div className="mt-32 sm:mt-48 lg:mt-44">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        A group of passionate adventurers dedicated to creating the best journey for every traveler
        </p>
      </div>
    </div>
  </div>
</a>
    </div>
  </div>
</div>
</div>
   </div>
			<div className="flex flex-col justify-center flex-1 -mt-[280px] p-6 dark:bg-gray-900">
      <h3 className="text-3xl font-bold">KNOW ABOUT US</h3>
				<p className="my-6 dark:text-gray-400">Welcome to our world of wanderlust! Embark on unforgettable
                journeys, discover hidden gems, and create timeless memories
                with our curated selection of travel experiences. From
                breathtaking landscapes to cultural escapades, our tours cater
                to every adventurers dream. Explore iconic landmarks, savor
                authentic cuisines, and immerse yourself in the beauty of
                diverse destinations worldwide. Whether you seek thrilling
                adventures or tranquil getaways, our expertly crafted
                itineraries ensure an enchanting travel experience every step of
                the way. Start planning your next adventure today and let us
                guide you to the extraordinary..</p>

                <p className="mt-10">Wonderful trip to the Sundarbans with the professionals at Taabu Tours. Organization was like a clockwork, can absolutely recommend these guys. Jafar, the CEO of Taabu Tours is a really nice person who is so knowledgeable, and willing to share vast source of information. On my next trip to Bangladesh..</p>
                <p className="mt-10">Wonderful trip to the Sundarbans with the professionals at Taabu Tours. Organization was like a clockwork, can absolutely recommend these guys. Jafar, the CEO of Taabu Tours is a really nice person who is so knowledgeable, and willing to share vast source of information. On my next trip to Bangladesh..</p>
			</div>
		</div>
    </div>
    </div>
  );
};

export default PopularDestination;
