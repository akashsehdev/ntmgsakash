import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useRef } from "react";
const Index = () => {
    
    const [register,setregister] = useState({
        name: "",
        email: "",
        phone:"",
        age:"",
         city:"",
         about:""
    })

    const inputHandler = (e)=>{
        setregister({...register,[e.target.name]:e.target.value})
    }

   const submitHandler = (e) =>{

         e.preventDefault();
         const {email, name, phone, city,about,age} = register;
         if(email == "" || name=="" || phone=="" || age=="" || city=="" || about==""){
             toast.warning("please fill all the filds",{
                position:'top-center'
            });
         }
         else{

            toast("Please wait for sending Email",{
                position:'top-center'
            });
            console.log(register)
            axios.post("https://spiffy-crumble-d82679.netlify.app/.netlify/functions/api/register",register)
            .then((res)=>{
                console.log(res.data);
                toast.success("the Email Has Been Sent",{
                    position:'top-center'
                });
            })
            .catch((error)=>{
                console.log(error);
               toast.warning("error in sending email",{
                position:'top-center'
            });
            })
         }
       
   }

    return (
        <div>
            <div>
                <form  className="container mx-auto bg-white shadow rounded" onSubmit={submitHandler}>
                    <div>
                        <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                            <div className="flex items-center w-11/12 mx-auto">
                                <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Registration Form</p>
                                <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto">
                            <div className="container mx-auto">
                                <div className="my-8 mx-auto xl:w-full xl:mx-0">
                                    <div className="xl:flex lg:flex md:flex flex-wrap justify-center">
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col p-4 ">
                                            <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                               Name
                                            </label>
                                            <input type="text" name="name" required id="FirstName" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder 
                                            onChange={inputHandler} value={register.name} />
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col p-4  ">
                                            <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                               Age
                                            </label>
                                            <input type="text" id="age" name="age" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder 
                                            onChange={inputHandler} value={register.age} />
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col p-4 ">
                                            <label htmlFor="email2" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Email
                                            </label>
                                            <div className="relative">
                                                <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <rect x={3} y={5} width={18} height={14} rx={2} />
                                                        <polyline points="3 7 12 13 21 7" />
                                                    </svg>
                                                </div>
                                                <input id="email2" name="email" required className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm  rounded border shadow" placeholder 
                                                onChange={inputHandler} value={register.email}/>
                                            </div>
                                            
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col p-4 ">
                                            <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                               Contact Number
                                            </label>
                                            <input type="text" id="StreetAddress" name="phone" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder
                                            onChange={inputHandler} value={register.phone} />
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col p-4">
                                            <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                City
                                            </label>
                                            <input type="text" id="StreetAddress" name="city" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder 
                                            onChange={inputHandler} value={register.city}/>
                                        </div>
                                        <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col p-4 mb-6">
                                            <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Tell Us About Yourself
                                            </label>
                                            <input type="text" id="Country" name="about" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder
                                             onChange={inputHandler} value={register.about} />
                                        </div>
                                    </div>
                                  
                                   
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-4 sm:px-12 px-4 bg-white dark:bg-gray-700 mt-6 flex justify-center rounded-bl rounded-br">
                            {/* <button className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out">Restore</button> */}
                            <button className="bg-black transition duration-150 ease-in-out hover:bg-gray rounded text-white px-8 py-2 text-2xl focus:outline-none" type="submit">
                                Register Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />;
        </div>
    );
};
export default Index;
