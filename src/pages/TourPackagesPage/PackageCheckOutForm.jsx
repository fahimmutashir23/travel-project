/* eslint-disable react/prop-types */
import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
  import { useEffect, useState } from "react";
  import toast from "react-hot-toast";
  import moment from "moment";
  import PhoneInput from "react-phone-input-2";
import Loader from "../../Utils/Loader/Loader";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
  
  const PackageCheckOutForm = ({ bookingsInfo, totalPrice }) => {

    const [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [postalCode, setPostalCode] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [errorMassage, setErrorMassage] = useState(null);
    const date = moment().format("DD-MM-YYYY, h:mm a");
    const [phone, setPhone] = useState("");
    const [check, setCheck] = useState(false);
    const message = (
    `Dear Mr. Xxxx,
    Greetings from Ours Travels.
     
    Thank you for choosing to stay with us. We are pleased to confirm the Package for ${bookingsInfo.userName}.
    ${bookingsInfo.price - bookingsInfo.discountRate}$The details of the booking confirmation are attached along with this Invoice.
    
    Please let us know how we could assist on the above matters. Thank you.

    Your Invoice: 
    
    Best Regards,

    Ours Travels
    Executive, Reservation
    Mobile: +880 1581868984 | E-mail: ourtravels@gmail.com
    Tour and Travel 
    Gulshan, House 19, Road 17, Dhaka 1212, Bangladesh`)
    
    const handlePhone = (e) => {
      setPhone(e);
    };
  
    const emailInfo = {
      subject: "Our Travels Payment Confirmation",
      message: message,
    };
  
    useEffect(() => {
      const price = totalPrice;
      axiosSecure.post("/payment-intent", { price: price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }, [axiosSecure, totalPrice]);
  
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
      } else {
        setErrorMassage(null);
      }
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
              address: {
                postal_code: postalCode,
              },
            },
          },
        });
  
      if (confirmError) {
        setErrorMassage(confirmError);
      } else {
        setErrorMassage(null);
      }
      if (paymentIntent.status === "succeeded") {
        setErrorMassage(
          "Successfully pay! Please got to your booking section or check your email and collect your payment receipt."
        );
        setLoading(false);
        e.target.reset();
  
        const packageBookingsInfo = {
          id: bookingsInfo.id,
          email: bookingsInfo.userEmail,
          phone: phone,
          userName: bookingsInfo.userName,
          packageName: bookingsInfo.packageName,
          children : bookingsInfo.childrenPerson,
          adult : bookingsInfo.adultPerson,
          amount: bookingsInfo.price - bookingsInfo.discountRate,
          totalPay: totalPrice,
          date: bookingsInfo.date,
          transactionID: paymentIntent.id,
          paymentDate: date,
          status: "Pending",
          category: "Package",
        };
  
        axiosSecure
          .post("/bookings", { packageBookingsInfo, emailInfo })
          .then((res) => {
            if (res.data.insertedId) {
              toast("Booking Success");
            }
          });
      }
    };
  
    return (
      <div>
        <form
          onSubmit={handlePayment}
          className="mt-5 px-5 py-2 border-2 border-green-700 rounded-md"
        >
          <div className="mb-4">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3">
            <label className="block font-bold text-sm mb-2 ml-1">
              Card number
            </label>
            <CardNumberElement
              id="card-number"
              className="w-full px-3 py-2 mb-1 border-2 border-gray-300 rounded-md"
              options={{
                showIcon: true,
                placeholder: "Card Number",
              }}
            />
          </div>
          <div className="mb-3 -mx-2 md:flex justify-between items-center">
            <div className="px-2">
              <label
                htmlFor="expire-date"
                className="block font-bold text-sm mb-2 ml-1 "
              >
                Expiration date
              </label>
              <CardExpiryElement
                id="expire-date"
                className="px-3 py-2 mb-1 border-2 border-gray-200 rounded-md"
              />
            </div>
            <div className="px-2">
              <label htmlFor="cvc" className="block font-bold text-sm mb-2 ml-1">
                Security code
              </label>
              <CardCvcElement
                id="cvc"
                className="w-24 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md"
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
                placeholder="POST"
                className="w-24 px-3 py-1 mb-1 border-2 bg-transparent border-gray-200 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-3 border-2 px-1 py-2 rounded-md bg-white">
              <span>
                Your phone number is require for Secure your Information.
              </span>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  required
                  onChange={(e) => setCheck(e.target.checked)}
                  className="checkbox border-2 rounded-[4px] border-red-600"
                />
                <div
                  className={`${
                    !check ? "w-0 overflow-hidden" : "w-96 overflow-hidden transition-all duration-1000"
                  } `}
                >
                  <PhoneInput
                    country={"bd"}
                    value={phone}
                    onChange={handlePhone}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn w-full bg-pink-700 text-white rounded-md text-xl"
            type="submit"
          >
            {loading ? (
              <Loader center="center" width={10}></Loader>
            ) : (
              "Make Payment"
            )}
          </button>
          <p className="mt-5 text-xl font-medium text-pink-700">{errorMassage}</p>
        </form>
      </div>
    );
  };
  
  PackageCheckOutForm.propTypes = {};
  
  export default PackageCheckOutForm;
  