import { motion } from "framer-motion";
import { Star, ThumbsUp, ShieldCheck, Users } from "lucide-react";

const StaticSections = () => {
  return (
    <div className="bg-green-50 py-12">

      {/* 🟩 WHY CHOOSE US SECTION */}
      <section className="max-w-6xl mx-auto text-center mb-24 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-green-600 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-pink-500">HomeHero</span>?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
            <Star className="text-yellow-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Top-Rated Professionals</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              All our service providers are experienced and highly rated by real users.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
            <ShieldCheck className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Verified background checks to ensure safety and reliability at every step.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
            <ThumbsUp className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Transparent pricing with no hidden charges or surprise costs.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
            <Users className="text-pink-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Trusted by 10K+ Users</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Our customers love our fast, reliable, and professional service experience.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CUSTOMER TESTIMONIALS SECTION */}
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-green-600 mb-10"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://i.ibb.co.com/BKQtZhFv/images-euro.jpg"
                alt="User 1"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4 text-sm sm:text-base">
                “HomeHero made my home repairs super easy. Booking was smooth and the
                electrician came right on time!”
              </p>
              <h4 className="font-semibold text-gray-800">– Jannat Islam</h4>
              <p className="text-yellow-500 mt-1">★★★★★</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://i.ibb.co.com/Dgsmn54n/Whats-App-Image-2024-02-01-at-07-25-08-0e553709.jpg"
                alt="User 2"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4 text-sm sm:text-base">
                “Very professional cleaning team. My house looks spotless! Highly
                recommend their service.”
              </p>
              <h4 className="font-semibold text-gray-800">– Parvez Ahmed</h4>
              <p className="text-yellow-500 mt-1">★★★★★</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://i.ibb.co.com/k2NFQnMH/Whats-App-Image-2024-11-24-at-06-48-29-405d3764.jpg"
                alt="User 3"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4 text-sm sm:text-base">
                “Super fast AC repair! I’m impressed with their timing and affordable
                pricing.”
              </p>
              <h4 className="font-semibold text-gray-800">– Mehedi Hasan</h4>
              <p className="text-yellow-500 mt-1">★★★★★</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StaticSections;
