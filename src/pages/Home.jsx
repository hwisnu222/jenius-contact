import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/headers/Header";

export default function Home() {
  return (
    <>
      <Header isHome={true} />
      <div className="bg-sky-600 flex flex-col items-center h-5/6 p-28">
        <h3 className="text-white text-5xl font-extrabold tracking-wider">
          Welcome to Jenius Contact
        </h3>
        <p className="text-white opacity-60 text-center mt-6 md:w-1/2">
          Are you tired of losing important contact information or struggling to
          keep all your contacts organized? Look no further than Jenius Contact
          - the ultimate solution for all your contact management needs!
        </p>
        <Link to="/contacts">
          <button className="bg-white rounded-md text-sky-600 text-lg mt-8 px-6 hover:bg-gray-200">
            Create Yours Contact
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <p className="bg-sky-500 p-16 font-semibold text-sky-900">
          Our easy-to-use platform allows you to quickly and efficiently store
          and access all your contacts in one place. With Jenius Contact, you'll
          never have to worry about losing a phone number or email address
          again.
        </p>
        <p className="bg-sky-400 p-16 font-semibold text-sky-900">
          Our platform is perfect for professionals, entrepreneurs, and anyone
          who needs to manage multiple contacts. Whether you're on the go or in
          the office, Jenius Contact has got you covered.
        </p>
        <p className="bg-sky-300 p-16 font-semibold text-sky-900">
          So why wait? Sign up for Jenius Contact today and take the first step
          toward hassle-free contact management!
        </p>
      </div>
    </>
  );
}
