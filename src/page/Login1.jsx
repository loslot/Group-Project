import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { useUser } from "../Context/UserContext";
import { useNavigate } from "react-router";

export default function Login1() {
  const { login, signup } = useUser();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Sign Up logic
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }

      const result = signup(name, email, password);
      if (result.success) {
        toast.success(`Welcome ${name}! Your account has been created successfully.`);
        navigate("/my-account");
      } else {
        toast.error(result.error);
      }
    } else {
      // Sign In logic
      const result = login(email, password);
      if (result.success) {
        toast.success("Login successful! Welcome back.");
        navigate("/");
      } else {
        toast.error(result.error);
      }
    }
  };

  // ── Animation variants ────────────────────────────────────────
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeInOut" } },
    exit: (dir) => ({
      x: dir < 0 ? 400 : -400,
      opacity: 0,
      transition: { duration: 0.35 },
    }),
  };

  const toggleVariants = {
    inactive: { scale: 1, backgroundColor: "transparent" },
    active: {
      scale: 1.05,
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  const buttonHover = {
    scale: 1.03,
    boxShadow: "0 12px 24px rgba(79,70,229,0.4)",
    transition: { type: "spring", stiffness: 300 },
  };

  const eyeVariants = {
    hidden: { rotate: 0 },
    visible: { rotate: showPassword ? 180 : -180, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 animate-gradient-xy">
      {/* Animated BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient-xy opacity-80 -z-10" />

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <motion.div
          className="relative bg-white/95 backdrop-blur-3xl rounded-3xl shadow-2xl p-8 border border-white/40 overflow-hidden"
          variants={itemVariants}
        >
          {/* Toggle Pills */}
          <motion.div
            className="flex mb-9 bg-gray-50 p-1.5 rounded-2xl shadow-inner"
            layout
          >
            {["Sign In", "Sign Up"].map((mode) => {
              const active = (isSignUp ? mode === "Sign Up" : mode === "Sign In");
              return (
                <motion.button
                  key={mode}
                  onClick={() => setIsSignUp(mode === "Sign Up")}
                  className={`relative flex-1 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    active ? "text-indigo-600" : "text-gray-600"
                  }`}
                  variants={toggleVariants}
                  animate={active ? "active" : "inactive"}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {mode}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Sliding Form */}
          <AnimatePresence mode="wait" custom={isSignUp ? 1 : -1}>
            <motion.form
              key={isSignUp ? "signup" : "signin"}
              custom={isSignUp ? 1 : -1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name (Sign Up) */}
              {isSignUp && (
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none shadow-sm"
                    placeholder="John Doe"
                  />
                </motion.div>
              )}

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                  placeholder="you@example.com"
                />
              </motion.div>

              {/* Password */}
              <motion.div variants={itemVariants}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none shadow-sm"
                    placeholder="••••••••"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-indigo-600 transition"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div variants={eyeVariants} animate="visible">
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Confirm Password (Sign Up) */}
              {isSignUp && (
                <motion.div variants={itemVariants}>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative mt-1">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="block w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none shadow-sm"
                      placeholder="••••••••"
                    />
                    <motion.button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-indigo-600 transition"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div variants={eyeVariants} animate="visible">
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Submit */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold tracking-wider shadow-lg overflow-hidden"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">
                    {isSignUp ? "Create Account" : "Sign In"}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.button>
              </motion.div>
            </motion.form>
          </AnimatePresence>

          {/* Footer */}
          <motion.p
            variants={itemVariants}
            className="mt-7 text-center text-sm text-gray-600"
          >
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
            <motion.button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-medium text-indigo-600 hover:text-indigo-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </motion.button>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}