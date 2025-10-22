import React, { useState } from "react";

export default function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for toggling map visibility
  const [showMap, setShowMap] = useState(true);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  // Toggle map visibility
  const toggleMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col mt-5">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold tracking-tight animate-fade-in-down">
            Contact Us
          </h1>
          <p className="mt-3 text-xl font-light">
            Let's connect and bring your ideas to life!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:order-2">
            <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 transform transition-all duration-500 hover:shadow-3xl">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Send a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  We're here to answer your questions. Reach out today!
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition duration-300 resize-vertical"
                    placeholder="Tell us about your project or how we can help..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 transform hover:scale-[1.03] transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:order-1 space-y-12">
            {/* Contact Information */}
            <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 transform transition-all duration-500 hover:shadow-3xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition duration-300">
                    <svg
                      className="w-7 h-7 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-600 text-lg">hello@company.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5 group">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition duration-300">
                    <svg
                      className="w-7 h-7 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Phone
                    </h3>
                    <p className="text-gray-600 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5 group">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition duration-300">
                    <svg
                      className="w-7 h-7 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Address
                    </h3>
                    <p className="text-gray-600 text-lg">
                      123 Business St
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 transform transition-all duration-500 hover:shadow-3xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Our Location
                </h3>
                <button
                  onClick={toggleMap}
                  className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  {showMap ? "Hide Map" : "Show Map"}
                </button>
              </div>
              <div
                className={`relative w-full h-96 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out ${
                  showMap ? "opacity-100 scale-100" : "opacity-0 scale-95 h-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.566014387663!2d-73.98647768459211!3d40.74844097932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b311746f%3A0xd134e199a405a163!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635782345678!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                  className="relative z-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            &copy; 2025 Your Company. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15h-2v-2h2v2zm0-4h-2V7h2v6zm-4 4h-2v-2h2v2zm0-4h-2V7h2v6zm-4 4H7v-2h2v2zm0-4H7V7h2v6z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.91 8-4.94 8-9.95z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}


