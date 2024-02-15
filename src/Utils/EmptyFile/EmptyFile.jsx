import Lottie from "lottie-react";
import comingSoon from "../../assets/lottie/coming-soon.json";

const EmptyFile = () => {
  return (
    <div className="flex justify-center mt-5">
      <div>
        <Lottie
          animationData={comingSoon}
          loop={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
};

export default EmptyFile;
