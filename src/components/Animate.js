import React, { useEffect, useRef, useState } from "react";
import "../style.css";

const Animate = ({ children, animation = "fade-in", duration = 0.5, delay = 0, threshold = 0.1 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Khi element trở nên hiển thị trên viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            {
                threshold: threshold,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`animate-element ${isVisible ? animation : ""}`}
            style={{
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
};

export default Animate; 