import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header({ isHome = false }) {
  const contacts = useSelector((state) => state.contacts);
  return (
    <div className="px-4 py-6 bg-white shadow-md flex justify-between items-center flex-col gap-2 md:flex-row">
      <Link to="/">
        <img src={require("../../assets/logo_jenius-blue.png")} alt="logo" />
      </Link>
      {!isHome && (
        <h3 className="font-semibold text-lg text-sky-600">
          You have {contacts || 0} contacts
        </h3>
      )}
    </div>
  );
}
