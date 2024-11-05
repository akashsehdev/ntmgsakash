import React from "react";
import PageantTrainingCarousel from "./ptcarousel";

function Index() {
    return (
        <>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 px-4"> {/* Added padding for smaller screens */}
                {/* Card 1 */}
                <div className="rounded border-gray-300 dark:border-gray-700 h-auto p-4 m-4"> {/* Adjusted margins and padding */}
                    <div className="p-2">
                        <h1 className="text-3xl font-bold">Tarun Rajput - Model Mentor and Founder of NTMGS</h1>
                    </div>

                    <PageantTrainingCarousel />

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold">Principle</h1>
                        <p className="mt-4 text-xl">NTMGS was founded on the principles of inclusivity and driven by urgency to make itself accessible. While we offer a lot of different services, the model training camp is our flagship course.</p>
                    </div>

                    <div className="mt-6">
                        <h1 className="text-3xl font-bold">Course Details</h1>
                        <ul className="list-disc mt-4 ml-8">
                            <li className="text-xl">14 Days Intensive Offline Training - Theory and Practicals</li>
                            <li className="text-xl">Conducted by Tarun Rajput and her team of Experts</li>
                            <li className="text-xl">Inclusive platform for budding and experienced models</li>
                            <li className="text-xl">Portfolio Shoot by Industry Professionals</li>
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="rounded border-gray-300 dark:border-gray-700 h-auto p-4 m-4"> {/* Adjusted margins and padding */}
                    <div className="p-2">
                        <h1 className="text-3xl font-bold">Tarun Rajput - Fashion Director and Grooming Expert for VG Mrs India</h1>
                    </div>

                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            title="thisframe"
                            src="https://www.youtube.com/embed/JQHlMn9_khM?si=hUXuee36mNW65LUI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold">NTMGS COMMUNITY</h1>
                        <p className="mt-4 text-xl">You will be inducted into the NTMGS Community. It's a strong network platform and a safe space for models for information about the industry as well as credible work opportunities.</p>
                    </div>

                    <div className="mt-6">
                        <h1 className="text-3xl font-bold">Modules</h1>
                        <ul className="list-disc mt-4 ml-8">
                            <li className="text-xl">Pageant Introduction</li>
                            <li className="text-xl">Your Unique Pageant Walk</li>
                            <li className="text-xl">Jury Interview Preparation</li>
                            <li className="text-xl">Posing Theory & Practical</li>
                            <li className="text-xl">Verbal & Non-verbal Communication</li>
                            <li className="text-xl">Current Affairs</li>
                            <li className="text-xl">Mindful Networking</li>
                            <li className="text-xl">Public Speaking</li>
                            <li className="text-xl">Leveraging Social Media to Build Your Personal Brand</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
