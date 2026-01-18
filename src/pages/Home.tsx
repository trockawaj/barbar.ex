import React from 'react';
import Hero from '../components/Sections/Hero';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <div className="mb-12 text-center" id={id}>
        <motion.h2
            className="text-4xl md:text-5xl font-oswald font-bold text-white tracking-[0.2em] relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {children}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-barbar-green"></span>
        </motion.h2>
    </div>
);

const Home = () => {
    return (
        <div className="bg-barbar-black text-white">
            <Hero />

            {/* CONCEPT */}
            <section className="py-32 px-8 md:px-24 bg-[#111]" id="concept">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-barbar-green tracking-[0.3em] text-sm mb-4 font-bold">OUR PHILOSOPHY</p>
                    <h2 className="text-4xl md:text-5xl font-oswald mb-12 leading-tight">
                        TRADITION MEETS SOUL.
                    </h2>
                    <p className="text-gray-400 leading-loose text-lg font-light">
                        BARBAR is more than a barbershop.<br />
                        It is a sanctuary for the modern gentleman.<br />
                        We blend classic techniques with contemporary style to create a look that is uniquely yours.<br />
                        Relax, unwind, and let us take care of the rest.
                    </p>
                </div>
            </section>

            {/* SALON INFO */}
            <section className="py-32 px-8 md:px-24 bg-barbar-black" id="salon">
                <SectionTitle id="salon-title">SALON INFO</SectionTitle>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    <div className="space-y-6">
                        <div className="border-l-2 border-barbar-green pl-6">
                            <h3 className="text-xl font-oswald tracking-widest mb-2">ADDRESS</h3>
                            <p className="text-gray-400">1-23-4 Minami-Aoyama, Minato-ku,<br />Tokyo, 107-0062</p>
                        </div>
                        <div className="border-l-2 border-barbar-green pl-6">
                            <h3 className="text-xl font-oswald tracking-widest mb-2">HOURS</h3>
                            <p className="text-gray-400">
                                WEEKDAYS: 11:00 - 21:00<br />
                                WEEKENDS: 10:00 - 19:00<br />
                                CLOSED: MONDAY
                            </p>
                        </div>
                        <div className="border-l-2 border-barbar-green pl-6">
                            <h3 className="text-xl font-oswald tracking-widest mb-2">TEL</h3>
                            <p className="text-gray-400">03-1234-5678</p>
                        </div>
                    </div>
                    {/* Map Placeholder */}
                    <div className="h-64 md:h-full bg-gray-800 flex items-center justify-center border border-[#333]">
                        <span className="text-gray-600 tracking-widest">MAP AREA</span>
                    </div>
                </div>
            </section>

            {/* MENU */}
            <section className="py-32 px-8 md:px-24 bg-[#151515]" id="menu">
                <SectionTitle id="menu-title">MENU</SectionTitle>
                <div className="max-w-3xl mx-auto space-y-8 mt-16">
                    {[
                        { name: 'STANDARD CUT', price: '¥6,600', description: 'Cut, Shampoo, Shave, Set' },
                        { name: 'FADE CUT', price: '¥7,700', description: 'Skin Fade, Shampoo, Shave, Set' },
                        { name: 'PERM', price: '¥13,200~', description: 'Cut included' },
                        { name: 'COLOR', price: '¥13,200~', description: 'Cut included' },
                        { name: 'HEAD SPA', price: '¥4,400', description: '30min Relaxation' }
                    ].map((item, index) => (
                        <div key={index} className="flex justify-between items-end border-b border-[#333] pb-4 group hover:border-barbar-gold transition-colors">
                            <div>
                                <h4 className="text-xl font-oswald tracking-wider group-hover:text-barbar-gold transition-colors">{item.name}</h4>
                                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                            </div>
                            <span className="text-xl font-oswald tracking-widest">{item.price}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* SNS */}
            <section className="py-32 px-8 text-center bg-barbar-black" id="sns">
                <h2 className="text-6xl md:text-8xl font-oswald font-bold text-[#1a1a1a] mb-8 relative">
                    INSTAGRAM
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl text-barbar-gold pointer-events-none">FOLLOW US</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-gray-800 hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
                            <span className="text-gray-600">POST {i}</span>
                        </div>
                    ))}
                </div>
                <button className="mt-12 border border-white px-8 py-3 text-sm tracking-[0.3em] hover:bg-white hover:text-black transition-colors">
                    VIEW MORE
                </button>
            </section>

            {/* FOOTER */}
            <footer className="py-8 bg-black text-center text-gray-600 text-[10px] tracking-widest border-t border-[#222]">
                &copy; 2026 BARBAR ALL RIGHTS RESERVED.
            </footer>
        </div>
    );
};

export default Home;
