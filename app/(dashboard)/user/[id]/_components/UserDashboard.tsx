"use client";
import React from "react";
import { motion } from "framer-motion";

interface User {
  username: string;
  name: string;
  email: string;
}

interface UserDashboardProps {
  user: User;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user }) => {
  const { username, name, email } = user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome, {name}!
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 w-24">Username:</span>
            <span className="text-gray-600">{username}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 w-24">Name:</span>
            <span className="text-gray-600">{name}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 w-24">Email:</span>
            <span className="text-gray-600">{email}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserDashboard;