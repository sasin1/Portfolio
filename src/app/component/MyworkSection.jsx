"use client"
import { useState, useEffect } from 'react';

const MyworkSection = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [deviceType, setDeviceType] = useState('desktop');


    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setDeviceType('mobile');
            } else if (width >= 768 && width < 1024) {
                setDeviceType('tablet');
            } else if (width >= 1024 && width < 1440) {
                setDeviceType('laptop');
            } else {
                setDeviceType('desktop');
            }

            if (width < 1024 && activeCard !== null) {
                setActiveCard(null);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [activeCard]);

    const handleCardClick = (cardIndex) => {
        if (deviceType === 'laptop' || deviceType === 'desktop') {
            setActiveCard(cardIndex === activeCard ? null : cardIndex);
        } else if (deviceType === 'tablet') {

            setActiveCard(cardIndex === activeCard ? null : cardIndex);
        }

    };

    const getCardStyle = (cardIndex) => {
        if (deviceType === 'mobile') {

            return {
                position: 'relative',
                width: '100%',
                marginBottom: '1rem',
                transform: 'none',
                zIndex: 10 - cardIndex,
                height: "200px",
                transition: "all 0.5s ease",
                overflow: "hidden"
            };
        } else if (deviceType === 'tablet') {

            return {
                position: 'relative',
                width: '100%',
                height: "220px",
                transform: 'none',
                zIndex: activeCard === cardIndex ? 40 : 10,
                transition: "all 0.5s ease",
                overflow: "hidden",
                boxShadow: activeCard === cardIndex ? '0 10px 25px rgba(0, 0, 0, 0.5)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                transform: activeCard === cardIndex ? 'scale(1.05)' : 'scale(1)'
            };
        } else {

            const baseOffset = {
                1: { x: 0, y: 0, rotate: 0 },
                2: { x: -30, y: -15, rotate: -3 },
                3: { x: -60, y: -30, rotate: -6 },
                4: { x: -90, y: -45, rotate: -9 },
            };

            if (activeCard === cardIndex) {
                return {
                    transform: 'translateX(0) rotate(0deg)',
                    zIndex: 40,
                    height: "360px",
                    overflow: "hidden"
                };
            } else if (activeCard === null) {
                return {
                    transform: `translateX(${baseOffset[cardIndex].x}px) translateY(${baseOffset[cardIndex].y}px) rotate(${baseOffset[cardIndex].rotate}deg)`,
                    zIndex: 10 - cardIndex + 1,
                    height: "360px",
                    overflow: "hidden"
                };
            } else if (activeCard < cardIndex) {
                return {
                    transform: `translateX(${baseOffset[cardIndex].x}px) translateY(${baseOffset[cardIndex].y}px) rotate(${baseOffset[cardIndex].rotate}deg)`,
                    zIndex: 10 - cardIndex + 1,
                    height: "360px",
                    overflow: "hidden"
                };
            } else {
                return {
                    transform: `translateX(${(activeCard - cardIndex) * -15 + baseOffset[cardIndex].x}px) translateY(${(activeCard - cardIndex) * 5 + baseOffset[cardIndex].y}px) rotate(${(activeCard - cardIndex) * -1 + baseOffset[cardIndex].rotate}deg)`,
                    zIndex: 10 - cardIndex + 1,
                    height: "360px",
                    overflow: "hidden"
                };
            }
        }
    };

    const getLayoutClass = () => {
        if (deviceType === 'mobile') {
            return 'flex flex-col w-full';
        } else if (deviceType === 'tablet') {
            return 'grid grid-cols-2 gap-4 w-full';
        } else {
            return 'relative h-96';
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex flex-col items-center justify-start">

            <h1 className="text-2xl md:text-4xl font-mono mt-6 md:mt-8 lg:mt-20 mb-16 md:mb-3 lg:mb-36 tracking-wider text-center">My Works</h1>

            <div className={`w-full max-w-5xl mx-auto ${deviceType === 'tablet' ? 'flex flex-col items-center' : 'flex flex-col lg:flex-row items-center'} gap-4 lg:gap-16 px-4 md:px-6 lg:px-12`}>

                <div className={`${getLayoutClass()} w-full ${deviceType === 'laptop' || deviceType === 'desktop' ? 'lg:w-3/5' : 'w-full'} mt-6 md:mt-10`}>
                    {/* Card 1 */}
                    <div
                        key={1}
                        className={`${deviceType !== 'desktop' && deviceType !== 'laptop' ? '' : 'absolute'} w-full rounded-lg shadow-xl transition-all duration-500 cursor-pointer bg-black text-white border-2 border-gray-500`}
                        style={getCardStyle(1)}
                        onClick={() => handleCardClick(1)}
                    >
                        <div className="relative h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10 rounded-lg"></div>
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: `url('/Images/ImagePortfolio.png')`,
                                    opacity: activeCard === 1 ? 1 : 0.7
                                }}
                            ></div>
                            {deviceType === 'tablet' && (
                                <div className="absolute bottom-0 left-0 w-full p-3 z-20">
                                    <h3 className="text-white text-sm font-bold">Portfolio</h3>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        key={2}
                        className={`${deviceType !== 'desktop' && deviceType !== 'laptop' ? '' : 'absolute'} w-full rounded-lg shadow-xl transition-all duration-500 cursor-pointer bg-amber-50 text-gray-800 border-2 border-amber-200`}
                        style={getCardStyle(2)}
                        onClick={() => handleCardClick(2)}
                    >
                        <div className="relative h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10 rounded-lg"></div>
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: `url('/Images/Momo.png')`,
                                    opacity: activeCard === 2 ? 1 : 0.7
                                }}
                            ></div>
                            {deviceType === 'tablet' && (
                                <div className="absolute bottom-0 left-0 w-full p-3 z-20">
                                    <h3 className="text-white text-sm font-bold">House of Momos</h3>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        key={3}
                        className={`${deviceType !== 'desktop' && deviceType !== 'laptop' ? '' : 'absolute'} w-full rounded-lg shadow-xl transition-all duration-500 cursor-pointer bg-black text-white border-2 border-pink-500`}
                        style={getCardStyle(3)}
                        onClick={() => handleCardClick(3)}
                    >
                        <div className="relative h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10 rounded-lg"></div>
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: `url('/Images/shreebrowbar.png')`,
                                    opacity: activeCard === 3 ? 1 : 0.7
                                }}
                            ></div>
                            {deviceType === 'tablet' && (
                                <div className="absolute bottom-0 left-0 w-full p-3 z-20">
                                    <h3 className="text-white text-sm font-bold">Beauty Website</h3>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div
                        key={4}
                        className={`${deviceType !== 'desktop' && deviceType !== 'laptop' ? '' : 'absolute'} w-full rounded-lg shadow-xl transition-all duration-500 cursor-pointer bg-black text-white border-2 border-green-500`}
                        style={getCardStyle(4)}
                        onClick={() => handleCardClick(4)}
                    >
                        <div className="relative h-full flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10 rounded-lg"></div>
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: `url('/Images/Wevona.png')`,
                                    opacity: activeCard === 4 ? 1 : 0.7
                                }}
                            ></div>
                            {deviceType === 'tablet' && (
                                <div className="absolute bottom-0 left-0 w-full p-3 z-20">
                                    <h3 className="text-white text-sm font-bold">Marketing Platform</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className={`w-full ${deviceType === 'tablet' ? 'mt-8' : deviceType === 'laptop' || deviceType === 'desktop' ? 'lg:w-2/5' : 'w-full'} flex flex-col items-center ${deviceType === 'laptop' || deviceType === 'desktop' ? 'lg:items-start' : 'items-center'} justify-center mt-10 lg:mt-0`}>
                    <div className={`${deviceType === 'laptop' || deviceType === 'desktop' ? 'text-center lg:text-left' : 'text-center'} max-w-md`}>
                        <p className="text-sm md:text-base text-gray-300 font-mono leading-relaxed">
                            I designed and developed a portfolio, beauty website, marketing platform, and House of Momos using WordPress, Tailwind, React, Figma, and Adobe, ensuring scalability, responsiveness, and user-friendly designs.
                        </p>

                        <div className="mt-8 flex justify-center lg:justify-start">
                            <button className="px-6 py-3 bg-teal-600 text-white text-xs uppercase tracking-wider rounded hover:bg-teal-700 transition-colors">
                                VIEW PROJECTS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyworkSection;