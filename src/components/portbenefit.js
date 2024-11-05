import React from "react";

function Index() {
    return (
        <>
            <div className="container pt-12 mb-4 mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* Image Container */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="rounded overflow-hidden h-auto lg:h-96">
                            <img
                                src='/westmodel4.png'
                                className="object-cover w-full h-64 md:h-full"
                                alt="model"
                            />
                        </div>
                    </div>
                    {/* Text Container */}
                    <div className="w-full lg:w-1/2 pb-6 flex items-center">
                        <div className="rounded p-8 mt-8 lg:mt-0">
                            <h1 className="lg:text-4xl text-4xl font-bold text-center leading-tight text-gray-800">
                                GUIDED PORTFOLIO SHOOT
                            </h1>
                            <p className="mt-8 text-xl text-justify">
                                A modelling portfolio serves as a stepping stone for aspiring models looking to break into the industry. As a result, it is critical for models to create an appealing portfolio in order to boost their chances of being recruited. Because your portfolio is similar to your resume, you must strive to show versatility & freshness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
