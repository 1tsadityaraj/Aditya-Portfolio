import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const MagneticButton = ({ children, className, onClick, href, as = "button", ...props }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Bouncy spring physics for the organic feel
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    
    // Mouse relative coordinates
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        
        // Calculate distance from center
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        // Intensity of the pull
        const pullStrength = 0.5;
        
        x.set((clientX - centerX) * pullStrength);
        y.set((clientY - centerY) * pullStrength);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const MotionTag = motion(as);

    return (
        <MotionTag
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{ x, y }}
            className={`${className} cursor-pointer inline-block`}
            {...props}
        >
            {/* Inner content can also have a slight parallax effect */}
            <motion.div 
                style={{ 
                    x: useTransform(x, (v) => v * 0.2), 
                    y: useTransform(y, (v) => v * 0.2) 
                }}
            >
                {children}
            </motion.div>
        </MotionTag>
    );
};

export default MagneticButton;
