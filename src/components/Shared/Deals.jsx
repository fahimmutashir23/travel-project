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
				<p className=" text-white">Make sure to check out these special promotions</p>
				<button className="text-white mt-14 bg-blue-500 px-4 py-2 rounded-lg font-semibold ">SEE TOUR </button>
			</div>
			
			
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p>Leroy Jenkins</p>
		</div>
	</div>
</section>

    </div>
  )
}
