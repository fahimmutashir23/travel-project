import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome";

const About = () => {
  return (
    <div>
      <div>
        <PageTitleForHome title='About' />
      </div>
      <section className=" dark:bg-gray-100 ">
	<div className="mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/03/img-74-3.jpg" alt="" className="h-80 bg-gray-100 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-200">
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
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/03/img-79.jpg" alt="" className="h-80 bg-gray-100 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-200">
				<h3 className="text-3xl font-bold">KNOW ABOUT US</h3>
				<p className="my-6">Welcome to our world of wanderlust! Embark on unforgettable
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
				<button type="button" className="self-start bg-sky-500 px-6 py-2 text-white font-bold rounded-md">SEE MORE</button>
			</div>
		</div>

	</div>
</section>
    </div>
  );
};

export default About;
