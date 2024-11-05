import React from "react";

function Index() {
    return (
        <div className="flex flex-wrap items-center justify-between w-full bg-gray-100 h-auto">
            
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-16 pt-6 gap-8 px-4">
              
                <div className="p-2 items-center text-center justify-between rounded border-black bg-white dark:border-gray-700 border-solid border-2 h-auto"> 
                    <h1 className="text-xl font-bold">Business of Modeling and how to pave your way into the Industry</h1>
                </div>
              
                <div className="p-2 items-center text-center justify-between rounded border-black bg-white dark:border-gray-700 border-solid border-2 h-auto">
                    <h1 className="text-xl font-bold pl-12 pr-12">Posing and Runway classes from Experts</h1>
                </div>
               
                <div className="p-2 items-center text-center justify-between rounded border-black bg-white dark:border-gray-700 border-solid border-2 h-auto">
                    <h1 className="text-xl font-bold">Portfolio Shoot with an Expert team under the guidance of Tarun Rajput</h1>
                </div>

                <div className="p-2 items-center text-center justify-between rounded border-black bg-white dark:border-gray-700 border-solid border-2 h-auto">
                    <h1 className="text-xl font-bold">Personal Branding Session</h1>
                </div>
              
                <div className="p-2 items-center text-center justify-between rounded border-black bg-white dark:border-gray-700 border-solid border-2 h-auto">
                    <h1 className="text-xl font-bold pl-12 pr-12">Image Consulting Session</h1>
                </div>
               
                <div className="p-2 items-center text-center justify-between rounded border-black bg-white dark:border-gray-700 border-solid border-2 h-auto">
                    <h1 className="text-xl font-bold">Lifetime Access to NTMGS Community</h1>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-6 gap-8">
              
                <div className="p-2 items-center text-center justify-between rounded border-black bg-black text-white dark:border-gray-700 border-solid border-2 h-auto">
                    <h1 className="text-xl font-bold">Join the NTMGS community today and get access to all 6 programs</h1>
                </div>

                <div className="p-2 mr-32 ml-32 mb-16 items-center text-center justify-between rounded border-black bg-black text-white dark:border-gray-700 border-solid border-2 h-auto">
                    <h1 className="text-xl font-bold">Book Your Slot Now</h1>
                </div>
            </div>
        </div>
    );
}

export default Index;
