/* eslint-disable react/prop-types */
import { Map, Marker } from "react-map-gl";
import { IoLocationSharp } from "react-icons/io5";
import "mapbox-gl/dist/mapbox-gl.css";

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const MapModal = ({id, hotel}) => {
    const {latLng, hotel_name, hotel_location, hotel_country} = hotel

    const newPlace = {
        latitude: latLng.lat,
        longitude: latLng.lng,
      };


  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box rounded-md max-w-3xl flex gap-3">
        <Map
          mapboxAccessToken= {token}
          initialViewState={{
            latitude: latLng.lat,
            longitude: latLng.lng,
            zoom: 14
          }}
          style={{ width: 500, height: 300 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {
            newPlace ? (
              <>
              <Marker
              latitude={newPlace?.latitude}
              longitude={newPlace?.longitude}
              >
                <IoLocationSharp className="text-4xl text-red-800" />
              </Marker>
              </>
            ) : null
          }
        </Map>
        <div>
            <h1 className="text-blue-500"><span className="text-black">Name: </span>{hotel_name}</h1>
            <h1 className="text-blue-500"><span className="text-black">Location: </span>{hotel_location}</h1>
            <h1 className="text-blue-500"><span className="text-black">Country: </span>{hotel_country}</h1>
        </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default MapModal;
