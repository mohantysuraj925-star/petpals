import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaUser className="text-4xl text-blue-600" />,
    title: "Name",
    value: "Suraj Kumar Mohanty",
  },
  {
    icon: <FaEnvelope className="text-4xl text-blue-600" />,
    title: "Email",
    value: "example@email.com",
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: "Project",
    value: "Innovation Week Practice",
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl text-blue-600" />,
    title: "Location",
    value: "Odisha, India",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-50 px-6 py-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-blue-700">
            Contact Me
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Feel free to connect with me regarding this Innovation Week project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
