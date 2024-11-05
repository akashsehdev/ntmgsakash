import React from "react";

const Banner8 = () => {
    return (
        <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
            {/* Flexbox container for course flow */}
            <div className="flex justify-between bg-gray-50 items-stretch flex-col md:flex-row w-full">
                
                {/* Vertical label for Course Flow (hidden on small and medium devices) */}
                <div className="hidden lg:flex items-center bg-gray-800 justify-center md:flex-col md:mr-4">
                    <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">
                        Course Flow
                    </p>
                </div>

                {/* Course Parts Container */}
                <div className="flex flex-col md:flex-row w-full md:w-auto">
                    {/* Part 1 */}
                    <div className="flex flex-col w-full md:w-1/4 px-4 py-5">
                        <p className="text-2xl font-semibold leading-9 text-gray-800">PART 1</p>
                        <p className="text-justify xl:text-xl leading-7 text-gray-600">
                            The course begins with a 14-day long Intensive Offline Training. This training period entails interactive theory sessions with our personality development expert, followed by practical training, where students learn about posture, self-confidence, and body language.
                        </p>
                    </div>

                    {/* Part 2 */}
                    <div className="flex flex-col w-full md:w-1/4 px-4 py-5">
                        <p className="text-2xl font-semibold leading-9 text-gray-800">PART 2</p>
                        <p className="text-justify xl:text-xl leading-7 text-gray-600">
                            On the 10th day of the Offline section, we conduct a complete Portfolio Shoot for students' Pageant applications, directed by Tarun Rajput with the best photographers and makeup teams.
                        </p>
                    </div>

                    {/* Part 3 */}
                    <div className="flex flex-col w-full md:w-1/4 px-4 py-5">
                        <p className="text-2xl font-semibold leading-9 text-gray-800">PART 3</p>
                        <p className="text-justify xl:text-xl leading-7 text-gray-600">
                            After Offline Training, we conduct 8 sessions consisting of online revisions, knowledge transfer, quizzes, and assessments, with exclusive resources for our pageant community.
                        </p>
                    </div>

                    {/* Part 4 */}
                    <div className="flex flex-col w-full md:w-1/4 px-4 py-5">
                        <p className="text-2xl font-semibold leading-9 text-gray-800">PART 4</p>
                        <p className="text-justify xl:text-xl leading-7 text-gray-600">
                            We hold Booster Sessions before pageant dates to help students prepare mentally and physically, ensuring lifetime access to mentors and community resources.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner8;
