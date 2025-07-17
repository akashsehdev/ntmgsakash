import React from "react";

function Index() {
    return (
        <>
            <div className="container mx-auto pt-28 md:pt-6 px-4">
                <div className="flex flex-wrap md:flex-row">
                    {/* Image Section - will appear on top on mobile and on the right on larger devices */}
                    <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2">
                        <div className="rounded w-full">
                            <img 
                                src="/tarunrajput.png" 
                                alt="Tarun Rajput" 
                                className="object-contain w-full h-64 md:h-auto rounded" 
                            />
                        </div>
                    </div>

                    {/* Text Section - will appear below the image on mobile and on the left on larger devices */}
                    <div className="w-full md:w-3/5 flex md:pr-6 mb-8 md:mb-0 order-2 md:order-1">
                        <div className="rounded border-gray-300 text-center p-8 md:p-16 dark:border-gray-700 w-full">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-center pt-14">TARUN RAJPUT</h2>
                            <p className="text-md text-left mt-14 text-gray-600 tracking-wide font-thin text-xl">
                                <span className="text-3xl">He</span> is a professional Indian model (GROOMING EXPERT, EDUCATOR, SHOW DIRECTOR, FASHION CHOREOGRAPHER) and the founder of New Talent Modeling Grooming School.
                            </p>
                            <br />
                            <p className="text-md text-left text-gray-600 tracking-wide font-thin text-xl">
                                After starting his career nearly a decade ago, Tarun Rajput has emerged as a respected figure in the fashion industry, known for his creativity and dedication. With collaborations with renowned designers, his influence has reshaped contemporary trends and left a lasting impact on haute couture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
