/* eslint-disable react/prop-types */
import "react-responsive-modal/styles.css";
import "./modalStyle.css";
import { Modal } from "react-responsive-modal";
import useAuth from "../../Hooks/useAuth";
import cardIcon1 from "../../assets/Bank Card/visaCard.png";
import cardIcon2 from "../../assets/Bank Card/masterCard.png";
import cardIcon3 from "../../assets/Bank Card/paypalCard.png";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useEffect, useState } from "react";
const cards = [cardIcon1, cardIcon2, cardIcon3];

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = ({
  open,
  setOpen,
  reserveDate,
  hotel,
  reserveDays,
  room_id,
}) => {
  const { user } = useAuth();
  const [checkDate, setCheckDate] = useState('');
  const [totalReserveDays, setTotalReserveDays] = useState('');
  const [demo, setDemo] = useState('');



  const selectedRoom = hotel?.hotel_room.find(
    (room) => room.room_id == room_id
  );
  
useEffect(()=> {

  if (selectedRoom) {
    const demo = reserveDays.id === selectedRoom.room_id
    setDemo(demo)
    if (
      selectedRoom.room_id === reserveDate.checkIn.id &&
      selectedRoom.room_id === reserveDate.checkOut.id &&
      reserveDays.id === selectedRoom.room_id
    ) {
      setCheckDate({checkIn:reserveDate.checkIn.date, checkOut: reserveDate.checkOut.date})
      setTotalReserveDays(reserveDays.days)
    }
  }
}, [reserveDate.checkIn.date, reserveDate.checkIn.id, reserveDate.checkOut.date, reserveDate.checkOut.id, reserveDays.days, reserveDays.id, selectedRoom])

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
    checkIn: checkDate.checkIn,
    checkOut: checkDate.checkOut,
  };

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
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
                {demo && selectedRoom?.room_price * totalReserveDays}$
              </span>
            </h3>
          </div>
          <div>
            <Elements stripe={stripePromise}>
              <CheckOutForm
                reserveInfo={reserveInfo}
                reserveDays={totalReserveDays}
              ></CheckOutForm>
            </Elements>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Payment;
