
import PageTitleForHome from '../../Utils/PageTitleForHome/PageTitleForHome'

export const Blog = () => {
    return (
        <div className='mt-[60px]'>
            <PageTitleForHome title='Our Blogs' />
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className=" p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src="https://i.postimg.cc/QMtCnQtT/pexels-josh-hild-2662183.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-xl font-semibold sm:text-3xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                            <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                            <p className='text-[#6A6A6A]'>Bali Indonesia is travel heaven for luxury seekers and budget backpackers alike. There's something for everyone here.

                                Adventure lovers in Bali will have easy access to waterfalls, jungles, cliffs, volcanoes, and more.

                                If any of that sounds nice, then you will fall in love with Bali and its people. Read through this complete Bali travel guide for more info on what to expect!.</p>
                            <p className='mt-20 text-[#6A6A6A]'>
                                Bali is a small island located in the country of Indonesia (in Southeast Asia). Indonesia is made up of more than 17,000 islands, and it's surrounded by Malaysia, the Philippines, Papua New Guinea, and Australia.</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-56 dark:bg-gray-500" src="https://theworldtravelguy.com/wp-content/uploads/2021/02/DSCF0068-3_450sb.jpg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">Banggai Islands Travel Indonesia</h3>
                                <span className="text-xs dark:text-gray-400">January 21, 2021</span>
                                <p className='text-[#6A6A6A]'>The Banggai area in Sulawesi is one of Indonesia’s most underrated places to travel, with an amazing blue lake called Paisupok and other good things to see …</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-56 dark:bg-gray-500" src="https://i.postimg.cc/CMJtwbL1/pexels-elie-nammour-13313660.jpg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">Colonia Del Sacramento Uruguay</h3>
                                <span className="text-xs dark:text-gray-400">January 22, 2021</span>
                                <p className='text-[#6A6A6A]'>The Colonia Del Sacramento is a quaint little town in Uruguay that’s easy to visit by driving from Montevideo, and you can even visit it on a ….</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-56 dark:bg-gray-500" src="https://i.postimg.cc/W3y2yCKR/pexels-tayssir-kadamany-16571234.jpg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">10 Best Hikes In Aruba: Family Friendly Trails</h3>
                                <span className="text-xs dark:text-gray-400">January 23, 2021</span>
                                <p className='text-[#6A6A6A]'>Even though Aruba is mainly known for its beaches and other fun activities, there are also some easy and family friendly hikes in Aruba where you can …</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-56 dark:bg-gray-500" src="https://i.postimg.cc/sDvny8N6/pexels-brett-sayles-1084362.jpg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">Tiger’s Nest Monastery Bhutan Hike (Paro Taktsang).</h3>
                                <span className="text-xs dark:text-gray-400">January 24, 2021</span>
                                <p className='text-[#6A6A6A]'>The Tiger’s Nest Monastery hike is one of the best things to do in Bhutan, and probably one of the most amazing day hikes anywhere in the …</p>
                            </div>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}
