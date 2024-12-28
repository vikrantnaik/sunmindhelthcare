import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBrowserSafari, BsInfoCircleFill } from "react-icons/bs";

const Order = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            How to Place Your Order
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            At Sunmind Healthcare, we make it easy for you to place your orders.
            Simply follow the steps below, and give us a call to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  mt-14">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <BsBrowserSafari className=" w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Step 1: Browse Our Products
            </h3>
            <p className="text-gray-600 text-center">
              Review our product offerings and prepare the details of the items
              you'd like to order.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <FaPhoneAlt className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Step 2: Call Us to Order
            </h3>
            <p className="text-gray-600 text-center">
              Give us a call at <strong>+91-9011889317</strong> to place your
              order with one of our representatives.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <BsInfoCircleFill className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Step 3: Confirm & Receive
            </h3>
            <p className="text-gray-600 text-center">
              After confirming your order, we'll process it and ensure timely
              delivery to your location.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Call us today and speak to one of our representatives to place your
            order.
          </p>
          <a
            href="tel:+91 9011889317"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-all"
          >
            <FaPhoneAlt className="mr-3" />
            Call Now: +91-9011889317
          </a>
        </div>
      </div>
    </div>
  );
};

export default Order;
