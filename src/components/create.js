import React, { useState, useEffect } from "react";
import "./style.css";

function Create({ users, setUsers, isEdit, editingUser, editingID }) {
  const [input, setInput] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (isEdit) {
      setInput(editingUser);
    } else {
      setInput({
        name: "",
        age: "",
        address: "",
        phone: "",
      });
    }
    // eslint-disable-next-line
  }, [isEdit]);

  const handleSubmit = (e) => {
    if (!isEdit) {
      e.preventDefault();
      setUsers([...users, input]);
      setInput({
        name: "",
        age: "",
        address: "",
        phone: "",
      });
    } else {
      e.preventDefault();
      setUsers((prev) => {
        const clone = [...prev];
        clone[editingID] = input;
        return clone;
      });
    }
  };

  return (
    <div className="App mt-3 col-6">
      <form onSubmit={handleSubmit}>
        <div
          class="form-group"
          style={{ display: "flex", position: "relative" }}
        >
          <label for="exampleInputEmail1">Name</label>
          <input
            style={{ width: "500px", position: "absolute", right: "0" }}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={input.name}
            onChange={(e) =>
              setInput((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          ></input>
        </div>
        <div
          class="form-group"
          style={{ display: "flex", position: "relative" }}
        >
          <label for="exampleInputPassword1">Age</label>
          <input
            style={{ width: "500px", position: "absolute", right: "0" }}
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            value={input.age}
            onChange={(e) =>
              setInput((prev) => ({
                ...prev,
                age: e.target.value,
              }))
            }
          ></input>
        </div>
        <div
          class="form-group"
          style={{ display: "flex", position: "relative" }}
        >
          <label for="exampleInputPassword1">Address</label>
          <input
            style={{ width: "500px", position: "absolute", right: "0" }}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={input.address}
            onChange={(e) =>
              setInput((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
          ></input>
        </div>
        <div
          class="form-group"
          style={{ display: "flex", position: "relative" }}
        >
          <label for="exampleInputPassword1">Phones</label>
          <input
            style={{ width: "500px", position: "absolute", right: "0" }}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={input.phone}
            onChange={(e) =>
              setInput((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
}

export default Create;
