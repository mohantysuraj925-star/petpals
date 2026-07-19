import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Trees,
  Droplets,
  Earth,
  ArrowLeft,
  ArrowUp,
  Recycle,
  HeartHandshake,
  ShieldCheck,
  TreePine,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export default function LearnMore() {

  const [openFAQ, setOpenFAQ] = useState(null);

  const sections = [
    {
      icon: Trees,
      title: "Protect Trees",
      text: "Trees give us oxygen, protect wildlife and maintain balance in our environment."
    },
    {
      icon: Droplets,
      title: "Save Water",
      text: "Every drop matters. Saving water today creates a better future tomorrow."
    },
    {
      icon: Recycle,
      title: "Reduce Pollution",
      text: "Recycling waste and reducing pollution helps keep our planet clean."
    }
  ];  const facts = [
    {
      icon: "🌳",
      number: "10K+",
      title: "Trees Planted"
    },
    {
      icon: "🤝",
      number: "500+",
      title: "Volunteers"
    },
    {
      icon: "🌱",
      number: "100+",
      title: "Campaigns"
    },
    {
      icon: "🌍",
      number: "50+",
      title: "Clean Areas"
    }
  ];


  const ecoTips = [
    "Use reusable bags and avoid single-use plastic.",
    "Save electricity by turning off unused lights.",
    "Plant more trees and protect green spaces.",
    "Save water and avoid unnecessary wastage.",
    "Recycle waste whenever possible."
  ];


  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900",
      title: "Green Forest"
    },
    {
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
      title: "Beautiful Nature"
    },
    {
      image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?w=900",
      title: "Fresh Environment"
    }
  ];  const timeline = [
    {
      year: "01",
      title: "Awareness",
      text: "Spreading knowledge about protecting nature and saving resources."
    },
    {
      year: "02",
      title: "Action",
      text: "Encouraging people to plant trees and follow eco-friendly habits."
    },
    {
      year: "03",
      title: "Change",
      text: "Creating a cleaner and greener future together."
    }
  ];


  const faqs = [
    {
      question: "Why are trees important?",
      answer: "Trees provide oxygen, support wildlife and help maintain environmental balance."
    },
    {
      question: "How can we save water?",
      answer: "We can save water by avoiding wastage and using resources responsibly."
    },
    {
      question: "How can we reduce pollution?",
      answer: "Using less plastic, recycling and keeping surroundings clean helps reduce pollution."
    }
  ];


  return (

    <section
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-28"
    >

      <div className="max-w-7xl mx-auto">        <Link to="/">
          <button className="mb-10 flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition">

            <ArrowLeft size={20}/>

            Back to Home

          </button>
        </Link>


        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

            <Leaf size={18}/>

            About Green Earth

          </div>


          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-gray-900">

            Together We Can Make

            <span className="text-green-600">
              {" "}Earth Greener
            </span>

          </h1>


          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">

            Green Earth inspires people to protect nature,
            save resources and create a cleaner and healthier planet.

          </p>

        </motion.div>        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {sections.map((item,index)=>{

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{
                  duration:0.5,
                  delay:index*0.15
                }}
                viewport={{once:true}}
                className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-3 transition-all"
              >

                <Icon
                  size={45}
                  className="text-green-600"
                />


                <h2 className="mt-6 text-2xl font-bold text-gray-900">

                  {item.title}

                </h2>


                <p className="mt-4 text-gray-600 leading-7">

                  {item.text}

                </p>


              </motion.div>

            )

          })}

        </div>        <div className="mt-20">

          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Our Environmental Impact
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Together we are making a greener future.
          </p>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            {facts.map((item,index)=>(

              <motion.div
                key={index}
                initial={{opacity:0,scale:0.8}}
                whileInView={{opacity:1,scale:1}}
                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}
                viewport={{once:true}}
                className="bg-white rounded-3xl shadow-lg p-6 text-center"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>


                <h3 className="mt-4 text-3xl font-extrabold text-green-600">
                  {item.number}
                </h3>


                <p className="mt-2 text-gray-600">
                  {item.title}
                </p>


              </motion.div>

            ))}

          </div>

        </div>        <div className="mt-20">

          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Daily Eco Tips
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Small habits can create a big positive impact on our planet.
          </p>


          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {ecoTips.map((tip,index)=>(

              <motion.div
                key={index}
                initial={{opacity:0,x:-30}}
                whileInView={{opacity:1,x:0}}
                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}
                viewport={{once:true}}
                className="flex items-center gap-4 bg-green-50 rounded-2xl p-6 shadow-sm"
              >

                <div className="text-3xl">
                  🌱
                </div>


                <p className="text-gray-700 font-medium">
                  {tip}
                </p>


              </motion.div>

            ))}

          </div>

        </div>        <div className="mt-20">

          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Nature Gallery
          </h2>


          <p className="mt-4 text-center text-gray-600">
            Beautiful nature reminds us why we should protect our planet.
          </p>


          <div className="grid md:grid-cols-3 gap-8 mt-12">


            {gallery.map((item,index)=>(

              <motion.div
                key={index}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}
                viewport={{once:true}}
                className="overflow-hidden rounded-3xl shadow-xl bg-white group"
              >


                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>


                <h3 className="p-6 text-xl font-bold text-gray-900">

                  {item.title}

                </h3>


              </motion.div>

            ))}


          </div>


        </div>        <div className="mt-20">

          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Our Mission Journey
          </h2>


          <p className="mt-4 text-center text-gray-600">
            Every step brings us closer to a greener Earth.
          </p>


          <div className="mt-12 max-w-4xl mx-auto space-y-6">


            {timeline.map((item,index)=>(

              <motion.div
                key={index}
                initial={{
                  opacity:0,
                  x:index % 2 === 0 ? -40 : 40
                }}
                whileInView={{
                  opacity:1,
                  x:0
                }}
                transition={{
                  duration:0.5
                }}
                viewport={{once:true}}
                className="bg-white rounded-3xl shadow-lg p-8 flex gap-6 items-start"
              >


                <div className="text-3xl font-extrabold text-green-600">

                  {item.year}

                </div>


                <div>

                  <h3 className="text-2xl font-bold text-gray-900">

                    {item.title}

                  </h3>


                  <p className="mt-3 text-gray-600 leading-7">

                    {item.text}

                  </p>


                </div>


              </motion.div>

            ))}


          </div>


        </div>        <div className="mt-20">

          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Frequently Asked Questions
          </h2>


          <div className="mt-12 max-w-4xl mx-auto space-y-6">


            {faqs.map((item,index)=>(

              <motion.div
                key={index}
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}
                viewport={{once:true}}
                className="bg-white rounded-3xl shadow-lg p-6"
              >


                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >

                  <h3 className="text-xl font-bold text-green-700">
                    {item.question}
                  </h3>


                  <ChevronDown
                    size={24}
                    className={`transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />

                </button>


                {openFAQ === index && (

                  <p className="mt-4 text-gray-600 leading-7">

                    {item.answer}

                  </p>

                )}


              </motion.div>

            ))}


          </div>


        </div>        <motion.div
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="mt-20 bg-green-600 text-white rounded-3xl p-10 text-center"
        >

          <h2 className="text-3xl md:text-4xl font-bold">

            "The Earth is our home. Protecting it is our responsibility."

          </h2>


          <p className="mt-4 text-green-100">

            Small actions today can create a greener tomorrow.

          </p>


        </motion.div>        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="mt-20 bg-gradient-to-r from-green-700 to-green-500 text-white rounded-3xl p-12 text-center"
        >

          <div className="flex justify-center mb-6">

            <HeartHandshake size={60}/>

          </div>


          <h2 className="text-4xl md:text-5xl font-extrabold">

            Together We Can Save Earth

          </h2>


          <p className="mt-5 max-w-3xl mx-auto text-green-100 text-lg leading-8">

            Every tree planted, every drop of water saved,
            and every eco-friendly choice helps create a cleaner
            and healthier future for our planet.

          </p>


        </motion.div>        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <motion.div
            whileHover={{y:-8}}
            className="bg-white rounded-3xl shadow-lg p-8 text-center"
          >

            <TreePine
              size={45}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Plant More Trees
            </h3>

            <p className="mt-3 text-gray-600">
              Trees help clean air, protect nature and support life.
            </p>

          </motion.div>


          <motion.div
            whileHover={{y:-8}}
            className="bg-white rounded-3xl shadow-lg p-8 text-center"
          >

            <ShieldCheck
              size={45}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Protect Nature
            </h3>

            <p className="mt-3 text-gray-600">
              Responsible actions today create a safer tomorrow.
            </p>

          </motion.div>


          <motion.div
            whileHover={{y:-8}}
            className="bg-white rounded-3xl shadow-lg p-8 text-center"
          >

            <HeartHandshake
              size={45}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Work Together
            </h3>

            <p className="mt-3 text-gray-600">
              Together we can build a greener and healthier Earth.
            </p>

          </motion.div>

        </div>        <div className="mt-20">

          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Our Green Promise
          </h2>


          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            We believe small environmental choices can create a powerful
            positive change for future generations.
          </p>


          <div className="mt-12 bg-white rounded-3xl shadow-xl p-10">

            <div className="grid md:grid-cols-2 gap-8">


              <div className="flex gap-5 items-start">

                <div className="bg-green-100 p-4 rounded-full">

                  <Leaf
                    size={32}
                    className="text-green-600"
                  />

                </div>


                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Eco Friendly Living
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Choosing sustainable habits helps protect natural resources
                    and keeps the environment healthy.
                  </p>

                </div>

              </div>



              <div className="flex gap-5 items-start">

                <div className="bg-green-100 p-4 rounded-full">

                  <Earth
                    size={32}
                    className="text-green-600"
                  />

                </div>


                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Future For Everyone
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    A greener planet means a healthier and safer future
                    for all living beings.
                  </p>

                </div>

              </div>


            </div>

          </div>

        </div>        <div className="mt-20">

          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            How You Can Help
          </h2>


          <p className="mt-4 text-center text-gray-600">
            Everyone can contribute towards protecting our planet.
          </p>


          <div className="grid md:grid-cols-4 gap-6 mt-12">


            {[
              {
                icon:"🌱",
                title:"Plant Trees",
                text:"Grow more trees and increase green spaces."
              },
              {
                icon:"💧",
                title:"Save Water",
                text:"Use water wisely and avoid wastage."
              },
              {
                icon:"♻️",
                title:"Recycle",
                text:"Reuse materials and reduce waste."
              },
              {
                icon:"🌍",
                title:"Spread Awareness",
                text:"Inspire others to protect Earth."
              }
            ].map((item,index)=>(

              <motion.div
                key={index}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}
                viewport={{once:true}}
                className="bg-green-50 rounded-3xl p-7 text-center hover:shadow-xl transition"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>


                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>


                <p className="mt-3 text-gray-600">
                  {item.text}
                </p>


              </motion.div>

            ))}


          </div>

        </div>        <div className="mt-20">

          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Environmental Protection Rules
          </h2>


          <div className="mt-12 grid md:grid-cols-3 gap-8">


            <motion.div
              whileHover={{scale:1.03}}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <h3 className="text-2xl font-bold text-green-700">
                Protect Wildlife
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Animals and plants are connected with our ecosystem.
                Protecting nature means protecting life.
              </p>

            </motion.div>



            <motion.div
              whileHover={{scale:1.03}}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <h3 className="text-2xl font-bold text-green-700">
                Reduce Plastic
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Reducing plastic usage helps keep oceans,
                rivers and land cleaner.
              </p>

            </motion.div>



            <motion.div
              whileHover={{scale:1.03}}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <h3 className="text-2xl font-bold text-green-700">
                Keep Earth Clean
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Clean surroundings create a healthier environment
                for everyone.
              </p>

            </motion.div>


          </div>

        </div>        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          viewport={{once:true}}
          className="mt-20 bg-gradient-to-br from-green-100 to-white rounded-3xl p-10 md:p-14"
        >

          <div className="grid md:grid-cols-2 gap-10 items-center">


            <div>

              <h2 className="text-4xl font-extrabold text-gray-900">

                A Small Step Today,
                <span className="text-green-600">
                  {" "}A Better Earth Tomorrow
                </span>

              </h2>


              <p className="mt-5 text-gray-600 leading-8">

                Every positive action matters.
                By caring for nature, saving resources and
                spreading awareness, we can create a sustainable future.

              </p>


              <div className="mt-8 flex items-center gap-3 text-green-700 font-semibold">

                <Leaf size={28}/>

                Protect • Preserve • Restore

              </div>


            </div>


            <div className="flex justify-center">

              <div className="text-8xl">
                🌎
              </div>

            </div>


          </div>


        </motion.div>        <motion.div
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="mt-20 bg-green-600 text-white rounded-3xl p-12 text-center"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold">

            Ready To Make A Difference?

          </h2>


          <p className="mt-5 max-w-3xl mx-auto text-green-100 text-lg leading-8">

            Join millions of people who believe that protecting
            nature today will create a better tomorrow.

          </p>


          <Link to="/">

            <button
              className="mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
            >

              Return Home

            </button>

          </Link>


        </motion.div>        <div className="mt-16 flex justify-center">

          <button
            onClick={() =>
              window.scrollTo({
                top:0,
                behavior:"smooth"
              })
            }
            className="flex items-center gap-2 bg-green-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
          >

            <ArrowUp size={20}/>

            Back To Top

          </button>

        </div>      </div>

    </section>

  );

}
