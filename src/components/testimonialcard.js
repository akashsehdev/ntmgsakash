import React from "react";
export default function IndexPage(props) {
    console.log("props are")
    console.log(props.imgs)
    return (
       
        <>
            <div className="mx-auto container dark:bg-gray-900 xl:px-0 px-4 py-16">
                {/* <div className="w-auto p-2">
                    <div className="w-full grid place-items-center h-48 relative">
                        <img src={props.imgs} className="w-full h-full" alt="cover" />
                     
                        <div class="absolute">
                        <svg  width="50px" height="50px" viewBox="0 0 20 20" version="1.1" >
   
    <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-821.000000, -378.000000)" id="Group">
            <g transform="translate(819.000000, 376.000000)" id="Shape">
                <circle stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" cx="12" cy="12" r="9">

</circle>
                <path d="M9.99806947,8.42746827 L15.4902873,11.5658784 C15.730046,11.7028834 15.8133443,12.0083107 15.6763394,12.2480695 C15.6320447,12.3255851 15.5678029,12.3898269 15.4902873,12.4341216 L9.99806947,15.5725317 C9.75831075,15.7095367 9.45288341,15.6262384 9.31587843,15.3864796 C9.27270766,15.3109308 9.25,15.2254236 9.25,15.1384102 L9.25,8.86158984 C9.25,8.58544746 9.47385763,8.36158984 9.75,8.36158984 C9.83701347,8.36158984 9.92252062,8.3842975 9.99806947,8.42746827 Z" fill="#ffffff">

</path>
            </g>
        </g>
    </g>
</svg>
</div>
                       
                    </div>
                    
                    
                    
                   
                </div> */}

                <div class="aspect-w-16 aspect-h-9 ml-2">
  <iframe title="thisframe" src={props.imgs} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div className="xl:flex items-start py-5">
                        <div>
                            <p className="font-bold sm:text-large text-large text-gray-900 dark:text-gray-100">{props.caps}</p>
                        </div>
                        
                    </div>

            </div>
        </>
    );
}
