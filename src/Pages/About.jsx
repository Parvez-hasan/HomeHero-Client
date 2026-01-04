import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 dark:bg-gray-900">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-pink-500 mb-4">
          About HomeHero
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Connecting homes with trusted local service professionals.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            What is HomeHero?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            <strong>HomeHero</strong> is a modern household service platform that
            helps users easily find, book, and manage local services such as
            electricians, plumbers, cleaners, painters, and more.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our goal is to make home maintenance stress-free by providing a
            secure, transparent, and user-friendly experience for both customers
            and service providers.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.ibb.co.com/PGcrR3kD/ru-service-provider.png"
            alt="Home Service"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          Why Choose HomeHero?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Trusted Providers",
              desc: "Verified and reliable service providers you can trust.",
            },
            {
              title: "Easy Booking",
              desc: "Book services quickly with a simple and intuitive process.",
            },
            {
              title: "Secure Platform",
              desc: "Firebase authentication and protected private routes.",
            },
            {
              title: "Modern Design",
              desc: "Clean, responsive UI for all devices.",
            },
            {
              title: "Price Transparency",
              desc: "Clear pricing with advanced price filtering.",
            },
            {
              title: "Ratings & Reviews",
              desc: "Real feedback from real customers.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-pink-500 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Our Vision
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          HomeHero aims to build a trusted digital ecosystem where customers
          confidently find quality services and service providers grow their
          businesses through transparency, technology, and trust.
        </p>
      </motion.div>
    </div>
  );
};

export default About;