import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function UserMenu() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowDropdown(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setShowDropdown(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowDropdown(false);
  };

  return (
    <li className="ml-2 lg:ml-4 relative inline-block">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="focus:outline-none"
      >
        <svg
          className="h-9 lg:h-10 p-2 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
        >
          <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144z" />
        </svg>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-50 p-4">
          {user ? (
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Orders
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Cart
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          ) : (
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded"
              />
              <button
                onClick={handleLogin}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
              <button
                onClick={handleRegister}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </li>
  );
}
