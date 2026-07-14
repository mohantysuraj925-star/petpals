import { motion } from "framer-motion";
import { TreePine, Droplets, Globe } from "lucide-react";

const missions = [
  {
    icon: <TreePine className="text-green-600" size={45} />,
    title: "Tree Plantation",
    description:
      "Planting more trees helps reduce pollution, improve air quality and create a greener environment.",
  },
  {
    icon: <Droplets className="text-blue-600" size={45} />,
    title: "Save Water",
    description:
      "Conserving water today helps protect natural resources and supports future generations.",
  },
  {
    icon: <Globe className="text-green-700" size={45} />,
    title: "Protect Earth",
    description:
      "Together we can reduce pollution and make our planet cleaner, healthier and sustainable.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen bg-gray-50 px-6 py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-green-700">
            Our Mission
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to protect nature by planting trees, saving water
            and creating awareness for a greener tomorrow.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {missions.map((mission, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center"
            >

              <div className="flex justify-center">
                {mission.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {mission.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {mission.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
