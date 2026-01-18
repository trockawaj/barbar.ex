import React from 'react';
import { motion } from 'framer-motion';

const Recruit = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div
            className="bg-barbar-black min-h-screen text-white pt-20 md:pt-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-screen">

                {/* Block 1: Main Title - Yellow */}
                <motion.div
                    className="bg-barbar-gold p-10 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-2 aspect-square md:aspect-auto"
                    variants={itemVariants}
                >
                    <div>
                        <h5 className="text-black font-bold tracking-widest text-sm mb-4">RECRUITMENT</h5>
                        <h2 className="text-black font-oswald text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]">
                            WHAT'S<br />GOING<br />ON<br />BARBAR.
                        </h2>
                    </div>
                    <div className="border-t-4 border-black pt-4 mt-8 w-16"></div>
                </motion.div>

                {/* Block 2: Image 1 */}
                <motion.div
                    className="col-span-1 md:col-span-1 lg:col-span-1 aspect-square bg-gray-800 bg-cover bg-center"
                    style={{ backgroundImage: "url('/recruit-1.png')" }}
                    variants={itemVariants}
                />

                {/* Block 3: Message - Black */}
                <motion.div
                    className="col-span-1 md:col-span-1 lg:col-span-1 aspect-square bg-barbar-black p-8 border border-[#222] flex flex-col justify-center"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-oswald text-white mb-4">WANTED</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        We are looking for barbers who share our passion for tradition and innovation. Join our team and define the future of style.
                    </p>
                    <button className="text-barbar-gold border border-barbar-gold px-6 py-2 hover:bg-barbar-gold hover:text-black transition-colors uppercase tracking-widest text-sm w-fit">
                        Apply Now
                    </button>
                </motion.div>

                {/* Block 4: Guideline - Black/Gray */}
                <motion.div
                    className="col-span-1 md:col-span-1 lg:col-span-1 aspect-square bg-[#151515] p-8 flex flex-col justify-between group cursor-pointer hover:bg-zinc-800 transition-colors"
                    variants={itemVariants}
                >
                    <h3 className="text-3xl font-oswald text-white group-hover:text-barbar-gold transition-colors">GUIDE<br />LINE</h3>
                    <div className="self-end">
                        <span className="text-2xl">→</span>
                    </div>
                </motion.div>

                {/* Block 5: Image 2 */}
                <motion.div
                    className="col-span-1 md:col-span-1 lg:col-span-1 aspect-square bg-gray-800 bg-cover bg-center"
                    style={{ backgroundImage: "url('/recruit-2.png')" }}
                    variants={itemVariants}
                />

                {/* Block 6: Contact - Yellow */}
                <motion.div
                    className="col-span-1 md:col-span-1 lg:col-span-1 aspect-square bg-barbar-gold p-8 flex flex-col justify-between group cursor-pointer hover:bg-yellow-400 transition-colors"
                    variants={itemVariants}
                >
                    <h3 className="text-3xl font-oswald text-black">CONTACT</h3>
                    <p className="text-black text-sm">Have specific questions?</p>
                    <div className="self-end text-black">
                        <span className="text-2xl">→</span>
                    </div>
                </motion.div>

                {/* Block 7: Small text or filler */}
                <motion.div
                    className="col-span-1 md:col-span-1 lg:col-span-1 aspect-square bg-[#111] p-8 flex items-center justify-center text-center"
                    variants={itemVariants}
                >
                    <p className="text-gray-500 font-oswald tracking-[0.2em] text-sm">BARBAR<br />EST. 2026</p>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Recruit;
