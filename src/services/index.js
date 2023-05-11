import { API_CONTACT } from "../config/api";

export const GET_CONTACTS = async () => {
  return await API_CONTACT.get("/contact");
};

export const GET_DETAIL_CONTACTS = async ({ queryKey }) => {
  const idContact = queryKey[1].id;
  return await API_CONTACT.get(`/contact/${idContact}`);
};

export const ADD_CONTACTS = async (contact) => {
  return await API_CONTACT.post("/contact", contact);
};

export const DELETE_CONTACTS = async (idContact) => {
  return await API_CONTACT.delete(`/contact/${idContact}`);
};

export const UPDATE_CONTACTS = async (contact) => {
  const idContact = contact.id;
  delete contact.id;
  return await API_CONTACT.put(`/contact/${idContact}`, contact);
};
