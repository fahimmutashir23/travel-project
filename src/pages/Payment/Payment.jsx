/* eslint-disable react/prop-types */
import "react-responsive-modal/styles.css";
import "./modalStyle.css"
import { Modal } from "react-responsive-modal";
import useAuth from "../../Hooks/useAuth";
import cardIcon1 from "../../assets/Bank Card/visaCard.png";
import cardIcon2 from "../../assets/Bank Card/masterCard.png";
import cardIcon3 from "../../assets/Bank Card/paypalCard.png";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
const cards = [cardIcon1, cardIcon2, cardIcon3];

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = ({
  open,
  setOpen,
  reserveDate,
  hotel,
  reserveDays,
  room_id
}) => {
  const { user } = useAuth();

  const selectedRoom = hotel?.hotel_room.find(room => room.room_id == room_id)

  function onCloseModal() {
    setOpen(false);
  }

  const reserveInfo = {
    id: hotel._id,
    email: user?.email,
    userName: user?.displayName,
    hotelName: hotel.hotel_name,
    roomId: selectedRoom?.room_id,
    roomName: selectedRoom?.room_name,
    roomPrice: selectedRoom?.room_price,
    checkIn: reserveDate.checkIn,
    checkOut: reserveDate.checkOut,
  };

  return (
    <div >
      <Modal open={open} onClose={onCloseModal} center >
        <div className="md:w-[700px]">
          <h1 className="md:text-2xl font-bold text-green-800 text-center">
            Payment and Booking your Room
          </h1>
          <div className="flex gap-4 h-full items-center justify-center mt-2">
            {cards.map((card) => (
              <img key={card} src={card} alt="" className="w-12" />
            ))}
          </div>
          <div className="divider divider-success"></div>
          <div>
            <h1 className="text-xl font-bold">
              {selectedRoom?.room_name} <span className="font-normal">of</span>{" "}
              {hotel.hotel_name}{" "}
            </h1>
            <h3 className="text-xl mt-2">
              Payable Amount:{" "}
              <span className="font-bold">
                {selectedRoom?.room_price * reserveDays}$
              </span>
            </h3>
          </div>
          <div>
            <Elements stripe={stripePromise}>
              <CheckOutForm
                reserveInfo={reserveInfo}
                reserveDays={reserveDays}
              ></CheckOutForm>
            </Elements>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Payment;
