import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome"


export const Deals = () => {
  return (
    <div className="mt-10">
         <div>
        <PageTitleForHome title='Discover Special Deals!' />
      </div>
      
<section className="my-8">
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0 h-96 bg-cover rounded-lg" style={{backgroundImage: 'url(https://i.postimg.cc/VsCDWfSB/pexels-serge-degtyarev-6687998.jpg)'}}>
			<div className="relative text-start px-6">
				
				<p className=" py-7 font-bold text-5xl mt-12 text-white">Discover Special Deals!</p>
				<p className=" text-white leading-[150%] font-semibold">Make sure to check out these special <br/> promotions</p>
				<button className="text-white mt-14 bg-blue-500 px-4 py-2 rounded-lg font-semibold ">SEE TOUR </button>
			</div>
			
			
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0 bg-slate-200 rounded-xl">
			<div className="relative text-center">
				
				<p className="py-7 font-bold text-5xl mt-12 text-black">Don’t miss a thing</p>
				
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p>Leroy Jenkins</p>
		</div>
	</div>
</section>

    </div>
  )
}
