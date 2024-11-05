import React from "react";
function Index() {
    return (
        <>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded  " >
                <div className="rounded  " >
                        <img src='/westmodel12.png' className=" object-contain md:object-cover object-center md:h-auto h-64 w-full" alt="model" />
                        </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded w-full " >
                <div className="rounded mt-16 " >
                        
                        <h1  className="lg:text-4xl text-4xl font-bold text-center  leading-tight text-gray-800">
                        DO I NEED A PORTFOLIO?
                                                </h1>
                                                
                        
                        
                        
                                               <p className="mt-16 text-xl text-justify px-4">
                                               As a model, having a portfolio is essential. It serves as a visual resume, showcasing your versatility, range, and professionalism to potential clients and agencies. A well-curated portfolio not only highlights your best work but also demonstrates your ability to embody different looks, styles, and expressions. 
                                               </p><p className="mt-8 text-xl text-justify px-4">
                                                Whether it's for runway, print, or digital media, a portfolio allows you to present yourself effectively and make a lasting impression in the competitive world of modeling. So, yes, having a portfolio is not just beneficial but crucial for advancing your career in the industry.
                                               </p>
                                                
                        
                        
                                                </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded " >
                <div className="rounded  " >
                        <img src='/westmodel7.png' className=" object-contain md:object-cover object-center md:h-auto h-64 w-full" alt="model" />
                        </div>
                </div>
            </div>
        </>
    );
}
export default Index;

