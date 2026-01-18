import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <motion.p
                    className="text-barbar-green tracking-[0.5em] text-sm md:text-lg mb-4 font-sans font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    TRADITIONAL & MODERN
                </motion.p>
                <motion.h2
                    className="text-5xl md:text-8xl font-oswald font-bold tracking-widest mb-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    BARBAR
                </motion.h2>
                <motion.h3
                    className="text-xl md:text-3xl font-oswald tracking-[0.3em] text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    PREMIUM STYLE
                </motion.h3>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
                    <span className="text-[10px] tracking-widest mt-2 text-gray-400">SCROLL</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
