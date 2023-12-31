import loader from "../../assets/horse-animation.gif"
import loader1 from "../../assets/Loader1.gif"

// eslint-disable-next-line react/prop-types
const Loader = ({width, center}) => {
    return (
        <div className={`flex justify-${center}`}>
            <img src={loader} alt="Loading..." className={`w-${width}`} />
        </div>
    );
};

export default Loader;