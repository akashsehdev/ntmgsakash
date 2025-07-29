import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase"; // Make sure path is correct
import { collection, addDoc } from "firebase/firestore";

function MyApp() {
  const [show, setShow] = useState(false);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const inputHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, name, phone, subject, message } = details;

    if (!email || !name || !phone || !message || !subject) {
      toast.warning("Please fill all fields", { position: "top-center" });
      return;
    }

    const toastId = toast.loading("Submitting...");

    try {
      await addDoc(collection(db, "contacts"), details); // 🔥 Create 'contacts' collection
      toast.update(toastId, {
        render: "Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setDetails({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      });
    } catch (error) {
      console.error("Firestore error:", error);
      toast.update(toastId, {
        render: "Failed to send message. Try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-gradient-to-b w-full">
      <div className="md:px-20 px-4">
        <div className="flex items-center justify-between">
          <div className="lg:hidden text-white" onClick={() => setShow(!show)}>
            {show ? (
              <svg
                aria-label="Close"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            ) : (
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
          <form onSubmit={submitHandler}>
            <p className="md:text-3xl text-xl font-bold text-center text-gray-700">
              Get in Touch with us!
            </p>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold text-gray-800">
                  Name
                </label>
                <input
                  name="name"
                  value={details.name}
                  onChange={inputHandler}
                  className="text-base p-3 bg-gray-100 border rounded mt-4"
                  placeholder="Your name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold text-gray-800">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={details.email}
                  onChange={inputHandler}
                  className="text-base p-3 bg-gray-100 border rounded mt-4"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold text-gray-800">
                  Mobile
                </label>
                <input
                  name="phone"
                  value={details.phone}
                  onChange={inputHandler}
                  className="text-base p-3 bg-gray-100 border rounded mt-4"
                  placeholder="Your phone"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold text-gray-800">
                  Subject
                </label>
                <input
                  name="subject"
                  value={details.subject}
                  onChange={inputHandler}
                  className="text-base p-3 bg-gray-100 border rounded mt-4"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold text-gray-800">
                Message
              </label>
              <textarea
                name="message"
                value={details.message}
                onChange={inputHandler}
                className="h-36 text-base p-3 bg-gray-100 border rounded mt-4 resize-none"
                placeholder="Your message"
              />
            </div>

            <p className="text-xs text-gray-600 mt-4">
              By clicking submit you agree to our terms and privacy policy.
            </p>

            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="mt-9 text-base font-semibold text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default MyApp;
