import { useState } from "react";
import { useFirebase } from "../context/Firebase";

const Login = () => {
  const firebase = useFirebase();
  const [userCredential, setUserCredential] = useState({});

  const handleChange = (e) => {
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await firebase.signinUserWithEmailAndPassword(
      userCredential.email,
      userCredential.password,
    );
    console.log(response);
  };

  const handleSignInWithGoogle = async () => {
    // e.preventDefault();
    const response = await firebase.signinWithGoogle();
    console.log(response);
  };

  return (
    <div className=" h-screen w-full flex items-center justify-center flex-col gap-2">
      <form className="flex flex-col border rounded-sm w-95 text-white p-3">
        <h1 className="text-center text-2xl">LogIn</h1>
        <div className="justify-center">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded-sm py-1 px-2 bg-transparent m-2 ml-0 outline-none "
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
              type="password"
              name="password"
              placeholder="enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center gap-2 mt-5">
            <button
              type="submit"
              className="bg-blue-800 py-2 px-4 w-auto rounded-md cursor-pointer active:scale-95 hover:bg-blue-700 transition-colors"
              onClick={handleSubmit}
            >
              SignIn
            </button>
          </div>
        </div>
      </form>
      <button
        type="submit"
        className="bg-blue-800 py-2 px-4 w-auto rounded-md cursor-pointer active:scale-95 hover:bg-blue-700 transition-colors"
        onClick={handleSignInWithGoogle}
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
