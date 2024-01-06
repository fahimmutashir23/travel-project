/* eslint-disable react/prop-types */
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import useAuth from "../../Hooks/useAuth";
import cardIcon1 from "../../assets/Bank Card/visaCard.png";
import cardIcon2 from "../../assets/Bank Card/masterCard.png";
import cardIcon3 from "../../assets/Bank Card/paypalCard.png";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
const cards = [cardIcon1, cardIcon2, cardIcon3];

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = ({ open, setOpen, id, room, reserveDate, hotel_name }) => {
  const handleClose = () => setOpen(false);
  const { user } = useAuth();

  const reserveInfo = {
    id: id,
    email: user?.email,
    userName: user?.displayName,
    hotelName: hotel_name,
    roomId: room.room_id,
    roomName: room.room_name,
    roomPrice: room.room_price,
    checkIn: reserveDate.checkIn,
    checkOut: reserveDate.checkOut,
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
      >
        <Fade in={open}>
          <div
            className="absolute top-[50%] left-[50%] bg-red-50 border-2 rounded-tl-3xl rounded-br-3xl shadow-lg py-4 px-4 text-center text-black w-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <h1 className="md:text-2xl font-bold text-green-800">
              Payment and Booking your Room
            </h1>
            <div className="flex gap-4 h-full items-center justify-center mt-2">
              {cards.map((card) => (
                <img key={card} src={card} alt="" className="w-12" />
              ))}
            </div>
            <div className="divider divider-success"></div>
            <div>
              <h1 className="text-xl font-bold">{room.room_name} <span className="font-normal">of</span> {hotel_name} </h1>
              <h3 className="text-xl mt-2">
                Payable Amount:{" "}
                <span className="font-bold">{room.room_price}$</span>
              </h3>
            </div>
            <div>
              <Elements stripe={stripePromise}>
                <CheckOutForm reserveInfo={reserveInfo}></CheckOutForm>
              </Elements>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Payment;
