import PageTitleForHome from "../../Utils/PageTitleForHome/PageTitleForHome";

const Weekly = () => {
    return (
        <div className="mt-[60px]">
            <PageTitleForHome title='Discover weekly' />
            <h1 className="text-center text-lg mb-5 font-bold">
                It is a long established fact that a reader will be distracted...
            </h1>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <a href="#" className="group relative block overflow-hidden rounded-t-md">
                        <button
                            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        >
                            <span className="sr-only">Wishlist</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                            <img src="" alt="" />
                        </button>

                        <img
                            src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-gallery-32.jpg"
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-gray-100 bg-white p-6">
                            <div className="flex justify-between">
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> Moraine </div>
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> $ 820 </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> Canada</div>
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> 2 Adults </div>
                            </div>

                            <form className="mt-4">
                                <button
                                    className="block w-full rounded bg-blue-400 text-white p-3 text-lg font-semibold transition hover:scale-105"
                                >
                                    View Details
                                </button>
                            </form>
                        </div>
                    </a>
                    <a href="#" className="group relative block overflow-hidden rounded-t-md">
                        <button
                            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        >
                            <span className="sr-only">Wishlist</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </button>

                        <img
                            src="https://demoapus1.com/tourio/wp-content/uploads/2023/08/blog7.jpg"
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-gray-100 bg-white p-6">
                            <div className="flex justify-between">
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> Moraine </div>
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> $ 820 </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> Canada</div>
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> 2 Adults </div>
                            </div>

                            <form className="mt-4">
                                <button
                                    className="block w-full rounded bg-blue-400 text-white p-3 text-lg font-semibold transition hover:scale-105"
                                >
                                    View Details
                                </button>
                            </form>
                        </div>
                    </a>
                    <a href="#" className="group relative block overflow-hidden rounded-t-md">
                        <button
                            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        >
                            <span className="sr-only">Wishlist</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </button>
                        {/* https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-title-3-1024x272.jpg  */}
                        <img
                            src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-1.jpg"
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-gray-100 bg-white p-6">
                            <div className="flex justify-between">
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> Moraine </div>
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> $ 820 </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> Canada</div>
                                <div className="whitespace-nowrap  px-3 py-1.5 text-xs font-medium"> 2 Adults </div>
                            </div>

                            <form className="mt-4">
                                <button
                                    className="block w-full rounded bg-blue-400 text-white p-3 text-lg font-semibold transition hover:scale-105"
                                >
                                    View Details
                                </button>
                            </form>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Weekly;