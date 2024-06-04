"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FormValues {
  name: string;
  username: string;
  email: string;
  password: string;
}



const AuthComponent = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/signup", formValues);

      if (res.data.user) {
        toast.success("User signed up successfully");
        setIsSignUp(false);
        localStorage.setItem("token", JSON.stringify(res.data.user.id));
      } else {
        throw new Error(res.data.error);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const { username, password } = formValues;
      const res = await axios.post("/api/user/signin", { username, password });

      if (res.data.user) {
        toast.success("User signed in successfully");
        localStorage.setItem("token", JSON.stringify(res.data.user.id));
        router.push(`/user/${res.data.user.id}`);
      } else {
        throw new Error(res.data.error);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp((prevState) => !prevState);
    setFormValues({ name: "", username: "", email: "", password: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <AnimatePresence mode="wait">
          {isSignUp ? (
            <motion.div
              key="signup"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Sign Up
              </h2>
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block font-semibold text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-4 text-center text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={toggleAuthMode}
                  className="text-indigo-600 hover:underline"
                >
                  Sign In
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signin"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Sign In
              </h2>
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block font-semibold text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  Sign In
                </button>
              </form>
              <p className="mt-4 text-center text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={toggleAuthMode}
                  className="text-indigo-600 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default AuthComponent;
