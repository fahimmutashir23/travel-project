
const About = () => {
    return (
        <div>
			<div>
        <p className="text-center text-lg mb-2 mt-14 font-bold">Discover</p>
        <h1 className="text-center text-4xl mb-5 font-bold">About us</h1>
      </div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
			<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
				<h2 className="text-4xl font-bold">Welcome to .......</h2>
				<p className="dark:text-gray-400">Welcome to our world of wanderlust! Embark on unforgettable journeys, discover hidden gems, and create timeless memories with our curated selection of travel experiences. From breathtaking landscapes to cultural escapades, our tours cater to every adventurers dream. Explore iconic landmarks, savor authentic cuisines, and immerse yourself in the beauty of diverse destinations worldwide. Whether you seek thrilling adventures or tranquil getaways, our expertly crafted itineraries ensure an enchanting travel experience every step of the way. Start planning your next adventure today and let us guide you to the extraordinary.</p>
			</div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900">
							<img src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/single-gallery-5-image-2.jpg" alt=""  className="rounded-md"/>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900">
							<img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-115070.jpeg" alt="" className="rounded-md h-[300px]"  />
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900">
							
                            <img src="http://themes.themegoods.com/grandtour/demo2/wp-content/uploads/2016/12/pexels-photo-210243.jpeg" alt="" className="rounded-md h-[500px]" />
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900">
							<img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg" alt=""  className="rounded-md h-[500px]"/>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default About;