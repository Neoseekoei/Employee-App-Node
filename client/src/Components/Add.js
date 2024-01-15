import React from "react";
import { useEffect, useState } from "react";

function Add() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [jobPosition, setJobPosition] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const addNewEmployee = () => {
    let userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      jobPosition: jobPosition,
      phoneNumber: phoneNumber,
    };
    fetch("http://localhost:8080/addemployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("result: ", result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div>
      <h2>Add a New Employee</h2>
      <form onSubmit={addNewEmployee}>
        <input
          type="text"
          className="addInputs"
          placeholder="employee name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          className="addInputs"
          placeholder="employee surname"
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="text"
          className="addInputs"
          placeholder="employee Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          className="addInputs"
          placeholder="employee phonenumber"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <input
          type="text"
          className="addInputs"
          placeholder="employee position"
          onChange={(event) => setJobPosition(event.target.value)}
        />
        <input
          type="text"
          className="addInputs"
          placeholder="employee address"
          onChange={(event) => setAddress(event.target.value)}
        />
        <button onClick={addNewEmployee} type="submit" className="AddButton">
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
