/* eslint-disable react/prop-types */
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Loader from "../../Utils/Loader/Loader";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import moment from "moment";

const CheckOutForm = ({ reserveInfo }) => {
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [postalCode, setPostalCode] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [errorMassage, setErrorMassage] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  
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
  const card = elements.getElement(CardNumberElement);
  if (!card) {
      return;
  }
  const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
  });
  if (error) {
      setErrorMassage(error);
      console.log("payment error: ", error);
  } else {
      console.log("payment method: ", paymentMethod);
      setErrorMassage(null);
  }
  const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  name: name || "anonymous",
                  email: user.email || "anonymous",
                  address: {
                      postal_code: postalCode,
                  },
              },
          },
      }
  );
  if (confirmError) {
      setErrorMassage(confirmError);
      console.log("payment error: ", confirmError);
  } else {
      console.log("payment intent: ", paymentIntent);
      setErrorMassage(null);
  }
  if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
  }
  e.target.reset();

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
    
  return (
    <div>
      <form
        onSubmit={handlePayment}
        className="mt-5 px-5 py-5 border-2 border-green-700 rounded-md"
      >
        <div className="mb-10">
                        <h1 className="text-center font-bold text-xl uppercase">
                            Secure payment info
                        </h1>
                    </div>
                    <div className="mb-3">
                        <label className="block font-bold text-sm mb-2 ml-1">Name on card</label>
                        <input
                            className="w-full px-3 py-1 mb-1 border-2 border-gray-200 rounded-md focus:outline-none"
                            placeholder="Your Name"
                            type="text"
                            defaultValue={user?.displayName}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block font-bold text-sm mb-2 ml-1">Card number</label>
                        <CardNumberElement
                            id="card-number"
                            className="w-full px-3 py-4 mb-1 border-2 border-gray-300 rounded-md"
                            options={{
                                showIcon: true,
                                placeholder: "Card Number",
                            }}
                        />
                    </div>
                    <div className="mb-3 -mx-2 flex justify-between items-end">
                        <div className="px-2">
                            <label
                                htmlFor="expire-date"
                                className="block font-bold text-sm mb-2 ml-1 "
                            >
                                Expiration date
                            </label>
                            <CardExpiryElement
                                id="expire-date"
                                className="px-3 py-4 mb-1 border-2 border-gray-200 rounded-md"
                            />
                        </div>
                        <div className="px-2">
                            <label htmlFor="cvc" className="block font-bold text-sm mb-2 ml-1">
                                Security code
                            </label>
                            <CardCvcElement
                                id="cvc"
                                className="px-3 py-4 mb-1 border-2 border-gray-200 rounded-md"
                            />
                        </div>
                        <div className="px-2">
                            <label
                                htmlFor="postal-code"
                                className="block font-bold text-sm mb-2 ml-1"
                            >
                                Postal code
                            </label>
                            <input
                                  onChange={(e) => setPostalCode(e.target.value)}
                                id="postal-code"
                                required
                                maxLength={5}
                                className="w-auto px-3 py-1 mb-1 border-2 border-gray-200 rounded-md focus:outline-none"
                            />
                        </div>
                    </div>
        <button className="btn w-full bg-pink-700 mt-5 text-white rounded-md text-2xl" type="submit">
          {loading ? <Loader center="center" width={10}></Loader> : "Make Payment"}
        </button>
        <p className="mt-5 text-xl font-medium text-pink-700 text-left">Transaction ID : {transactionId}</p>
        <p className="mt-5 text-xl font-medium text-pink-700">{errorMassage}</p>
        <p>{errorMassage}</p>
      </form>
    </div>
  );
};

CheckOutForm.propTypes = {};

export default CheckOutForm;
