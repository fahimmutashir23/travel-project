import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

const UpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: "easeInOutQuad",
    });
  };
  return (
    <div
      className={`flex justify-end fixed right-10 transition-all duration-500 z-50 ${
        isVisible ? "bottom-2" : "-bottom-16"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="h-10 w-10 bg-green-600 text-white text-2xl flex justify-center items-center mt-3 rounded-sm"
      >
        <IoIosArrowUp className="text-3xl text-white group-hover:text-[#e33226] animate-bounce transition-all duration-300" />
      </button>
    </div>
  );
};

export default UpBtn;
