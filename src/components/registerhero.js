export default function Registerhero() {
    return (
      <div className="relative from-gray-100 to-gray-500 h-[70vh] text-white overflow-hidden">
        {/* Background Image for Larger Screens */}
        <div className="absolute inset-0 hidden sm:block">
          <img 
            src="/hero.jpg" 
            alt="Background" 
            className="object-cover w-full h-full" 
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
  
        {/* Background Image for Smaller Screens */}
        <div className="block sm:hidden relative h-full w-full">
          <img 
            src="/pic16.png" 
            alt="Background" 
            className="object-contain w-full h-50 pt-28" // Changed to object-contain with full width and height
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      </div>
    );
  }
  