'use client';
import backgroundimage from '../../../public/Images/Imagebackground.png';
import ReactIcon from '../../../public/Images/ReactICon.png';
import Figma from '../../../public/Images/Figma.png'; //
import NodeJs from '../../../public/Images/NodeJs.png';
import React from 'react';


export default function ExpertiseSection() {
    return (
        <section className="w-full py-12 relative overflow-hidden bg-black text-white">

            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover mt-35 h-[50vh] sm: mt-55 bg-center"
                    style={{ backgroundImage: `url(${backgroundimage.src})`, opacity: 0.5 }}
                />
            </div>


            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-center mt-15 text-white text-3xl md:text-4xl font-mono mb-8 md:mb-12">Expertise</h2>

                <div className="mx-auto max-w-4xl">
                    <div className="hidden md:block">
                        <table className="w-full border border-gray-700 text-white">
                            <tbody>
                                <tr>
                                    {/* Frontend Development  */}
                                    <td className="p-6 md:p-8 border-r border-gray-700 w-1/3">
                                        <div className="flex items-center mb-4">
                                            <div className="mr-3 w-8 h-8">

                                                <div className="w-8 h-8">
                                                    <img src={ReactIcon.src} alt="Frontend" className="w-full h-full object-contain" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-teal-400 font-bold text-lg">Frontend</h3>
                                                <p className="text-white font-bold">Development</p>
                                            </div>
                                        </div>

                                        <p className="text-sm leading-relaxed">
                                            Experienced in <span className="text-teal-400">React</span>, <span className="text-white">HTML</span>, <span className="text-teal-400">CSS</span>, <span className="text-white">JavaScript</span>, and <span className="text-teal-400">Next.js</span> for building responsive user <span className="text-teal-400">interfaces</span>.
                                        </p>
                                    </td>

                                    {/* UI/UX Designer  */}
                                    <td className="p-6 md:p-8 border-r border-gray-700 w-1/3">
                                        <div className="flex items-center mb-4">
                                            <div className="mr-3 w-8 h-8">

                                                <div className="w-8 h-8 text-yellow-400">
                                                    <img src={Figma.src} alt="UI/UX" className="w-full h-full object-contain" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-white-400 font-bold text-lg">UI/UX</h3>
                                                <p className="text-yellow-400 font-bold">Designer</p>
                                            </div>
                                        </div>

                                        <p className="text-sm leading-relaxed ">
                                            Proficient in <span className="text-yellow-400">Figma</span> and <span className="text-yellow-400">Adobe XD</span>, creating intuitive and visually <span className="text-yellow-400">appealing</span> user interfaces.
                                        </p>
                                    </td>

                                    {/* Backend Development  */}
                                    <td className="p-6 md:p-8 w-1/3">
                                        <div className="flex items-center mb-4">
                                            <div className="mr-3 w-8 h-8">

                                                <div className="w-8 h-8 text-green-400">
                                                    <img src={NodeJs.src} alt="Backend" className="w-full h-full object-contain" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg">Backend</h3>
                                                <p className="text-green-400 font-bold">Development</p>
                                            </div>
                                        </div>

                                        <p className="text-sm leading-relaxed">
                                            Experienced in <span className="text-green-400">SQL</span>, <span className="text-green-400">Prisma</span>, and <span className="text-green-400">MongoDB</span>, building scalable and secure <span className="text-green-400">APIs</span>.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Responsive view Mobile */}
                    <div className="md:hidden">
                        <div className="border border-gray-700 mb-4">
                            <div className="p-6 border-b border-gray-700 last:border-b-0">
                                <div className="flex items-center mb-4">
                                    <div className="mr-3 w-8 h-8">

                                        <div className="w-8 h-8 text-teal-400">
                                            <img src={ReactIcon.src} alt="Frontend" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-teal-400 font-bold text-lg">Frontend</h3>
                                        <p className="text-white font-bold">Development</p>
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed">
                                    Experienced in <span className="text-teal-400">React</span>, <span className="text-white">HTML</span>, <span className="text-teal-400">CSS</span>, <span className="text-white">JavaScript</span>, and <span className="text-teal-400">Next.js</span> for building responsive user <span className="text-teal-400">interfaces</span>.
                                </p>
                            </div>

                            <div className="p-6 border-b border-gray-700 last:border-b-0">
                                <div className="flex items-center mb-4">
                                    <div className="mr-3 w-8 h-8">

                                        <div className="w-8 h-8 text-yellow-400">
                                            <img src={Figma.src} alt="UI/UX" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-yellow-400 font-bold text-lg">UI/UX</h3>
                                        <p className="text-yell font-bold">Designer</p>
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed">
                                    Proficient in <span className="text-yellow-400">Figma</span> and <span className="text-yellow-400">Adobe XD</span>, creating intuitive and visually <span className="text-yellow-400">appealing</span> user interfaces.
                                </p>
                            </div>

                            <div className="p-6 border-b border-gray-700 last:border-b-0">
                                <div className="flex items-center mb-4">
                                    <div className="mr-3 w-8 h-8">

                                        <div className="w-8 h-8 text-green-400">
                                            <img src={NodeJs.src} alt="Backend" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                    <div>
                                     W   <h3 className="text-green-400 font-bold text-lg">Backend</h3>
                                        <p className="text-white font-bold">Development</p>
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed">
                                    Experienced in <span className="text-green-400">SQL</span>, <span className="text-green-400">Prisma</span>, and <span className="text-green-400">MongoDB</span>, building scalable and secure <span className="text-green-400">APIs</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}