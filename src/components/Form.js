import React from "react";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const [clients, setClients] = useState([]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handelAdd = () => {
    setClients([...clients, inputValue]);
    setInputValue("");
  };

  const handleEdit = (key, item) => {
    const editClient = [...clients];
    editClient.splice(key, 1, item);
    setClients(editClient);
  };

  const handleDelete = key => {
    const removeClients = [...clients];
    removeClients.splice(key, 1);
    setClients(removeClients);
  };
  return (
    <div>
      <h2>My Form is starting</h2>
      <h3>Numbers of clients: ({clients.length})</h3>
      {clients.map((item, key) => (
        <li key={key}>
          <input
            value={item}
            onChange={e => handleEdit(key, e.target.value)}
            style={{ width: 150 }}
          />
          <button onClick={() => handleDelete(key)}>X</button>
        </li>
      ))}

      <input
        value={inputValue}
        onChange={handleChange}
        style={{ width: 180 }}
      />

      <p>
        <button onClick={handelAdd}>Add Item</button>
      </p>
    </div>
  );
};

export default Form;
