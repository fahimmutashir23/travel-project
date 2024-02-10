import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome"


export const Deals = () => {
	return (
		<div className="mt-10">
			<div>
				<PageTitleForHome title='Special Deals!' />
			</div>

			<section className="my-8">
				<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
					<div className="flex flex-col items-center mx-12 lg:mx-0 h-96 bg-cover rounded-lg" style={{ backgroundImage: 'url(https://i.postimg.cc/VsCDWfSB/pexels-serge-degtyarev-6687998.jpg)' }}>
						<div className="relative text-start px-6">

							<p className=" py-7 font-bold text-5xl mt-12 text-white">Discover Special Deals!</p>
							<p className=" text-white leading-[150%] font-semibold">Make sure to check out these special <br /> promotions</p>
							<button className="text-white mt-14 bg-blue-500 px-4 py-2 rounded-lg font-semibold ">SEE TOUR </button>
						</div>


					</div>
					<div className="flex flex-col px-16 bg-slate-100 rounded-xl">
						<div className="relative text-start">

							<p className="py-7 font-bold text-4xl mt-12 text-black">Don’t miss a thing</p>
							<p className=" text-gray-600 text-xl font-semibold">Get update to special deals and exclusive offers.</p>
							<form className="mt-6">
								<p className="mb-1"> Sign up to our newsletter!</p>
								<div className="relative max-w-lg">

									<label className="sr-only" htmlFor="email"> Email </label>

									<input
										className="w-full rounded-full border-gray-200 bg-white p-4 pe-32 text-sm font-medium"
										id="email"
										type="email"
										placeholder="Your Email Address...."
									/>

									<button
										className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
									>
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}
