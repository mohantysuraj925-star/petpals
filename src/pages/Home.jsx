import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-100 flex items-center px-6 pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
            <Leaf size={18} />
            Green Earth Initiative
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Save Trees,
            <br />
            <span className="text-green-600">
              Save Earth
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Plant Trees Today, Save Tomorrow. Join our mission to protect
            nature, conserve water and build a greener future for everyone.
          </p>

          <div className="mt-12 flex gap-4">

            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-full border-2 border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white transition">
              Learn More
            </button>

          </div>

        </motion.div>


        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute -inset-5 bg-green-200 rounded-[50px] blur-2xl opacity-40"></div>

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              alt="Green Nature"
              className="relative rounded-[40px] shadow-2xl w-full max-w-xl h-[560px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}
