"use client";
import React, { useState } from 'react';
import { ShieldCheck, Database, Code, Globe, Rocket, User, Sparkles } from 'lucide-react';

const SkillsSection = () => {
    const [hoverState, setHoverState] = useState({});

    const handleMouseEnter = (id) => {
        setHoverState(prev => ({ ...prev, [id]: true }));
    };

    const handleMouseLeave = (id) => {
        setHoverState(prev => ({ ...prev, [id]: false }));
    };

    return (
        <div className="min-h-70vh bg-black text-white p-4 md:p-6 lg:p-8 flex flex-col">
            <div className="max-w-6xl mx-auto w-full">


                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full">

                    <div
                        className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-6 h-auto sm:h-auto flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-purple-500/20 w-full sm:w-1/3 lg:w-1/3"
                        onMouseEnter={() => handleMouseEnter('skills')}
                        onMouseLeave={() => handleMouseLeave('skills')}
                    >
                        <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Next.js', 'React', 'Tailwind CSS', 'ShadCN UI', 'MongoDB', 'REST APIs'].map((skill) => (
                                <span key={skill} className="bg-black/30 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className={`flex flex-col items-center transition-all ${hoverState.skills ? 'transform translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}>
                                <Code className="text-teal-400 mb-1" size={20} />
                                <span className="text-xs text-gray-400">Frontend</span>
                            </div>
                            <div className={`flex flex-col items-center transition-all delay-75 ${hoverState.skills ? 'transform translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}>
                                <Database className="text-purple-400 mb-1" size={20} />
                                <span className="text-xs text-gray-400">Backend</span>
                            </div>
                            <div className={`flex flex-col items-center transition-all delay-150 ${hoverState.skills ? 'transform translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}>
                                <Globe className="text-blue-400 mb-1" size={20} />
                                <span className="text-xs text-gray-400">APIs</span>
                            </div>
                        </div>
                    </div>


                    <div
                        className="rounded-xl overflow-hidden bg-gradient-to-br from-black/60 to-transparent relative group w-full sm:w-2/3 lg:w-2/3"
                        onMouseEnter={() => handleMouseEnter('profile')}
                        onMouseLeave={() => handleMouseLeave('profile')}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-black z-10"></div>
                        <div className="relative z-20 h-full p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <div className="mb-6 sm:mb-0 w-full sm:w-1/2">
                                <div className="bg-black/30 inline-block px-3 py-1 rounded-full text-xs text-blue-300 mb-2">
                                    Full Stack Developer
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">My Developer Profile</h3>
                                <p className="text-gray-200 mb-4 text-sm sm:text-base max-w-lg">
                                    Passionate developer creating modern web applications with a focus on user experience and performance. Specializing in React, Next.js, and full-stack development.
                                </p>
                                <button
                                    className="bg-transparent border border-white text-white hover:bg-white/10 px-4 py-2 rounded-md transition-all items-center text-sm"
                                >
                                    <a href='https://drive.google.com/file/d/1r4mzCJ2aVSo869InkDzy8cpA16sVKiA1/view?usp=sharing' target='_blank' rel="noopener noreferrer">Download Resume</a>
                                </button>
                            </div>

                            <div className="bg-gradient-to-br from-black/10 to-gray-900 p-4 md:p-6 rounded-xl w-full sm:w-auto mt-6 sm:mt-0">
                                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4">                                    <div className="bg-black/30 rounded-lg p-3 md:p-4 transform transition-transform hover:scale-105">
                                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">4+</div>
                                    <div className="text-gray-300 text-xs sm:text-sm">Years Experience</div>
                                </div>
                                    <div className="bg-black/30 rounded-lg p-3 md:p-4 transform transition-transform hover:scale-105">
                                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-400">5+</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Projects</div>
                                    </div>
                                    <div className="bg-black/30 rounded-lg p-3 md:p-4 transform transition-transform hover:scale-105">
                                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">3+</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Happy Clients</div>
                                    </div>
                                    <div className="bg-black/30 rounded-lg p-3 md:p-4 transform transition-transform hover:scale-105">
                                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">100%</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl transition-all duration-700 group-hover:bg-blue-400/30 group-hover:w-72 group-hover:h-72"></div>
                        <div className="absolute -top-20 -left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl transition-all duration-700 group-hover:bg-indigo-400/30"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillsSection;