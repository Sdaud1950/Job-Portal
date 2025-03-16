import React, { useState } from "react";
import HOC from "../Component/HOC";
import { useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


const Register = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [visipass, setvisipass] = useState(false)

  const [error, seterror] = useState("")

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.pass) {
      alert("Please Add all the details")
    } else {
      alert("Registration successful! Redirecting to Login...");
      navigate("/login");
    }


    // ✅ Save user data
    localStorage.setItem("registeredUser", JSON.stringify(user));

    // ✅ Set a timeout to remove user data after 1 hour
    setTimeout(() => {
      localStorage.removeItem("registeredUser");
      console.log("User data removed after 1 hour.");
    }, 60 * 60 * 1000); // 1 hour in milliseconds

    // alert("Registration successful! Redirecting to Login...");
    // navigate("/login");
  };

  return (
    <div className="flex justify-center items-center  bg-gradient-to-r">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Register
        </h2>

        {error ? <p className="text-red-400">{error}</p> : ""}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              placeholder="Enter your name"
              onChange={(e) => setuser({ ...user, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              placeholder="Enter your email"
              onChange={(e) => setuser({ ...user, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <label className="block text-gray-700 font-semibold mb-1" htmlFor="pass">
            Password:
          </label>
          <div >
            <input
              type={visipass ? "text" : "password"}
              id="pass"
              value={user.pass}
              placeholder="Enter your password"
              onChange={(e) => setuser({ ...user, pass: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute m-2 py-2 cursor-pointer right-151" onClick={() => setvisipass(!visipass)} type="button" >{visipass ? <FaEye />
              : <FaEyeSlash />
            }</button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Submit
            </button>
          </div>


          <p className="text-gray-600 ml-10 font-bold">
            Do you have Account ? {" "}
            <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login ')}>
              Login
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default HOC(Register);
