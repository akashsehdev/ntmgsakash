import React from 'react'

export default function dynamiccourse(props) {
  return (
    <div className=" shadow-[rgba(0,0,15,0.5)_10px_0px_0px_0px]  ml-2 z-10 bg-gray-100 rounded-t-full border-gray-300 rounded-lg " >
     <div className="w-full h-full mt-4 flex items-center justify-center dark:bg-gray-900">
                    <img src={props.imgurl} alt="Background " class="object-cover mt-10 object-center md:h-auto h-64 " />
                </div>

                <div className=" shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] -mt-36 pb-16  bg-gray-100 rounded border-gray-300   h-72" >
                <div className="w-full h-full flex items-center justify-center dark:bg-gray-900">
                <p className="w-2/4 text-4xl font-bold leading-normal text-center text-gray-800 mt-52 dark:text-gray-100">{props.imgtitle}</p>
                </div>
                </div>
    </div>
  )
}
