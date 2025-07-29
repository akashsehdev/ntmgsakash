import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Index = () => {
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

      // Send to Google Sheets + Email via Apps Script
      const response = await fetch("https://script.google.com/macros/s/AKfycbzkXAHPtTJpHz9MuoAAxED_y2_xUE2ILQGw6DqZZ2M7KdZV8GM30MmLJONgnEFIE1Px9A/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });

      const result = await response.json();
      console.log("Google Script Response", result);

      if (result.status === "success") {
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
      } else {
        console.error("Google Script Error:", result.message);
        toast.error("Submission failed. Try again.", { position: "top-center" });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Submission failed. Try again.", { position: "top-center" });
    }
  };

  const courseList = [
    "Runway Training",
    "Photoshoot Basics",
    "Grooming & Etiquette",
    "Fashion Styling",
    "Fitness & Nutrition",
    "Model Portfolio Building",
    "Camera Confidence",
  ];

  return (
    <div className="bg-gray-100 py-10 px-4">
      <form
        onSubmit={submitHandler}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Enrollment Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={register.name}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="text"
              name="age"
              value={register.age}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
              placeholder="23"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
              placeholder="email@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={register.phone}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
              placeholder="+91 98765 43210"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={register.city}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
              placeholder="New Delhi"
              required
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tell us about yourself
            </label>
            <textarea
              name="about"
              rows="3"
              value={register.about}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
              placeholder="Your background, goals, etc."
              required
            />
          </div>
        </div>

        {/* Courses Checkboxes */}
        <div className="mt-6">
          <label className="block text-base font-semibold text-gray-800 mb-2">
            Select Courses You’re Interested In
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {courseList.map((course) => (
              <label key={course} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={course}
                  checked={register.courses.includes(course)}
                  onChange={handleCourseChange}
                  className="form-checkbox text-black mr-2"
                />
                {course}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-black text-white text-lg px-8 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Register Now
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Index;
