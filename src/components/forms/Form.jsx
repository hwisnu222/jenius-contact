import React from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  ADD_CONTACTS,
  GET_DETAIL_CONTACTS,
  UPDATE_CONTACTS,
} from "../../services";

export default function Form({ title }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = React.useState({});

  useQuery(["getContact", { id }], GET_DETAIL_CONTACTS, {
    onSuccess: (data) => {
      setForm(data?.data.data);
    },
  });

  const addContact = useMutation(ADD_CONTACTS, {
    onSuccess: () => {
      navigate("/contacts");
      toast.success("Yeayy. Your contact is saved!");
    },
    onError: () => {
      toast.error("Opps. Your contact is not saved!");
    },
  });
  const updateContact = useMutation(UPDATE_CONTACTS, {
    onSuccess: () => {
      navigate("/contacts");
      toast.success("Yeayy. Your contact is updated!");
    },
    onError: () => {
      toast.error("Opps. Your contact is not updated!");
    },
  });

  const handleGoBack = () => {
    navigate("/contacts");
  };

  const handleOnChange = (e) => {
    const target = e.target;
    setForm({ ...form, [target.name]: target.value });
  };

  const submitForm = () => {
    if (id) {
      form.id = id;
      return updateContact.mutate(form);
    }
    addContact.mutate(form);
  };

  const isLoading = addContact.isLoading | updateContact.isLoading;
  return (
    <div className="flex justify-center items-start bg-sky-600 h-screen">
      <div className=" bg-white rounded-md shadow-md p-6 mt-20 md:w-1/3">
        <h3 className="font-semibold text-md mb-4 text-sky-600">{title}</h3>
        <from className="flex flex-col  gap-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleOnChange}
            value={form.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleOnChange}
            value={form.lastName}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            onChange={handleOnChange}
            value={form.age}
          />
          <input
            type="url"
            name="photo"
            placeholder="https://your-photo.com/myphoto.jpg"
            required
            onChange={handleOnChange}
            value={form.photo}
          />
          <button
            className="bg-sky-600 text-white font-semibold mt-6 hover:bg-sky-700"
            onClick={submitForm}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
          <button
            className="text-sky-600 font-semibold hover:bg-gray-300"
            onClick={handleGoBack}
          >
            Cancel
          </button>
        </from>
      </div>
    </div>
  );
}
