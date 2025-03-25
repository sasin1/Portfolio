'use client'
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-mono mb-2">
                                <span className="text-cyan-400">Sasin</span>
                                <span className="text-white">._</span>
                            </h2>
                        </div>
                        <div className="text-gray-400 text-xs font-bold sm:text-sm mt-4 md:mt-0">
                            © 2025 Sasin Neupane
                        </div>
                    </div>


                    <div className="text-left sm:text-center">
                        <h3 className="text-base sm:text-lg font-mono border-b border-gray-700 pb-2 mb-4 inline-block">
                            Connect on Socials
                        </h3>
                        <ul className="space-y-1 sm:space-y-2">
                            <li><a href="https://www.linkedin.com/in/sasin10/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">Linkedin</a></li>
                            <li><a href="https://github.com/sasin1" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">Github</a></li>

                        </ul>
                    </div>


                    <div className="text-left sm:text-right mt-6 sm:mt-0">
                        <h3 className="text-base sm:text-lg font-mono border-b border-gray-700 pb-2 mb-4 inline-block">
                            Contact
                        </h3>
                        <div className="mt-2 sm:mt-4">
                            <a href="mailto:sasinneupane69@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;