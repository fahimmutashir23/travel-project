import AdvertisementSec from "../../../components/WebControl/AdvertisementSec/AdvertisementSec";
import ShowHotelsLimit from "../../../components/WebControl/ShowHotelsLimit/ShowHotelsLimit";
import ShowPackagesLimit from "../../../components/WebControl/ShowPackagesLimit/ShowPackagesLimit";


const WebControl = () => {
    return (
        <div className="flex gap-10 flex-wrap">
            <ShowPackagesLimit />
            <ShowHotelsLimit />
            <div className="flex-1">
            <AdvertisementSec/>
            </div>
        </div>
    );
};

export default WebControl;