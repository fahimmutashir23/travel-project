/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Loader from "../../Utils/Loader/Loader";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import moment from "moment";

const CheckOutForm = ({ reserveInfo }) => {
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [payment, setPayment] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const date = moment().format("DD-MM-YYYY, h:mm a");


  useEffect(() => {
    axiosSecure
      .post("/payment-intent", { price: reserveInfo.roomPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, reserveInfo.roomPrice]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorMsg("Something went wrong, Please submit valid information");
    } else {
      console.log("success", paymentMethod);
    }

    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      }
    );

    if (cardError) {
      setErrorMsg("Something went wrong, Please submit valid information");
    } else {
      if (paymentIntent.status === "succeeded") {
        setPayment(paymentIntent.id);

        setLoading(false);
        setErrorMsg("Successfully pay! Go to your booking section and collect receipt");

        const reserveInfoExtend = {
          id: reserveInfo.id,
          email: reserveInfo.email,
          userName: reserveInfo.userName,
          hotelName: reserveInfo.hotelName,
          roomId: reserveInfo.roomId,
          roomName: reserveInfo.roomName,
          roomPrice: reserveInfo.roomPrice,
          checkIn: reserveInfo.checkIn,
          checkOut: reserveInfo.checkOut,
          transactionID: paymentIntent.id,
          date: date
        }

        axiosSecure.post("/bookings", reserveInfoExtend).then((res) => {
          if (res.data.insertedId) {
            toast("Booking Success");
          }
        });
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={handlePayment}
        className="mt-5 px-5 py-5 border-2 border-green-700 rounded-md"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "black",
                "::placeholder": {
                  color: "gray",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn w-full bg-pink-700 mt-5 text-white rounded-md text-2xl" type="submit">
          {loading ? <Loader center="center" width={10}></Loader> : "Make Payment"}
        </button>
        <p className="mt-5 text-xl font-medium text-pink-700 text-left">Transaction ID : {payment}</p>
        <p className="mt-5 text-xl font-medium text-pink-700">{errorMsg}</p>
        <p>{errorMsg}</p>
      </form>
    </div>
  );
};

CheckOutForm.propTypes = {};

export default CheckOutForm;
