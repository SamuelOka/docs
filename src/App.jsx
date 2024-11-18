import "./App.css";
import { useState } from "react";

const Customers = [
  {
    name: "Precious",
    accountNumber: "001100",
    pin: "11111",
  },
  {
    name: "Sam",
    accountNumber: "998899",
    pin: "909090",
  },
];

function App() {
  const [accountNumber, setAccountNumber] = useState("");
  const [customer, setCustomer] = useState(null);
  const [pin, setPin] = useState("");
  const [option, setOption] = useState(null);

  function submitAccountNumber() {
    for (let i = 0; i < Customers.length; i++) {
      if (
        Customers[i].accountNumber === accountNumber &&
        customer[i].pin === pin
      ) {
        //if we find a customer, set them and then welcome them
        setCustomer(Customers[i]);
        return;
      }
    }

    /// when we reach here, it means no customer is found
    if (customer === null) {
      alert("Account not found!");
    }
  }

  return (
    <div>
      <p>Enter your account number :</p>
      <input
        type="text"
        onChange={(e) => {
          // we are setting customer to null,
          // because another customer is using the Bank
          // so we want to forget the old customer
          setCustomer(null);
          setAccountNumber(e.target.value);
        }}
      />
      <p>Enter your pin</p>

      <input
        type="text"
        onChange={(e) => {
          setCustomer(null);
          setPin(e.target.value);
        }}
      />
      <button
        className="submit-account-button"
        onClick={() => submitAccountNumber()}
      >
        Submit
      </button>
      <br />
      {customer && (
        <div>
          <p>What would you like to do {customer.name}</p>
          <ul></ul>
        </div>
      )}
    </div>
  );
}

export default App;
