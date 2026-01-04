import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Have questions or need help? Reach out to HomeHero — we’re always
            ready to assist you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Get in Touch
            </h3>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-pink-500 text-xl" />
              <p className="text-gray-600 dark:text-gray-300">
                +880 1234 567 890
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-500 text-xl" />
              <p className="text-gray-600 dark:text-gray-300">
                support@homehero.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-500 text-xl" />
              <p className="text-gray-600 dark:text-gray-300">
                Dhaka, Bangladesh
              </p>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our support team is available 7 days a week to help you book
              services or resolve issues.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;