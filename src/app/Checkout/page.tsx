"use client"

import { useState } from "react"; 
import { useCart } from "../../../context/Cart_Context"; 
import React from "react";
import AnimatedModal from "@/components/OrderConfirmation"; 
import Header from "@/components/Header/page";




const PaymentForm = () => {
  const { state: { items }, dispatch } = useCart();
 console.log(items)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);


  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [paymentDetails, setPaymentDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(''); // New state for payment status
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

  // Handle payment method change
  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPaymentMethod(e.target.value); // Update selected payment method
  };

  
  // Handle input changes for payment form
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  // Mock function to simulate a payment
  const processPayment = (paymentMethod: string) => {
    if (paymentMethod === 'creditCard') {
      // Simulate Credit Card Payment Process
      setTimeout(() => {
        setPaymentStatus('Payment successful! Your order is confirmed.');
      }, 2000); // Mock success after 2 seconds
    } else if (paymentMethod === 'paypal') {
      // Simulate PayPal Payment Process
      setTimeout(() => {
        setPaymentStatus('Payment successful via PayPal! Your order is confirmed.');
      }, 2000); // Mock success after 2 seconds
    }
  };
   // Handle form submit
   const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStatus('Processing payment...'); // Show processing message
    processPayment(paymentMethod); // Call the mock payment function
  };
  
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
        <Header/>
      </header>
      <div className="flex flex-col lg:flex-row gap-8 p-4">
      {/* Left Side - Billing Details */}
      <div className="flex-1 bg-white p-6 rounded-md shadow-md">
      <h1 className="text-3xl font-extrabold text-[#2A254B] mb-6">Billing Information</h1>
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
  <div className="w-full md:w-[45%]  p-6 rounded-xl pl-0 ml-0 sm:p-6 bg-[#e9e5ff]">
    <div className='flex justify-between items-center pb-4'>
    <h1 className="text-2xl font-extrabold text-[#2A254B] mb-6">Product</h1>
    <h2 className="text-2xl font-extrabold text-[#2A254B] mb-6">Subtotal</h2>
    </div>


    {/* Product List */}
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center py-2 border-b">
                <p className="text-sm font-medium text-gray-700">
                  {item.name} x {item.quantity}
                </p>
                <p className="text-sm font-semibold text-gray-700">&#163; {item.price * item.quantity}</p>
              </div>
          ))}
    </div>
    <div className="space-y-4 mt-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="font-semibold text-gray-700">&#163; {total}</p>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p className="text-xl text-gray-600 font-bold">Total</p>
              <p className="font-bold text-[#4a988d] text-2xl">&#163; {total}</p>
            </div>
          </div>

        {/* Right side: Payment method selection */}
        <div className="mt-6 items-center justify-center">
          <h2 className="text-3xl font-extrabold mb-4 text-[#2A254B] text-center">Choose Your Payment Method</h2>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="border p-2 w-full mb-6"
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>

          {/* Payment form rendering based on the selected payment method */}
          {paymentMethod === 'creditCard' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div className="mb-4">
                <label className="block text-gray-700">Name on Card</label>
                <input
                  type="text"
                  name="nameOnCard"
                  value={paymentDetails.nameOnCard}
                  onChange={handlePaymentChange}
                  className="border p-2 w-full"
                  placeholder="John Doe"
                />
              </div>
               {/* Expiration Date and CVV */}
               <div className="flex gap-4 mt-4">
                {/* Expiration Date */}
                <div className="flex-1">
                  <label className="block font-medium">Expiration Date</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="MM"
                      className="w-1/2 border rounded-md p-2"
                    />
                    <input
                      type="text"
                      placeholder="YY"
                      className="w-1/2 border rounded-md p-2"
                    />
                  </div>
                </div>

                {/* CVV */}
                <div className="flex-1">
                  <label className=" font-medium flex items-center">
                    CVV
                    <span className="ml-2 text-gray-500 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 6h.01m-6.938 4h13.856C19.919 21.998 21 20.945 21 19.616V6.384C21 5.055 19.919 4.002 18.618 4H5.382C4.081 4 3 5.055 3 6.384v13.232C3 20.945 4.081 21.998 5.382 21.998z"
                        />
                      </svg>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full border rounded-md p-2 mt-2"
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md">
                Submit Payment
              </button>
            </form>
          )}

          {paymentMethod === 'paypal' && (
            <div className="flex flex-col items-center">
              <h3 className="text-xl mb-4">PayPal Payment</h3>
              <p className="text-gray-600">You will be redirected to PayPal for payment.</p>
              <button
                className="w-full bg-yellow-500 text-white p-2 rounded-md mt-4"
                onClick={() => {
                  setPaymentStatus('Redirecting to PayPal...');
                  setTimeout(() => {
                    setPaymentStatus('Payment successful via PayPal! Your order is confirmed.');
                  }, 2000); // Simulate PayPal redirect and payment success
                }}
              >
                Proceed to PayPal
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Show Payment Status */}
      {paymentStatus && (
        <div className="mt-6 p-4 border rounded-md bg-green-100 text-green-800">
          <p>{paymentStatus}</p>
        </div>
      )}
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






