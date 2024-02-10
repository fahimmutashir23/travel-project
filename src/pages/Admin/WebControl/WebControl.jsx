import ShowHotelsLimit from "../../../components/WebControl/ShowHotelsLimit/ShowHotelsLimit";
import ShowPackagesLimit from "../../../components/WebControl/ShowPackagesLimit/ShowPackagesLimit";


const WebControl = () => {
    return (
        <div className="flex gap-10 flex-wrap">
            <ShowPackagesLimit />
            <ShowHotelsLimit />
        </div>
    );
};

export default WebControl;