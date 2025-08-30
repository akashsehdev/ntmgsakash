// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import men from "../data/men";
// import women from "../data/women";
// import boys from "../data/boys";
// import girls from "../data/girls";

// const ModelDetail = () => {
//   const { category, id } = useParams();
//   const navigate = useNavigate();

//   const dataMap = { men, women, boys, girls };
//   const modelList = dataMap[category] || [];

//   const currentIndex = modelList.findIndex((m) => String(m.id) === id);
//   const model = modelList[currentIndex];

//   if (!model)
//     return <p className="text-center mt-10 text-red-500">Model not found</p>;

//   const handleNavigation = (direction) => {
//     let newIndex =
//       direction === "prev"
//         ? (currentIndex - 1 + modelList.length) % modelList.length
//         : (currentIndex + 1) % modelList.length;

//     navigate(`/model/${category}/${modelList[newIndex].id}`);
//   };

//   return (
//     <div className="min-h-screen p-8 md:p-10 font-serif bg-black text-white">
//       {/* Name & mgnt */}
//       <h1 className="text-3xl pt-[100px] font-bold uppercase tracking-wide text-center">
//         {model.name}
//       </h1>
//       <p className="text-sm uppercase text-gray-500 mt-1 mb-4 text-center">
//         NTMGS Management
//       </p>

//       <div className="max-w-6xl mx-auto bg-black p-2 grid md:grid-cols-4 gap-6">
//         {/* LEFT */}
//         <div className="md:col-span-1 space-y-6 flex flex-col justify-between">
//           <div>
//             <p className="text-sm leading-relaxed">
//               {model.bio || "This model's biography is not available yet."}
//             </p>
//           </div>

//           {model.sideImage && (
//             <div>
//               <p className="text-xs mt-1 uppercase text-gray-500">
//                 {model.sideImageLabel || "Campaign Image"}
//               </p>
//               <img
//                 src={model.sideImage}
//                 alt="Side Campaign"
//                 className="rounded-xl object-cover w-full h-58"
//               />
//             </div>
//           )}
//         </div>

//         {/* CENTER */}
//         <div className="md:col-span-2 flex flex-col items-center justify-center">
//           <img
//             src={model.image}
//             alt={model.name}
//             className="rounded-xl object-cover w-full max-h-[700px]"
//           />
//         </div>

//         {/* RIGHT */}
//         <div className="md:col-span-1 space-y-6 flex flex-col justify-between">
//           {model.rightImage && (
//             <div>
//               <img
//                 src={model.rightImage}
//                 alt="Right Campaign"
//                 className="rounded-xl object-cover w-full h-58"
//               />
//               <p className="text-xs mt-1 uppercase text-gray-500">
//                 {model.rightImageLabel || "Giorgio Armani S/S 2023"}
//               </p>
//             </div>
//           )}

//           {model.bottomLabel && (
//             <div>
//               <p className="uppercase text-xs text-gray-700">
//                 {model.bottomLabel}
//               </p>
//               <p className="text-xs text-gray-400 mt-1">
//                 Photo by {model.bottomCredit || "Federico Porciolini"}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModelDetail;


import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import men from "../data/men";
import women from "../data/women";
import boys from "../data/boys";
import girls from "../data/girls";

const ModelDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const dataMap = { men, women, boys, girls };
  const modelList = dataMap[category] || [];

  const currentIndex = modelList.findIndex((m) => String(m.id) === id);
  const model = modelList[currentIndex];

  if (!model)
    return <p className="text-center mt-10 text-red-500">Model not found</p>;

  const handleNavigation = (direction) => {
    let newIndex =
      direction === "prev"
        ? (currentIndex - 1 + modelList.length) % modelList.length
        : (currentIndex + 1) % modelList.length;

    navigate(`/model/${category}/${modelList[newIndex].id}`);
  };

  // Helper to get image by type
  const getImage = (type) => model.images.find((img) => img.type === type);

  return (
    <div className="min-h-screen p-8 md:p-10 font-serif bg-black text-white">
      {/* Name & management */}
      <h1 className="text-3xl pt-[100px] font-bold uppercase tracking-wide text-center">
        {model.name}
      </h1>
      <p className="text-sm uppercase text-gray-500 mt-1 mb-4 text-center">
        NTMGS Management
      </p>

      <div className="max-w-6xl mx-auto bg-black p-2 grid md:grid-cols-4 gap-6">
        {/* LEFT */}
        <div className="md:col-span-1 space-y-6 flex flex-col justify-between">
          <div>
            <p className="text-sm leading-relaxed">
              {model.bio || "This model's biography is not available yet."}
            </p>
          </div>

          {getImage("side") && (
            <div>
              <p className="text-xs mt-1 uppercase text-gray-500">
                {getImage("side").label || "Campaign Image"}
              </p>
              <img
                src={getImage("side").src}
                alt="Side Campaign"
                className="rounded-xl object-cover w-full h-58"
              />
            </div>
          )}
        </div>

        {/* CENTER */}
        <div className="md:col-span-2 flex flex-col items-center justify-center">
          {getImage("main") && (
            <img
              src={getImage("main").src}
              alt={model.name}
              className="rounded-xl object-cover w-full max-h-[700px]"
            />
          )}
        </div>

        {/* RIGHT */}
        <div className="md:col-span-1 space-y-6 flex flex-col justify-between">
          {getImage("right") && (
            <div>
              <img
                src={getImage("right").src}
                alt="Right Campaign"
                className="rounded-xl object-cover w-full h-58"
              />
              <p className="text-xs mt-1 uppercase text-gray-500">
                {getImage("right").label || "Right Campaign"}
              </p>
            </div>
          )}

          {getImage("bottom") && (
            <div>
              <p className="uppercase text-xs text-gray-700">
                {getImage("bottom").label}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Photo by {getImage("bottom").credit || "Unknown"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => handleNavigation("prev")}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={() => handleNavigation("next")}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ModelDetail;
