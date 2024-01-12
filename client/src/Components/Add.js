import React from 'react'

function Add() {

    const addNewEmployee = () => {
        let userData = {
          firstName: "NEO",
          lastName: "SEEKOEI",
          email: "seekoeineo16@gmail.com",
        };
        fetch('http://localhost:8080/addemployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(result => {
            console.log("result: ", result);
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
      }
  return (
    <div>
         <h2>Add a Contact</h2>
    <form onSubmit={addNewEmployee}>
      <input
      className='addInputs'
        type="text"
        name="fullName"
        required="required"
        placeholder="Enter a name..."
        onChange={addNewEmployee}
      />
      <input
      className='addInputs'
        type="text"
        name="address"
        required="required"
        placeholder="Enter an addres..."
        onChange={addNewEmployee}
      />
      <input
      className='addInputs'
        type="text"
        name="phoneNumber"
        required="required"
        placeholder="Enter a phone number..."
        onChange={addNewEmployee}
      />
      <input
      className='addInputs'
        type="email"
        name="email"
        required="required"
        placeholder="Enter an email..."
        onChange={addNewEmployee}
      />
      <button onClick={addNewEmployee} type="submit" className='AddButton'>Add</button>
    </form>

      
    </div>
  )
}

export default Add
