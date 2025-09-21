// import React from "react";
// import { motion } from "framer-motion";
// import { Star, Camera, Award, Globe } from "lucide-react";

// const steps = [
//   {
//     icon: <Star className="w-6 h-6 text-primary" />,
//     title: "Discovery & Training",
//     description:
//       "Every journey begins with passion. We discover fresh talent and nurture their confidence through structured training.",
//   },
//   {
//     icon: <Camera className="w-6 h-6 text-primary" />,
//     title: "Portfolio Creation",
//     description:
//       "From grooming to professional shoots, we help talent create portfolios that open doors to opportunities.",
//   },
//   {
//     icon: <Award className="w-6 h-6 text-primary" />,
//     title: "Showcasing Talent",
//     description:
//       "Our models shine in auditions, fashion shows, and campaigns with our constant guidance and mentoring.",
//   },
//   {
//     icon: <Globe className="w-6 h-6 text-primary" />,
//     title: "Global Opportunities",
//     description:
//       "With the right exposure and network, we connect talent to brands, agencies, and projects worldwide.",
//   },
// ];

// const TalentJourney = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4">The Talent Journey</h2>
//         <p className="text-lg text-gray-600">
//           From discovery to global recognition — we shape dreams into reality, 
//           guiding every step of your modeling journey.
//         </p>
//       </div>

//       <div className="relative border-l-2 border-primary max-w-4xl mx-auto">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="mb-12 ml-6"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center justify-center w-12 h-12 bg-white border-2 border-primary rounded-full shadow-md">
//                 {step.icon}
//               </div>
//               <h3 className="text-xl font-semibold">{step.title}</h3>
//             </div>
//             <p className="mt-2 text-gray-700 max-w-md">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TalentJourney;


import React from "react";
import { motion } from "framer-motion";
import { Star, Camera, Award, Globe, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    title: "Discovery & Training",
    description:
      "Every journey begins with passion. We discover fresh talent and nurture their confidence through structured training and grooming.",
  },
  {
    icon: <Camera className="w-6 h-6 text-pink-400" />,
    title: "Portfolio Creation",
    description:
      "From styling to professional photoshoots, we help create portfolios that become the gateway to auditions and casting calls.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-400" />,
    title: "Mentorship & Networking",
    description:
      "Our mentors guide talents with real-world insights while helping them build strong industry connections.",
  },
  {
    icon: <Award className="w-6 h-6 text-purple-400" />,
    title: "Showcasing Talent",
    description:
      "From fashion shows to brand campaigns, our models shine with confidence and style on every platform.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    title: "Career Growth",
    description:
      "We focus on sustainable career development, preparing talents for long-term success in modeling and beyond.",
  },
  {
    icon: <Globe className="w-6 h-6 text-red-400" />,
    title: "Global Opportunities",
    description:
      "With the right exposure and partnerships, we connect talent to agencies, brands, and projects worldwide.",
  },
];

const TalentJourney = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-black text-white">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif lg:text-5xl  mb-6">
          The Talent Journey
        </h2>
        <p className="text-lg text-gray-300">
          From discovery to global recognition — we shape dreams into reality, 
          guiding every step of your modeling journey with mentorship, exposure, 
          and career-building opportunities.
        </p>
      </div>

      {/* Stepper */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start mb-12 relative"
          >
            {/* Step Icon */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border-2 border-gray-700 shadow-lg z-10">
                {step.icon}
              </div>
            </div>

            {/* Step Content */}
            <div className="ml-8">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-400 max-w-md">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TalentJourney;
