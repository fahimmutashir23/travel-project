import loader from "../../assets/horse-animation.gif"

// eslint-disable-next-line react/prop-types
const Loader = ({width}) => {
    return (
        <div>
            <img src={loader} alt="Loading..." className={`w-${width}`} />
        </div>
    );
};

export default Loader;