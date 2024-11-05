import React from "react";

function Index() {
    return (
        <>
            <div className="container mx-auto pt-6 px-4 md:px-0">
                <div className="flex flex-wrap justify-center">
                    <div className="md:w-3/5 w-full flex md:pb-0 md:pr-6">
                        <div className="rounded border-gray-300 text-justify p-8 dark:border-gray-700 w-full">
                            <p className="text-md text-left mt-14 text-gray-600 tracking-wide font-thin text-xl text-justify">
                                Welcome to the Pageant Training Program at New Talent Models Grooming School, where dreams take center stage and stars are born! Our program is meticulously crafted to empower aspiring pageant contestants with the skills, confidence, and grace needed to shine in the spotlight. Led by industry experts and seasoned professionals, our comprehensive curriculum covers everything from runway etiquette to interview techniques, ensuring each participant is fully equipped to dazzle judges and captivate audiences. Through personalized coaching sessions, mock pageants, and exclusive workshops, we cultivate poise, presence, and polish in every student, nurturing their unique talents and refining their natural beauty.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/5 w-full">
                        <div className="rounded">
                            <img 
                                src="/PageantHero.png" 
                                alt="Background" 
                                className="object-contain object-center w-full md:h-auto h-64"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
