// src/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("User registered:", { email, password });
    // Redirect to login  after successful registration
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Register
        </h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded mt-4 text-base sm:text-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

// src/Register.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [name, setName] = useState(""); // Add state for user's name
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false); // Loading state for the button
//   const [error, setError] = useState(""); // Error state for handling errors
//   const navigate = useNavigate();

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       setLoading(true); // Set loading state to true when API call is made
//       setError(""); // Reset previous errors

//       const response = await axios.post(
//         "http://localhost:5000/api/auth/signup",
//         {
//           name,
//           email,
//           password,
//         }
//       );

//       // If registration is successful, navigate to login page
//       console.log("User registered:", response.data);
//       navigate("/login"); // Redirect to login page
//     } catch (error) {
//       setError(
//         error.response?.data?.message ||
//           "Registration failed. Please try again."
//       ); // Set error message
//     } finally {
//       setLoading(false); // Set loading state to false when API call finishes
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
//       <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
//           Register
//         </h1>
//         {error && (
//           <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleRegister} className="space-y-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm sm:text-base font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm sm:text-base font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm sm:text-base font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm sm:text-base font-medium text-gray-700"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full text-base sm:text-lg"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className={`w-full ${
//               loading ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"
//             } text-white py-2 rounded mt-4 text-base sm:text-lg`}
//             disabled={loading} // Disable button when loading
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
