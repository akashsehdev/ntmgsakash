import React from "react";

function Index() {
    return (
        <>
            <div className="w-full flex justify-center mt-32">
                <h1 className="lg:text-4xl sm:text-2xl font-bold leading-tight text-gray-800">
                    WHAT WILL YOU LEARN?
                </h1>
            </div>
            <div className="container pt-6 mx-auto">
                <div className="flex flex-wrap">
                    {/* Left Content with Image on Medium and Above */}
                    <div className="md:w-1/3 w-full pb-6 flex flex-col items-center">
                        <div className="rounded mt-16 p-8">
                            <h1 className="text-2xl font-bold">TAILORED MODEL TRAINING</h1>
                            <ul className="mt-6 list-disc">
                                <li className="text-xl">Signature Runway walks</li>
                                <li className="text-xl">Body Language</li>
                                <li className="text-xl">Artistic Emoting</li>
                                <li className="text-xl">Dynamic photo movement</li>
                                <li className="text-xl">Posing</li>
                                <li className="text-xl">Personal Branding</li>
                                <li className="text-xl">Image & Presentation</li>
                                <li className="text-xl">Dealing with Agencies</li>
                                <li className="text-xl">Handling Pret & Couture Outfits</li>
                                <li className="text-xl">Expert Tips from Industry Giants</li>
                                <li className="text-xl">Modeling ethos when at work</li>
                                <li className="text-xl">Expectations vs Realities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="md:w-1/3 w-full flex justify-center">
                        <img src="/westmodel5.png" className="w-full object-contain md:h-full h-60" alt="model" /> {/* Set height for mobile */}
                    </div>

                    {/* Right Content with Image on Medium and Above */}
                    <div className="md:w-1/3 w-full pb-6 flex flex-col items-center">
                        <div className="rounded mt-16 p-8">
                            <h1 className="text-2xl font-bold">TAILORED PAGEANT TRAINING</h1>
                            <ul className="mt-6 list-disc">
                                <li className="text-xl">The Essence of Beauty Pageants</li>
                                <li className="text-xl">Building your own Coaching Plan</li>
                                <li className="text-xl">Stage Presence, Ramp walk and Posing</li>
                                <li className="text-xl">Positive Inner Image and Body language</li>
                                <li className="text-xl">Pageant Introduction Techniques</li>
                                <li className="text-xl">Judges Interview Preparation</li>
                                <li className="text-xl">Voice Modulation & Diction</li>
                                <li className="text-xl">On stage Question/Answer sessions</li>
                                <li className="text-xl">Hair & Makeup, Etiquette training</li>
                                <li className="text-xl">Detailed Wardrobe Analysis & Styling</li>
                                <li className="text-xl">Beauty with a Purpose Project</li>
                                <li className="text-xl">Expectations vs Realities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
