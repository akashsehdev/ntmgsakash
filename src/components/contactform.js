import axios from "axios";
import React, { useState } from "react";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function MyApp() {
    const [show, setShow] = useState(false);

    const [details,setdetails] = useState({
        name: "",
        email: "",
        phone:"",
        message:"",
        subject:"",
    })

    const inputHandler = (e)=>{
        setdetails({...details,[e.target.name]:e.target.value})
    }

   const submitHandler = (e) =>{

         e.preventDefault();
         const {email, name, phone, subject,message} = details;
         if(email == "" || name=="" || phone=="" || message=="" || subject==""){
            toast.warning('please fill all the filds',{
                position:'top-center'
            })
         }
         else{
            toast("Please wait for sending Email",{
                position:'top-center'
            });
            axios.post("https://spiffy-crumble-d82679.netlify.app/.netlify/functions/api/contact",details)
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
        <div className="bg-gradient-to-b from-purple-600 to-indigo-700 h-[120vh] mb-16 w-full">
            <div className="md:px-20 px-4 py-8">
                <div className="flex items-center justify-between">
                    
                  
                    <div className="lg:hidden text-white" onClick={() => setShow(!show)}>
                        {show ? (
                            <div id="close" className=" close-m-menu" onclick="MenuHandler(false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        ) : (
                            <svg id="open" onclick="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
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
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Get in Touch with us!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" name="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" onChange={inputHandler} />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input tabIndex={0} arial-label="Please input email address" type="email" name="email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address"  onChange={inputHandler} />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Mobile</label>
                            <input tabIndex={0}   name="phone" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" onChange={inputHandler} />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Subject</label>
                            <input tabIndex={0} arial-label="Please input country name" name="subject" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" onChange={inputHandler} />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea tabIndex={0} aria-label="leave a message"  name="message" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={details.message} onChange={inputHandler} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div></form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default MyApp;
