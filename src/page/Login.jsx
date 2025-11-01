// // import React, { useState } from 'react';
// // import { Link } from 'react-router';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Basic validation
// //     if (!email || !password) {
// //       setError('Please fill in all fields');
// //       return;
// //     }
// //     // Here you would typically handle login logic, e.g., API call
// //     console.log('Login attempt:', { email, password });
// //     setError('');
// //     // Redirect or handle success
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8">
// //         <div>
// //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //             Sign in to your account
// //           </h2>
// //           <p className="mt-2 text-center text-sm text-gray-600">
// //             Or{' '}
// //             <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
// //               create a new account
// //             </Link>
// //           </p>
// //         </div>
// //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //           {error && (
// //             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
// //               <span className="block sm:inline">{error}</span>
// //             </div>
// //           )}
// //           <div className="rounded-md shadow-sm -space-y-px">
// //             <div>
// //               <label htmlFor="email" className="sr-only">
// //                 Email address
// //               </label>
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 autoComplete="email"
// //                 required
// //                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// //                 placeholder="Email address"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="password" className="sr-only">
// //                 Password
// //               </label>
// //               <input
// //                 id="password"
// //                 name="password"
// //                 type="password"
// //                 autoComplete="current-password"
// //                 required
// //                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //             </div>
// //           </div>

// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center">
// //               <input
// //                 id="remember-me"
// //                 name="remember-me"
// //                 type="checkbox"
// //                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
// //                 Remember me
// //               </label>
// //             </div>

// //             <div className="text-sm">
// //               <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
// //                 Forgot your password?
// //               </a>
// //             </div>
// //           </div>

// //           <div>
// //             <button
// //               type="submit"
// //               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //             >
// //               Sign in
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";

// export default function AuthForm() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // Form state
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isSignUp) {
//       console.log("Sign Up:", { name, email, password, confirmPassword });
//     } else {
//       console.log("Sign In:", { email, password });
//     }
//   };

//   // ── Animation variants ────────────────────────────────────────
//   const cardVariants = {
//     hidden: { opacity: 0, y: 60, scale: 0.92 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.34, 1.56, 0.64, 1],
//         staggerChildren: 0.12,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -40 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const slideVariants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? 400 : -400,
//       opacity: 0,
//     }),
//     center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeInOut" } },
//     exit: (dir: number) => ({
//       x: dir < 0 ? 400 : -400,
//       opacity: 0,
//       transition: { duration: 0.35 },
//     }),
//   };

//   const toggleVariants = {
//     inactive: { scale: 1, backgroundColor: "transparent" },
//     active: {
//       scale: 1.05,
//       backgroundColor: "#ffffff",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       transition: { type: "spring", stiffness: 400, damping: 25 },
//     },
//   };

//   const buttonHover = {
//     scale: 1.03,
//     boxShadow: "0 12px 24px rgba(79,70,229,0.3)",
//     transition: { type: "spring", stiffness: 300 },
//   };

//   const eyeVariants = {
//     hidden: { rotate: 0 },
//     visible: { rotate: showPassword ? 180 : -180, transition: { duration: 0.3 } },
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden bg-gradient-animate">
//       {/* Animated BG */}
//       <div className="absolute inset-0 bg-gradient-animate animate-pulse -z-10" />

//       <motion.div
//         variants={cardVariants}
//         initial="hidden"
//         animate="visible"
//         className="w-full max-w-md"
//       >
//         <motion.div
//           className="relative bg-white/96 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/30 overflow-hidden"
//           variants={itemVariants}
//         >
//           {/* Toggle Pills */}
//           <motion.div
//             className="flex mb-9 bg-gray-100 p-1.5 rounded-2xl"
//             layout
//           >
//             {["Sign In", "Sign Up"].map((mode) => {
//               const active = (isSignUp ? mode === "Sign Up" : mode === "Sign In");
//               return (
//                 <motion.button
//                   key={mode}
//                   onClick={() => setIsSignUp(mode === "Sign Up")}
//                   className={`relative flex-1 py-3 rounded-xl font-semibold text-sm transition-colors ${
//                     active ? "text-indigo-600" : "text-gray-600"
//                   }`}
//                   variants={toggleVariants}
//                   animate={active ? "active" : "inactive"}
//                   whileHover={{ scale: 1.06 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   {mode}
//                 </motion.button>
//               );
//             })}
//           </motion.div>

//           {/* Sliding Form */}
//           <AnimatePresence mode="wait" custom={isSignUp ? 1 : -1}>
//             <motion.form
//               key={isSignUp ? "signup" : "signin"}
//               custom={isSignUp ? 1 : -1}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               onSubmit={handleSubmit}
//               className="space-y-5"
//             >
//               {/* Name (Sign Up) */}
//               {isSignUp && (
//                 <motion.div variants={itemVariants}>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                     Full Name
//                   </label>
//                   <motion.input
//                     whileFocus={{ scale: 1.02 }}
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
//                     placeholder="John Doe"
//                   />
//                 </motion.div>
//               )}

//               {/* Email */}
//               <motion.div variants={itemVariants}>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <motion.input
//                   whileFocus={{ scale: 1.02 }}
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
//                   placeholder="you@example.com"
//                 />
//               </motion.div>

//               {/* Password */}
//               <motion.div variants={itemVariants}>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <div className="relative mt-1">
//                   <motion.input
//                     whileFocus={{ scale: 1.02 }}
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="block w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
//                     placeholder="••••••••"
//                   />
//                   <motion.button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-indigo-600 transition"
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <motion.div variants={eyeVariants} animate="visible">
//                       {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                     </motion.div>
//                   </motion.button>
//                 </div>
//               </motion.div>

//               {/* Confirm Password (Sign Up) */}
//               {isSignUp && (
//                 <motion.div variants={itemVariants}>
//                   <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                     Confirm Password
//                   </label>
//                   <div className="relative mt-1">
//                     <motion.input
//                       whileFocus={{ scale: 1.02 }}
//                       type={showConfirmPassword ? "text" : "password"}
//                       id="confirmPassword"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       required
//                       className="block w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
//                       placeholder="••••••••"
//                     />
//                     <motion.button
//                       type="button"
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-indigo-600 transition"
//                       whileHover={{ scale: 1.2 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <motion.div variants={eyeVariants} animate="visible">
//                         {showConfirmPassword ? (
//                           <EyeOff className="h-5 w-5" />
//                         ) : (
//                           <Eye className="h-5 w-5" />
//                         )}
//                       </motion.div>
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               )}

//               {/* Submit */}
//               <motion.div variants={itemVariants}>
//                 <motion.button
//                   type="submit"
//                   className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold tracking-wider shadow-lg overflow-hidden"
//                   whileHover={buttonHover}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <span className="relative z-10">
//                     {isSignUp ? "Create Account" : "Sign In"}
//                   </span>
//                   <motion.div
//                     className="absolute inset-0 bg-white/20"
//                     initial={{ x: "-100%" }}
//                     whileHover={{ x: "100%" }}
//                     transition={{ duration: 0.6, ease: "easeInOut" }}
//                   />
//                 </motion.button>
//               </motion.div>
//             </motion.form>
//           </AnimatePresence>

//           {/* Footer */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-7 text-center text-sm text-gray-600"
//           >
//             {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
//             <motion.button
//               onClick={() => setIsSignUp(!isSignUp)}
//               className="font-medium text-indigo-600 hover:text-indigo-500 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {isSignUp ? "Sign In" : "Sign Up"}
//             </motion.button>
//           </motion.p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }