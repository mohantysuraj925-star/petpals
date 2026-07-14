import { motion } from "framer-motion";
import { TreePine, Droplets, Globe } from "lucide-react";

const features = [
  {
    icon: <TreePine size={42} className="text-green-600" />,
    title: "Plant More Trees",
    description:
      "Trees provide oxygen, reduce pollution and make our environment healthier.",
  },
  {
    icon: <Droplets size={42} className="text-blue-600" />,
    title: "Save Water",
    description:
      "Water is life. Every drop saved today helps build a sustainable tomorrow.",
  },
  {
    icon: <Globe size={42} className="text-green-700" />,
    title: "Protect Earth",
    description:
      "Together we can reduce pollution and create a cleaner, greener planet.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-green-700">
            Why Trees Matter
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Trees are the lungs of our planet. They clean the air, conserve water,
            support wildlife and make our future healthier.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-green-50 rounded-3xl shadow-xl p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
