import React from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { MdContactPage, MdEdit, MdDelete } from "react-icons/md";

import { DELETE_CONTACTS, GET_CONTACTS } from "../services";

import Container from "../components/containers/Container";
import Header from "../components/headers/Header";
import Table from "../components/tables/Table";
import constants from "../constants";
import Loading from "../components/containers/Loading";
import ErrorImage from "../assets/error.png";

const ActionContact = ({ row }) => {
  const { mutate } = useMutation(DELETE_CONTACTS, {
    onSuccess: async () => {
      toast.success("Yeayy. Your contact is deleted!");
    },
    onError: () => {
      toast.error("Opps. Your contact is not deleted!");
    },
  });

  const deleteContact = () => {
    mutate(row.id);
  };

  return (
    <div className="flex gap-2">
      <Link to={`/contacts/edit/${row.id}`}>
        <button className="flex gap-2 items-center text-blue-500">
          <MdEdit /> Edit
        </button>
      </Link>
      <button
        className="flex gap-2 items-center text-red-500"
        onClick={deleteContact}
      >
        <MdDelete /> Delete
      </button>
    </div>
  );
};

const columns = [
  {
    label: "Photo",
    fieldname: "photo",
    className: "w-48",
    render: (row) => {
      return (
        <img
          src={row.photo}
          alt="thumbnail"
          className="object-cover w-28 h-28"
          onError={({ currentTarget }) => {
            currentTarget.src = ErrorImage;
          }}
        />
      );
    },
  },
  {
    label: "Full Name",
    className: "w-48",
    render: (row) => {
      return <span>{`${row.firstName} ${row.lastName}`}</span>;
    },
  },
  {
    label: "Age",
    fieldname: "age",
    render: (row) => {
      return (
        <span className="bg-sky-200 text-sky-800 px-2 py-1 font-semibold rounded-full">
          {row.age} years old
        </span>
      );
    },
  },
  {
    label: "Action",
    className: "w-28",
    render: (row) => <ActionContact row={row} />,
  },
];

export default function Contact() {
  const dispatch = useDispatch();
  const lenContact = useSelector((state) => state.contacts);

  const { data, isLoading } = useQuery("contacts", GET_CONTACTS, {
    onSuccess: (contacts) => {
      const lenContact = contacts?.data.data.length;
      dispatch({ type: constants.SET_CONTACT, payload: lenContact });
    },
  });
  const contacts = data?.data.data;

  return (
    <>
      <Header />
      <Container>
        <div className="bg-white rounded-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-sky-600 text-xl flex gap-2 items-center">
              <MdContactPage size={28} /> Contacts ({lenContact || 0})
            </h3>
            <Link to="/contacts/add" className="block">
              <button className="bg-sky-600 text-white font-semibold px-6 text-sm md:text-md hover:bg-sky-700">
                Add New Contact
              </button>
            </Link>
          </div>
          <Loading isLoading={isLoading}>
            <div className="overflow-x-auto">
              <Table columns={columns} dataSource={contacts} />
            </div>
          </Loading>
        </div>
      </Container>
    </>
  );
}
