// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import programs from "../data/programs";
// import HeroSection from "./hero_new";
// import Footer1 from "./footer";
// import Navbar from "./navbar";
// import FAQSection from "./faq";

// const ProgramDetail = () => {
//   const { slug } = useParams();
//   const program = programs.find(p => p.slug === slug);
//   const [activeTab, setActiveTab] = useState("curriculum");

//   if (!program) {
//     return <div className="text-center py-20 text-gray-600">Program not found.</div>;
//   }

//   // Utility: Find label like week/month/months/days
//   const getLabel = (item) => {
//     return item.week || item.month || item.months || item.days || "Week";
//   };

//   return (

//     <>
//       <div className="relative h-[600px]">
//         <Navbar className="absolute top-0 left-0 w-full z-0" />
//         <img
//           src={program.image}
//           alt={program.title}
//           className="w-full h-full object-cover object-top z-10 relative"
//         />
//       </div>

//       <section>
//         <div className="py-10 px-6 md:px-16 lg:px-24 xl:px-32">
//           <h1 className="text-4xl font-bold mb-2">{program.title}</h1>
//           <p className="text-lg font-medium text-gray-600 mb-6">{program.duration}</p>

//           {/* Tabs */}
//           <div className="flex mb-6 border rounded-lg overflow-hidden max-w-md">
//             <button
//               className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === "overview" ? "bg-primary text-black" : "bg-gray-100 text-gray-700"}`}
//               onClick={() => setActiveTab("curriculum")}
//             >
//               Curriculum
//             </button>
//             <button
//               className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === "curriculum" ? "bg-primary text-black" : "bg-gray-100 text-gray-700"}`}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </button>
//           </div>

//           {/* Tab Content */}
//           {activeTab === "overview" && (
//             <div>
//               <p className="text-base text-gray-700 mb-6">{program.about}</p>
//               <p className="text-sm font-medium text-gray-600 bg-gray-100 inline-block px-4 py-2 rounded">{program.overview}</p>
//               {/* <p className="text-lg font-semibold mt-4">Fees: <span className="text-primary">{program.fees}</span></p> */}
//             </div>
//           )}

//           {activeTab === "curriculum" && (
//             <div className="space-y-6">
//               {program.plan.map((item, index) => (
//                 <div key={index} className="bg-gray-50 p-4 rounded-lg border">
//                   <h3 className="text-xl font-semibold text-primary mb-2">{getLabel(item)}</h3>
//                   <ul className="list-disc list-inside space-y-1 text-gray-800">
//                     {item.topics.map((topic, i) => (
//                       <li key={i}>{topic}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           )}


//         </div>
//         <FAQSection />
//       </section>
//       <Footer1 />
//     </>

//   );
// };

// export default ProgramDetail;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import programs from "../data/programs";
import HeroSection from "./hero_new";
import Footer1 from "./footer";
import Navbar from "./navbar";
import FAQSection from "./faq";

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("overview");

  if (!program) {
    return (
      <div className="text-center py-20 text-gray-600">Program not found.</div>
    );
  }

  // Utility: Find label like week/month/months/days
  const getLabel = (item) => {
    return item.week || item.month || item.months || item.days || "Week";
  };

  return (
    <>
      <div className="relative h-[600px]">
        <Navbar className="absolute top-0 left-0 w-full z-0" />
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover object-top z-10 relative"
        />
      </div>

      <section>
        <div className="py-10 px-6 md:px-16 lg:px-24 xl:px-32">
          <h1 className="text-4xl font-bold mb-2">{program.title}</h1>
          <p className="text-lg font-medium text-gray-600 mb-6">
            {program.duration}
          </p>

          {/* Tabs */}
          <div className="flex mb-6 border rounded-lg overflow-hidden max-w-md">
            <button
              className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === "overview"
                ? "bg-primary text-black"
                : "bg-gray-100 text-gray-700"
                }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === "curriculum"
                ? "bg-primary text-black"
                : "bg-gray-100 text-gray-700"
                }`}
              onClick={() => setActiveTab("curriculum")}
            >
              Curriculum
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-10">
              {/* Program Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Program Description
                </h2>
                <p className="text-base text-gray-700">{program.about}</p>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Why Choose Our Online Batch?
                </h2>
                <ul className="space-y-3">
                  {program.highlights?.map((point, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <p>
                        <span className="font-semibold">{point.title}:</span>{" "}
                        {point.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Program Includes Box */}
              <div className="flex justify-between items-start flex-col md:flex-row md:items-center gap-6">
                <div className="bg-gray-50 border rounded-lg p-6 w-full md:w-1/2 shadow">
                  <h3 className="text-xl font-bold mb-4">
                    Program includes:
                  </h3>
                  <p>
                    <b>Duration:</b> {program.includes.duration}
                  </p>
                  <p>
                    <b>Sections:</b> {program.includes.sections}
                  </p>
                  {/* <p>
                    <b>Original Price:</b>{" "}
                    <span className="line-through text-red-500">
                      {program.includes.originalPrice}/-
                    </span>
                  </p>
                  <p>
                    <b>Discounted Price:</b>{" "}
                    <span className="text-primary font-semibold">
                      {program.includes.discountedPrice}/-
                    </span>
                  </p> */}

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/+919971957084"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-center rounded border border-primary text-primary hover:bg-black hover:text-white transition"
                    >
                      Connect on WhatsApp
                    </a>
                    {/* <button className="px-6 py-2 bg-black text-white rounded hover:bg-primary transition">
                      Buy Now
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <div className="space-y-6">
              {program.plan.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {getLabel(item)}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-800">
                    {item.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <FAQSection />
      </section>
      <Footer1 />
    </>
  );
};

export default ProgramDetail;



// <>
// {/* <HeroSection/> */}
// <Navbar/>
// <section className="">
//   <img src={program.image} alt={program.title} className="z-20 w-full max-h-[600px] object-cover rounded-lg mb-8" />
//   <div className="py-10 px-16 md:px-20">
//   <h1 className="text-4xl font-bold mb-2">{program.title}</h1>
//   <p className="text-lg font-medium text-gray-600 mb-6">{program.duration}</p>

//   {/* Tabs */}
//   <div className="flex mb-6 border rounded-lg overflow-hidden max-w-md">
//     <button
//       className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === "overview" ? "bg-primary text-black" : "bg-gray-100 text-gray-700"}`}
//       onClick={() => setActiveTab("overview")}
//     >
//       Overview
//     </button>
//     <button
//       className={`flex-1 py-3 px-4 text-center text-sm font-semibold ${activeTab === "curriculum" ? "bg-primary text-black" : "bg-gray-100 text-gray-700"}`}
//       onClick={() => setActiveTab("curriculum")}
//     >
//       Curriculum
//     </button>
//   </div>

//   {/* Tab Content */}
//   {activeTab === "overview" && (
//     <div>
//       <p className="text-base text-gray-700 mb-6">{program.about}</p>
//       <p className="text-sm font-medium text-gray-600 bg-gray-100 inline-block px-4 py-2 rounded">{program.overview}</p>
//       <p className="text-lg font-semibold mt-4">Fees: <span className="text-primary">{program.fees}</span></p>
//     </div>
//   )}

//   {activeTab === "curriculum" && (
//     <div className="space-y-6">
//       {program.plan.map((item, index) => (
//         <div key={index} className="bg-gray-50 p-4 rounded-lg border">
//           <h3 className="text-xl font-semibold  text-primary mb-2">{getLabel(item)}</h3>
//           <ul className="list-disc list-inside space-y-1 text-gray-800">
//             {item.topics.map((topic, i) => (
//               <li key={i}>{topic}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   )}
//   </div>
// </section>
// <Footer1/>
// </>