import { Parallax } from "react-parallax";

const WhyChoose = () => {
    return (
        <div>
            <p className="text-center text-3xl mb-2 mt-10 font-bold">Why Choose Us</p>
            <h1 className="text-center text-lg mb-5 font-bold">
                Here are reasons you should plan trip with us
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                <div className="flex-1 justify-center items-center">
                   <div className="flex justify-center">
                   <img src="https://max-themes.net/demos/grandtour/upload/Map-Marker-300x300.png" alt="" className="w-36 text-center justify-center" />
                   </div>
                    <h1 className="text-center">Handpicked Hotels</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>
                <div>
                    <div className="flex justify-center">
                    <img src="https://max-themes.net/demos/grandtour/upload/Worldwide-Location-300x300.png" alt="" className="w-36 text-center  justify-center" />
                    </div>
                    <h1 className="text-center">World Class Service</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>
                <div>
                    <div className="flex justify-center">
                    <img src="https://max-themes.net/demos/grandtour/upload/Hot-Air-Balloon-300x300.png" alt="" className="w-36 text-center  justify-center" />
                    </div>
                    <h1 className="text-center">Best Price Guarantee</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>

            </div>
            <div className="featured-item bg-fixed text-white font-bold opacity-110 pt-8 my-20 lg:h-[40vh]">
            <Parallax
            bgImage="https://i.postimg.cc/L5ZPFWgQ/hand-hospital.webp"
            renderLayer={(percentage) => (
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <div className="parallax-container">
            <iframe
                title="Background Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JPe2mwq96cw?autoplay=1&loop=1&playlist=JPe2mwq96cw&mute=1"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className="content-over-video">
                {/* Your other content goes here */}
            </div>
        </div>
        </Parallax>
     </div>
</div>
    );
};

export default WhyChoose;
