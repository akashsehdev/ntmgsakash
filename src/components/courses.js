import React from "react";
import { useState } from "react";
import Dynamiccourse from "./dynamiccourse";
import Dynamicvideo from "./dynamicvideo";
import Mobilecourses from './mobilecourses';

function Index() {
    const [hidden1, setHidden1] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    const [hidden3, setHidden3] = useState(true);

    return (
        <>
            <div className="text-center flex flex-col justify-center items-center space-y-4">
                <h1 className="text-3xl lg:text-6xl font-semibold leading-9 text-center text-gray-800 mt-16">NTMGS Courses</h1>
            </div>

            {/* Use flex container with wrapping and centered alignment */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-6 flex flex-wrap justify-center space-x-4 space-y-4">
                {/* Each course container */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-2" onMouseEnter={() => setHidden1(false)} onMouseLeave={() => setHidden1(true)}>
                    {hidden1 ? <Dynamiccourse imgurl="/Pageant.png" imgtitle="Pageant Training" /> : <Dynamicvideo vidurl="https://www.youtube.com/embed/2FHn9HYTLac?si=zcFY7k3eRbH1Sw2_" />}
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 p-2" onMouseEnter={() => setHidden2(false)} onMouseLeave={() => setHidden2(true)}>
                    {hidden2 ? <Dynamiccourse imgurl="/modelneeraj.png" imgtitle="Model Training" /> : <Dynamicvideo vidurl="https://www.youtube.com/embed/xsQI_4AqSzY?si=vTPZZOATJJEFSHKO" />}
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 p-2" onMouseEnter={() => setHidden3(false)} onMouseLeave={() => setHidden3(true)}>
                    {hidden3 ? <Dynamiccourse imgurl="/portmodelnew.png" imgtitle="Portfolio Shoot" /> : <Dynamicvideo vidurl="https://www.youtube.com/embed/ThnsDXU9_3w?si=6uZUJUqmBCGB5Xn7" />}
                </div>
            </div>

            <Mobilecourses />

            <br />
        </>
    );
}

export default Index;
