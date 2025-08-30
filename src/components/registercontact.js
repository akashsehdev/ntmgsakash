// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase";

// const Index = () => {
//   const [register, setRegister] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     city: "",
//     about: "",
//     courses: [],
//   });

//   const inputHandler = (e) => {
//     setRegister({ ...register, [e.target.name]: e.target.value });
//   };

//   const handleCourseChange = (e) => {
//     const course = e.target.value;
//     const updatedCourses = register.courses.includes(course)
//       ? register.courses.filter((c) => c !== course)
//       : [...register.courses, course];
//     setRegister({ ...register, courses: updatedCourses });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const { email, name, phone, city, about, age, courses } = register;

//     if (
//       !email ||
//       !name ||
//       !phone ||
//       !age ||
//       !city ||
//       !about ||
//       courses.length === 0
//     ) {
//       toast.warning("Please fill all fields and select at least one course", {
//         position: "top-center",
//       });
//       return;
//     }

//     toast.info("Submitting...", { position: "top-center" });

//     try {
//       await addDoc(collection(db, "registrations"), register);

//       // Send to Google Sheets + Email via Apps Script
//       const response = await fetch("https://script.google.com/macros/s/AKfycbzkXAHPtTJpHz9MuoAAxED_y2_xUE2ILQGw6DqZZ2M7KdZV8GM30MmLJONgnEFIE1Px9A/exec", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(register),
//       });

//       const result = await response.json();
//       console.log("Google Script Response", result);

//       if (result.status === "success") {
//         toast.success("Registration successful!", { position: "top-center" });

//         setRegister({
//           name: "",
//           email: "",
//           phone: "",
//           age: "",
//           city: "",
//           about: "",
//           courses: [],
//         });
//       } else {
//         console.error("Google Script Error:", result.message);
//         toast.error("Submission failed. Try again.", { position: "top-center" });
//       }
//     } catch (error) {
//       console.error("Submission Error:", error);
//       toast.error("Submission failed. Try again.", { position: "top-center" });
//     }
//   };

//   const courseList = [
//     "Runway Training",
//     "Photoshoot Basics",
//     "Grooming & Etiquette",
//     "Fashion Styling",
//     "Fitness & Nutrition",
//     "Model Portfolio Building",
//     "Camera Confidence",
//   ];

//   return (
//     <div>
//       <form
//         onSubmit={submitHandler}
//         className="max-w-3xl mx-auto bg-transparent p-8 rounded-lg shadow-md"
//       >
//         <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
//           Enrollment Form
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={register.name}
//               onChange={inputHandler}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
//               placeholder="John Doe"
//               required
//             />
//           </div>

//           {/* Age */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Age
//             </label>
//             <input
//               type="text"
//               name="age"
//               value={register.age}
//               onChange={inputHandler}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
//               placeholder="23"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={register.email}
//               onChange={inputHandler}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
//               placeholder="email@example.com"
//               required
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               name="phone"
//               value={register.phone}
//               onChange={inputHandler}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
//               placeholder="+91 98765 43210"
//               required
//             />
//           </div>

//           {/* City */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               City
//             </label>
//             <input
//               type="text"
//               name="city"
//               value={register.city}
//               onChange={inputHandler}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
//               placeholder="New Delhi"
//               required
//             />
//           </div>

//           {/* About */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Tell us about yourself
//             </label>
//             <textarea
//               name="about"
//               rows="3"
//               value={register.about}
//               onChange={inputHandler}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
//               placeholder="Your background, goals, etc."
//               required
//             />
//           </div>
//         </div>

//         {/* Courses Checkboxes */}
//         <div className="mt-6">
//           <label className="block text-base font-semibold text-gray-800 mb-2">
//             Select Courses You’re Interested In
//           </label>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             {courseList.map((course) => (
//               <label key={course} className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   value={course}
//                   checked={register.courses.includes(course)}
//                   onChange={handleCourseChange}
//                   className="form-checkbox text-black mr-2"
//                 />
//                 {course}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <button
//             type="submit"
//             className="bg-black text-white text-lg px-8 py-3 rounded-md hover:bg-gray-800 transition"
//           >
//             Register Now
//           </button>
//         </div>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Index;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Registercontact = ({ insidePopup = false }) => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    about: "",
    courses: [],
  });

  const inputHandler = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleCourseChange = (e) => {
    const course = e.target.value;
    const updatedCourses = register.courses.includes(course)
      ? register.courses.filter((c) => c !== course)
      : [...register.courses, course];
    setRegister({ ...register, courses: updatedCourses });
  };



  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, name, phone, city, about, age, courses } = register;

    if (
      !email ||
      !name ||
      !phone ||
      !age ||
      !city ||
      !about ||
      courses.length === 0
    ) {
      toast.warning("Please fill all fields and select at least one course", {
        position: "top-center",
      });
      return;
    }

    toast.info("Submitting...", { position: "top-center" });

    try {
      await addDoc(collection(db, "registrations"), register);

      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: about,
          courses: courses.join(", "),
        }),
      });

      // ✅ Firebase was successful, so directly show success
      toast.success("Registration successful!", { position: "top-center" });

      setRegister({
        name: "",
        email: "",
        phone: "",
        age: "",
        city: "",
        about: "",
        courses: [],
      });
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Submission failed. Try again.", { position: "top-center" });
    }
  };


  // const courseList = [
  //   "Runway Training",
  //   "Photoshoot Basics",
  //   "Grooming & Etiquette",
  //   "Fashion Styling",
  //   "Fitness & Nutrition",
  //   "Model Portfolio Building",
  //   "Camera Confidence",
  // ];
  const courseList = [
    "Modelling Program",
    "Group Batch Program",
    "Special Batch",
    "Talent Exclusive Batch",
    "Pageant Grooming Program",
    "Portfolio Development Program",
    "Modelling Essentials Program",
  ];

  return (
    <div
      className={`rounded-lg ${insidePopup
        ? "bg-transparent text-white" // popup → transparent + white text
        : "bg-white text-black shadow-md" // normal page → white background + dark text
        }`}
    >
      <form
        onSubmit={submitHandler}
        className="max-w-2xl mx-auto p-6 text-sm"
      >
        <h2
          className={`text-2xl font-semibold mb-4 text-center ${insidePopup ? "text-white" : "text-gray-800"
            }`}
        >
          Enrollment Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label
              className={`block text-xs font-medium mb-1 ${insidePopup ? "text-gray-200" : "text-gray-700"
                }`}
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={register.name}
              onChange={inputHandler}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm ${insidePopup
                ? "bg-white/20 border-gray-400 text-white placeholder-gray-300"
                : "border-gray-300 text-black placeholder-gray-400"
                }`}
              placeholder="John Doe"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label
              className={`block text-xs font-medium mb-1 ${insidePopup ? "text-gray-200" : "text-gray-700"
                }`}
            >
              Age
            </label>
            <input
              type="text"
              name="age"
              value={register.age}
              onChange={inputHandler}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm ${insidePopup
                ? "bg-white/20 border-gray-400 text-white placeholder-gray-300"
                : "border-gray-300 text-black placeholder-gray-400"
                }`}
              placeholder="23"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              className={`block text-xs font-medium mb-1 ${insidePopup ? "text-gray-200" : "text-gray-700"
                }`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={inputHandler}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm ${insidePopup
                ? "bg-white/20 border-gray-400 text-white placeholder-gray-300"
                : "border-gray-300 text-black placeholder-gray-400"
                }`}
              placeholder="email@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className={`block text-xs font-medium mb-1 ${insidePopup ? "text-gray-200" : "text-gray-700"
                }`}
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={register.phone}
              onChange={inputHandler}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm ${insidePopup
                ? "bg-white/20 border-gray-400 text-white placeholder-gray-300"
                : "border-gray-300 text-black placeholder-gray-400"
                }`}
              placeholder="+91 98765 43210"
              required
            />
          </div>

          {/* City */}
          <div>
            <label
              className={`block text-xs font-medium mb-1 ${insidePopup ? "text-gray-200" : "text-gray-700"
                }`}
            >
              City
            </label>
            <input
              type="text"
              name="city"
              value={register.city}
              onChange={inputHandler}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm ${insidePopup
                ? "bg-white/20 border-gray-400 text-white placeholder-gray-300"
                : "border-gray-300 text-black placeholder-gray-400"
                }`}
              placeholder="New Delhi"
              required
            />
          </div>

          {/* About */}
          <div>
            <label
              className={`block text-xs font-medium mb-1 ${insidePopup ? "text-gray-200" : "text-gray-700"
                }`}
            >
              Tell us about yourself
            </label>
            <textarea
              name="about"
              rows="3"
              value={register.about}
              onChange={inputHandler}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm ${insidePopup
                ? "bg-white/20 border-gray-400 text-white placeholder-gray-300"
                : "border-gray-300 text-black placeholder-gray-400"
                }`}
              placeholder="Your background, goals, etc."
              required
            />
          </div>
        </div>

        {/* Courses Checkboxes */}
        <div className="mt-4">
          <label
            className={`block text-sm font-semibold mb-2 ${insidePopup ? "text-white" : "text-gray-800"
              }`}
          >
            Select Courses You’re Interested In
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {courseList.map((course) => (
              <label
                key={course}
                className={`inline-flex items-center text-sm ${insidePopup ? "text-gray-200" : "text-black"
                  }`}
              >
                <input
                  type="checkbox"
                  value={course}
                  checked={register.courses.includes(course)}
                  onChange={handleCourseChange}
                  className={`form-checkbox mr-2 ${insidePopup ? "text-white" : "text-black"
                    }`}
                />
                {course}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className={`text-sm px-6 py-2 rounded-md transition ${insidePopup
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            Register Now
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Registercontact;
