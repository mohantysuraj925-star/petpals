import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full rounded-3xl bg-white shadow-2xl p-10"
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          About Me
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          Hello, I'm Suraj Kumar Mohanty
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl bg-blue-50 p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-blue-600">Frontend</h3>
            <p className="mt-2 text-gray-600">
              Hello, I'm Suraj Kumar Mohanty
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-blue-600">React</h3>
            <p className="mt-2 text-gray-600">
              Hello, I'm Suraj Kumar Mohanty
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-blue-600">Tailwind CSS</h3>
            <p className="mt-2 text-gray-600">
              Hello, I'm Suraj Kumar Mohanty
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
