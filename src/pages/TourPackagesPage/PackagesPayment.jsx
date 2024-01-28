/* eslint-disable react/prop-types */
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import cardIcon1 from "../../assets/Bank Card/visaCard.png";
import cardIcon2 from "../../assets/Bank Card/masterCard.png";
import cardIcon3 from "../../assets/Bank Card/paypalCard.png";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PackageCheckOutForm from "./PackageCheckOutForm";
const cards = [cardIcon1, cardIcon2, cardIcon3];

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const PackagePayment = ({ open, setOpen, bookingsInfo }) => {

    const totalMember = bookingsInfo.adultPerson + bookingsInfo.childrenPerson;
    const totalPrice = (bookingsInfo.price - bookingsInfo.discountRate) * totalMember;

  function onCloseModal() {
    setOpen(false);
  }

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
              {bookingsInfo.packageName}
            </h1>
            <h3 className="text-xl mt-2">
              Payable Amount:{" "}
              <span className="font-bold">
                {totalPrice}$
              </span>
            </h3>
          </div>
          <div>
            <Elements stripe={stripePromise}>
              <PackageCheckOutForm
                bookingsInfo = {bookingsInfo}
                totalPrice = {totalPrice}
              ></PackageCheckOutForm>
            </Elements>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PackagePayment;
