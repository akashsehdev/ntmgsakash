import React from "react";

function Index() {
    return (
        <>
            <div className="container mx-auto pt-6 px-4">
                <div className="flex flex-wrap">
                    {/* Image Section - Appears above text on small screens and on the left on larger screens */}
                    <div className="md:w-2/5 w-full order-1 md:order-2">
                        <div className="rounded">
                            <img
                                src="/hero2.png"
                                alt="Background"
                                className="object-contain w-full h-64 md:h-auto"
                            />
                        </div>
                    </div>

                    {/* Text Section - Appears below image on small screens and on the right on larger screens */}
                    <div className="md:w-3/5 w-full flex md:pb-0 md:pr-6 mb-6 md:mb-0 order-2 md:order-1">
                        <div className="rounded border-gray-300 text-center p-8 dark:border-gray-700 w-full">
                            <p className="text-md text-left mt-14 text-gray-600 tracking-wide font-thin text-xl">
                                <span className="text-4xl">He</span> is a luminary in the world of modeling, revered for his exceptional talent and profound expertise in shaping aspiring models into industry icons. With over a decade of experience as a model mentor, Tarun has honed his craft to perfection, guiding countless individuals towards their dreams of strutting the runways of the world's fashion capitals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
