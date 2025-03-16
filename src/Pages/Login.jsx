import React, { useState } from "react";
import HOC from "../Component/HOC";
import { useNavigate } from "react-router";

const Login = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const HandelSubmit = (e) => {
    e.preventDefault();

    let Setoredata = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      Setoredata &&
      Setoredata.name === credentials.name &&
      Setoredata.email === credentials.email &&
      Setoredata.pass === credentials.pass
    ) {
      alert("Login Sucess your are redictextig to Homepages!!");
      navigate("/");
    } else {
      alert("Login wrong");
    }

    if (!credentials.email || !credentials.pass) {
      seterror("Please add tge deatils ");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 ml-45">Login</h2>
      {error ? <p className="text-red-500">{error}</p> : ""}
      <form onSubmit={HandelSubmit} className="space-y-4">
        <label htmlFor="">Name:</label>
        <input
          className="w-full p-2 border rounded"
          type="text"
          value={credentials.name}
          onChange={(e) =>
            setCredentials({ ...credentials, name: e.target.value })
          }
        />
        <label htmlFor="">Email:</label>
        <input
          className="w-full p-2 border rounded"
          type="text"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <label htmlFor="">Pass:</label>
        <input
          className="w-full p-2 border rounded"
          type="password"
          value={credentials.pass}
          onChange={(e) =>
            setCredentials({ ...credentials, pass: e.target.value })
          }
        />
        <button
          className="w-full h-12 cursor-pointer bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition duration-300"
          type="Submit"
        >
          Submit
        </button>
        <p className="ml-25 font-bold">
          Dont have Account ?{" "}
          <span
            className="cursor-pointer text-blue-500"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default HOC(Login);
