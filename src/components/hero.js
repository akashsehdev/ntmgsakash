import { Link } from 'react-router-dom';

export default function Hero ()  {
    return (
        <>
       <div class="hidden lg:block relative  from-gray-100 to-gray-500 h-[70vh] text-white overflow-hidden">
  <div class="absolute inset-0">
    {/* <img src="/trnewhero.png" alt="Background " class="object-cover ml-32 object-center" /> */}
    <img src="/pic16.png" alt="Background" class="object-cover ml-16 object-center" />
    <div class="absolute inset-0 bg-black opacity-20"></div>
  </div>
  
  <div class="flex flex-row items-center justify-end mr-48 h-full">
  <div class="relative z-10 flex flex-col justify-center mr-32 items-center ">
  <img src="/ntmgslogo.png" class="h-3/4 w-3/4" alt="Background " />

  <br /><br />
    {/* <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p> */}
     <Link to="/register"  className="cursor-pointer">
    <button class="bg-black text-gray-100 hover:bg-gray-700 py-2 px-6 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Enroll Here</button>
    </Link>
  </div>
  </div>
</div>


{/* small screen */}
<div class="xl:hidden bg-gray-100  mb-4 from-gray-100 to-gray-500 h-80 text-white overflow-hidden">

<div class="absolute mt-12   ml-2">
 
    <img src="/pic16.png" alt="Background " class="object-cover  mt-16 w-1/2 h-1/2  object-center" />
    {/* <div class="absolute inset-0 bg-black opacity-20"></div> */}
</div>
  
  <div class="flex flex-row items-center mr-12 mt-12 justify-end  h-full">
  <div class="relative z-10 flex flex-col justify-center  items-center h-full ">
  <img  src="/ntmgslogomobile.png" class="mt-4" alt="Background " />

  <br />
    {/* <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p> */}
    <Link to="/register"  className="cursor-pointer">
    <button class="bg-black text-gray-100 hover:bg-gray-700 py-2 px-6 text-xs font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Enroll Here</button>
    </Link>
  </div>
  </div>
</div>
{/* small screen ends */}

        </>
    );
  };