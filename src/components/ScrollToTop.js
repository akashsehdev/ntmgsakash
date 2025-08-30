// src/components/ScrollToTop.js
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // npm install lucide-react
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();

    // 👇 Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    // 👇 Show/hide arrow on scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-20 right-6 p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-all z-30"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>

            )}
        </>
    );
}
