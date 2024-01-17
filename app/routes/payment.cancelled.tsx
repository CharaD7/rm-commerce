import { Link } from "@remix-run/react";
import React from "react";

const PaymentCancelled = () => {
  return (
    <>
      <div className="h-[90vh] flex flex-col items-center justify-center overflow-hidden w-full">
        <div className="bg-white p-6 md:mx-auto">
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Your payment was cancelled.
            </h3>
            <p className="text-gray-600 my-2">
              Payment for your current order could not be processed.
            </p>
            <div className="py-10 text-center">
              <Link
                to={"/"}
                className="px-12 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-semibold py-3"
              >
                Go to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCancelled;
