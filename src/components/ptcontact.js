import React from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        city: "",
        about: ""
    });

    const inputHandler = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const { email, name, phone, city, about, age } = register;
        if (email === "" || name === "" || phone === "" || age === "" || city === "" || about === "") {
            toast.warning("Please fill all the fields", {
                position: 'top-center'
            });
        } else {
            toast("Please wait while sending Email", {
                position: "top-center",
            });
            console.log(register);
            axios.post("https://spiffy-crumble-d82679.netlify.app/.netlify/functions/api/register", register)
                .then((res) => {
                    console.log(res.data);
                    toast.success("The Email has been sent", {
                        position: 'top-center'
                    });
                })
                .catch((error) => {
                    console.log(error);
                    toast.warning("Error in sending email", {
                        position: 'top-center'
                    });
                });
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <form className="bg-white shadow-md rounded p-6 mt-8" onSubmit={submitHandler}>
                <div className="text-lg text-gray-800 dark:text-gray-100 font-bold mb-4">Registration Form</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Name</label>
                        <input type="text" name="name" required id="FirstName" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" onChange={inputHandler} value={register.name} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Age</label>
                        <input type="text" id="LastName" name="age" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" onChange={inputHandler} value={register.age} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email2" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Email</label>
                        <div className="relative">
                            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <input id="email2" name="email" required className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm rounded border shadow" onChange={inputHandler} value={register.email} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Contact Number</label>
                        <input type="text" id="StreetAddress" name="phone" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" onChange={inputHandler} value={register.phone} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">City</label>
                        <input type="text" id="City" name="city" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" onChange={inputHandler} value={register.city} />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label htmlFor="About" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Tell Us About Yourself</label>
                        <textarea id="About" name="about" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" onChange={inputHandler} value={register.about}></textarea>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="bg-black transition duration-150 ease-in-out hover:bg-gray rounded text-white px-8 py-2 text-lg focus:outline-none" type="submit">Register Now</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Index;
