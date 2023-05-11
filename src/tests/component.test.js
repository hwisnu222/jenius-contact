import { render, screen } from "@testing-library/react";
import Table from "../components/tables/Table";

describe("component test", () => {
  it("should render table with correct data", () => {
    const columns = [
      {
        label: "First Name",
        fieldname: "firstName",
      },
      {
        label: "Last Name",
        fieldname: "lastName",
      },
      {
        label: "Age",
        fieldname: "age",
      },
      {
        label: "Photo",
        fieldname: "photo",
      },
    ];

    const dataContact = [
      {
        firstName: "James",
        lastName: "Bond",
        age: 23,
        photo: "www.google.com",
      },
    ];

    render(<Table columns={columns} dataSource={dataContact} />);
    const tests = [
      "First Name",
      "Last Name",
      "Age",
      "Photo",
      "James",
      "Bond",
      "23",
      "www.google.com",
    ];

    tests.forEach((test) => {
      const table = screen.getByText(test);
      expect(table).toBeInTheDocument();
    });
  });
});
