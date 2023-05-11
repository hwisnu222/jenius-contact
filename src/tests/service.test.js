import { API_CONTACT } from "../config/api";
import { ADD_CONTACTS, GET_CONTACTS, UPDATE_CONTACTS } from "../services";

const idContact = "93ad6070-c92b-11e8-b02f-cbfa15db428b";

async function getContact() {
  const res = await GET_CONTACTS();
  return res.data.data;
}

async function postContact(data) {
  const res = await ADD_CONTACTS(data);
  return res;
}

async function putContact(data) {
  const res = await UPDATE_CONTACTS(data);
  return res;
}

describe("service test", () => {
  let data;
  beforeEach(() => {
    data = {
      firstName: "hello",
      lastName: "last",
      age: 21,
      photo: "https://google.com",
    };
  });
  it("should return array with property", async () => {
    const contacts = await getContact();
    const contact = contacts[0];
    expect(contact).toMatchJsonPath("$.firstName");
    expect(contact).toMatchJsonPath("$.lastName");
    expect(contact).toMatchJsonPath("$.age");
    expect(contact).toMatchJsonPath("$.photo");
  });

  it("should service post can post contact", async () => {
    API_CONTACT.post = jest.fn().mockResolvedValue({ data });
    const add = await postContact(data);

    expect(API_CONTACT.post).toHaveBeenCalledTimes(1);
    expect(API_CONTACT.post).toHaveBeenCalledWith("/contact", data);
    // expect(add.status).toEqual(201);
  });

  it("should service can update contact", async () => {
    data.id = idContact;
    API_CONTACT.put = jest.fn().mockResolvedValue({ data });
    const update = await putContact(data);

    expect(API_CONTACT.put).toHaveBeenCalledTimes(1);
    expect(API_CONTACT.put).toHaveBeenCalledWith(`/contact/${idContact}`, data);
    expect(update).toMatchJsonPath("$.data");
  });

  it("should service can delete contact", async () => {
    data.id = idContact;
    API_CONTACT.delete = jest.fn().mockResolvedValue({ data });

    expect(API_CONTACT.delete).toHaveBeenCalledTimes(1);
    expect(API_CONTACT.delete).toHaveBeenCalledWith(
      `/contact/${idContact}`,
      data
    );
  });
});
