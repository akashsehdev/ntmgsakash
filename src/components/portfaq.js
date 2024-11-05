import React from "react";
function Index() {
    return (
        <>
            <div className="container mt-32 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded mt-12  " >
                    <div className="rounded  " >
                        <img src='/model5.png' className="object-contain md:object-cover object-center md:h-full h-64 w-full" alt="model" />
                    </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded w-full " >
                    <div className="rounded mt-8 " >

                        <h1 className="lg:text-4xl text-4xl font-bold text-center  leading-tight text-gray-800">
                            FAQ'S
                        </h1>




                        <p className="text-2xl font-bold mt-16 px-4">  How many pictures and what type of pictures will I get? </p>
                        <p className="mt-2 text-xl text-justify px-4">
                            You'll receive 12 edited photos in all, with three fashion looks and one simple look-
                        </p>
                        <ul className="list-decimal mt-8 ml-16 px-4">
                            <li className="text-xl">Black and white portrait</li>
                            <li className="text-xl">Full length picture</li>
                            <li className="text-xl">Mid-length picture</li>
                            <li className="text-xl">Polaroid picture</li>
                        </ul>



                        <p className="text-2xl font-bold mt-8 px-4"> Do I have to bring my own outfits and makeup? </p>

                        <p className="mt-8   text-xl text-justify px-4">
                            Absolutely not! On the day of the shoot we will have a team of grooming experts who highlight your best features and work on showing your personality through your final looks. You just need to bring the right attitude and we'll take care of the rest.
                        </p>



                    </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded " >
                    <div className="rounded mt-12" >
                        <img src='/westmodel13.png' className=" object-contain md:object-cover object-center md:h-full h-64 w-full" alt="model" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;

