import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-6"
    >
      <div className="text-center max-w-4xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-blue-700"
        >
          Hello,
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-3xl md:text-6xl font-bold text-gray-900"
        >
          I'm Suraj Kumar Mohanty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-600 text-lg"
        >
          React • Tailwind CSS • Frontend Developer
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Explore
        </motion.button>

      </div>
    </section>
  );
}
