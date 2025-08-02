import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import Registercontact from "../components/registercontact";

const FormPopupCTA = () => {
    const [showPopup, setShowPopup] = useState(false);

    // Show popup on first load
    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Re-show popup every 2 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            setShowPopup(true);
        }, 2 * 60 * 1000); // 2 mins
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setShowPopup(true)}
                className="fixed  bottom-6 right-6 z-40 bg-black text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
            >
                Register Now
            </button>

            {/* Modal Popup */}
            {showPopup &&
                createPortal(
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
                        <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto">
                            {/* Close Button */}
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-3 right-3 text-gray-600 hover:text-black transition"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Form Component */}
                            <Registercontact />
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default FormPopupCTA;
