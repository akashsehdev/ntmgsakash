import React from "react";

function Index() {
    return (
        <>
         
            <div className="w-full flex items-center justify-center">

            <img src="/trd.jpg" alt="Background" class="object-cover z-10" />    
            
                <div className="xl:w-1/2 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center  py-16 md:py-12 mt-32 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg">
                   
               
                    <div className="w-full flex items-center justify-center">
                        <div className="flex flex-col items-center">
                           
                            <p className="mt-2 text-4xl sm:text-4xl md:text-4xl font-semibold text-center text-white">PAGEANT TRAINING COURSE</p>
                            <p className="text-base text-center text-white mt-8">A one-year Hybrid Pageant Grooming Program aimed to deliver a holistic personality transformation, mentored by Tarun Rajput & Amisha Chaudhary</p>
                        </div>
                    </div>
                   
                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded pl-8 " >
                    
 {/* Card code block start */}
 <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
                            <div className="w-full  p-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded shadow">
                                        <img className="w-full h-full overflow-hidden object-cover rounded" src="/pic16new.png" alt="logo" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">Tarun Rajput</h5>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">Founder, NTMGS</p>
                                    </div>
                                </div>
        
                                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm font-normal">To many naive users of the platform, a redesign may look just like a facelift. </p>
                               
                            </div>
                           
                           
                        </div>
                        {/* Card code block end */}

                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded pr-8 " >
              {/* Card code block start */}
 <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded ">
                            <div className="w-full  p-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded shadow">
                                        <img className="w-full h-full overflow-hidden object-cover rounded" src="/amishadp.jpg" alt="logo" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">Amisha Chaudhary</h5>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">Founder, DIADEM</p>
                                    </div>
                                </div>
        
                                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm font-normal">To many naive users of the platform, a redesign may look just like a facelift. </p>
                               
                            </div>
                           
                           
                        </div>
                        {/* Card code block end */}
                </div>
            </div>


                </div>
            </div>
        </>
    );
}

export default Index;
