import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { json } from "react-router";
import Cookies from "js-cookie";

function Checkout() {
  return (
    <div>
      <Header />
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-3/4 border-2 mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
          <div className="flex">
            <div className="w-1/2 pr-4">
              <div className="mb-10">
                <h1 className="text-center font-bold text-xl uppercase">
                  Billing information
                </h1>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">
                  Primary Address
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Primary Address"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">
                  Secondary Address
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Secondary Address"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">
                  First Name
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">Last Name</label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">Email</label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">Country</label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 roundedmd focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Country"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">City</label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="City"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">
                  Postal Code
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Postal Code"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="mb-10">
                <h1 className="text-center font-bold text-xl uppercase">
                  Secure payment info
                </h1>
              </div>
              <div className="mb-3 flex -mx-2">
                <div className="px-2">
                  <label
                    htmlFor="type1"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-indigo-500"
                      name="type"
                      id="type1"
                      checked
                    />
                    <img
                      src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                      className="h-8 ml-3"
                      alt=""
                    />
                  </label>
                </div>
                <div className="px-2">
                  <label
                    htmlFor="type2"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-indigo-500"
                      name="type"
                      id="type2"
                    />
                    <img
                      src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                      className="h-8 ml-3"
                      alt=""
                    />
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">
                  Name on card
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Smith"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">
                  Card number
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3 -mx-2 flex items-end">
                <div className="px-2 w-1/2">
                  <label className="font-bold text-sm mb-2 ml-1">
                    Expiration date
                  </label>
                  <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                      <option value="01">01 - January</option>
                      <option value="02">02 - February</option>
                      <option value="03">03 - March</option>
                      <option value="04">04 - April</option>
                      <option value="05">05 - May</option>
                      <option value="06">06 - June</option>
                      <option value="07">07 - July</option>
                      <option value="08">08 - August</option>
                      <option value="09">09 - September</option>
                      <option value="10">10 - October</option>
                      <option value="11">11 - November</option>
                      <option value="12">12 - December</option>
                    </select>
                  </div>
                </div>
                <div className="px-2 w-1/2">
                  <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
              </div>
              <div className="mb-10">
                <label className="font-bold text-sm mb-2 ml-1">
                  Security code
                </label>
                <div>
                  <input
                    className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="000"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-10">
                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                  <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
