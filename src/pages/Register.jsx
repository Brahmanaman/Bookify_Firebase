import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

const Register = () => {
  const firebase = useFirebase();
  const [userCredential, setUserCredential] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <form className="flex flex-col border rounded-sm w-95 text-white p-3">
        <h1 className="text-center text-2xl">Register</h1>
        <div className="justify-center">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded-sm py-1 px-2 bg-transparent m-2 ml-0 outline-none "
              required
              type="email"
              name="email"
              placeholder="enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-sm py-1 px-2 bg-transparent m-2 ml-0 outline-none "
              required
              type="password"
              name="password"
              placeholder="enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center gap-2 mt-5">
            <button
              onClick={(e) => userSignUp(e)}
              type="submit"
              className="bg-blue-800 py-2 px-4 w-auto rounded-md cursor-pointer active:scale-95 hover:bg-blue-700 transition-colors"
            >
              SignUp
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
