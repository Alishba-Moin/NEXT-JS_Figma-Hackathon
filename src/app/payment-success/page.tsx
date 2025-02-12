"use client";
import { BiSolidCheckCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaMoneyBillWave } from "react-icons/fa";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Animated Success Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center space-x-3 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg"
      >
        <BiSolidCheckCircle className="h-10 w-10 text-white" />
        <h1 className="text-xl font-semibold">Payment Successful!</h1>
      </motion.div>

      {/* Payment Details Card */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-8 p-8 w-full max-w-md rounded-lg shadow-xl bg-white bg-opacity-10 backdrop-blur-lg border border-gray-500"
      >
        <h2 className="text-2xl font-bold text-center">Thank You for Your Payment</h2>

        <div className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg mt-5 shadow-inner">
          <FaMoneyBillWave className="text-green-600 h-8 w-8 mr-3" />
          <p className="text-3xl font-extrabold">${amount}</p>
        </div>

        <p className="text-gray-300 text-center mt-4">Your payment has been successfully processed.</p>
      </motion.div>
    </main>
  );
}
