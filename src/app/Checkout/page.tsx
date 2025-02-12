"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../../context/Cart_Context";
import React from "react";
import AnimatedModal from "@/components/OrderConfirmation";
import Header from "@/components/Header/page";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripeKey) {
  console.error("Stripe Publishable Key is missing.");
}

const stripePromise = stripeKey ? loadStripe(stripeKey) : null;


// Checkout Form Component
const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `http://localhost:3000/payment-success`},
    });

    if (error) {
      setMessage(error.message || "Payment failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <button type="submit" disabled={!stripe} className="w-full bg-blue-600 text-white py-2 rounded-md">
        Pay Now
      </button>
      {message && <p className="text-red-500 text-sm">{message}</p>}
    </form>
  );
};

// Main PaymentForm Component
const PaymentForm = () => {
  const { state: { items } } = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Billing information state
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    streetAddress: "",
    province: "",
    zipCode: "",
    phone: "",
    paymentMethod: "",
  });

   // Sample city options
   const cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan", "Faisalabad", "Rawalpindi", "Hyderabad", "Sialkot"];

   // Handle input changes for billing info
   const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
     setCustomer({ ...customer, [e.target.name]: e.target.value });
   };
  // Fetch clientSecret from backend

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: total }), // Ensure valid JSON body
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        if (!data.clientSecret) throw new Error("Invalid response from server");
        
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching payment intent:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchClientSecret();
  }, [total]);
  
  type FormDataKeys = keyof typeof customer;
 // Handle place order
 const handlePlaceOrderAndCustomer = async () => {
  const requiredFields: FormDataKeys[] = [
    'name',
    'email',
    'phone',
    'streetAddress',
    'city',
    'province',
    'zipCode',
  ];

  const isFormValid = requiredFields.every(
    (field) => customer[field] && customer[field].trim() !== ''
  );

  if (!isFormValid) {
    alert('Please fill in all required fields.');
    return;
  }

  if (items.length === 0) {
    alert('No items selected');
    return;
  }

  const orderData = {
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    products: items.map((item) => ({
      productTitle: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    shippingAddress: {
      streetAddress: customer.streetAddress,
      city: customer.city,
      zipCode: customer.zipCode,
      phone: customer.phone,
      email: customer.email,
    },
    paymentMethod: customer.paymentMethod,
  };

  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Order Created:', result.order);
      setIsModalOpen(true); // Open the modal on success
    } else {
      const errorData = await response.json();
      console.error('Failed to create order:', errorData);
      alert('Failed to create order. Please try again.');
    }
  } catch (error) {
    console.error('Error while creating the order:', error);
    alert('An error occurred while placing your order. Please try again.');
  }
};

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="flex flex-col lg:flex-row gap-8 p-4">
        {/* Left Side - Billing Details */}
        <div className="flex-1 bg-white p-6 rounded-md shadow-md">
          <h1 className="text-3xl font-extrabold text-[#2A254B] mb-6">Billing Information</h1>
          {/* Billing form here */}
          <form className="space-y-4">
            <div>
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
                value={customer.name}
                onChange={handleBillingChange}
              />
            </div>
            {/* Email */}
             <div >
               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
               <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={customer.email}
                onChange={handleBillingChange}
                placeholder="example@domain.com"
              />
            </div>
            {/* Phone Number */}
            <div className="mb-4">
              <label  htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={customer.phone}
                onChange={handleBillingChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
                placeholder="+92 300 1234567"
              />
            </div>
             {/* Street Address */}
          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={customer.streetAddress}
              onChange={handleBillingChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          {/* Province */}
          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
              Province
            </label>
            <input
              type="text"
              id="province"
              name="province"
              value={customer.province}
              onChange={handleBillingChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Zip Code */}
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={customer.zipCode}
              onChange={handleBillingChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          {/* City */}
            <div>
              <label className="block text-gray-700">City</label>
              <select
                id="city"
                name="city"
                value={customer.city}
                onChange={handleBillingChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
                >
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full md:w-[45%] p-6 rounded-xl bg-[#e9e5ff]">
          <h1 className="text-2xl font-extrabold text-[#2A254B] mb-6">Order Summary</h1>
          {items.map((item, index) => (
            <div key={index} className="flex justify-between py-2 border-b">
              <p className="text-sm font-medium text-gray-700">
                {item.name} x {item.quantity}
              </p>
              <p className="text-sm font-semibold text-gray-700">&#163; {item.price * item.quantity}</p>
            </div>
          ))}
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="font-semibold text-gray-700">&#163; {total}</p>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p className="text-xl text-gray-600 font-bold">Total</p>
              <p className="font-bold text-[#4a988d] text-2xl">&#163; {total}</p>
            </div>
          </div>

          {/* Payment Section */}
          {loading ? (
          <p className="text-center text-gray-600">Loading payment details...</p>
        ) : clientSecret && stripePromise ? (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
    ) : (
        <p className="text-center text-red-500">Failed to load payment details.</p>
        )}
        </div>
      </div>
      <div className="mt-6">
    <button
        className=" py-3 bg-[#2A254B] border border-[#c1bcde] text-white font-semibold rounded-md transition"
        onClick={handlePlaceOrderAndCustomer}
      >
        Place Order
      </button>
    </div>

      {/* Modal */}
      {isModalOpen && (
        <AnimatedModal isModalOpen={isModalOpen} closeModal={closeModal} />
      )}
  </div>
  );
};

export default PaymentForm;
