import { Link } from "react-router-dom";
import loader from "../../assets/errorPage2.gif"

const ErrorPage = () => {
    return (
        <div className="h-screen relative overflow-hidden">
            <img src={loader} alt="" className="h-full w-full object-cover"/>
            <Link to="/" className="btn bg-blue-200 text-2xl px-8 rounded-full absolute bottom-[72px] text-black left-0 right-0 ml-auto mr-auto max-w-fit border-none hover:bg-violet-300">Go Back to Earth</Link>
        </div>
    );
};

export default ErrorPage;