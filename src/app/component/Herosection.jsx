'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export default function Herosection() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'Expertise', href: '/expertise', active: false },
    { name: 'Works', href: '/works', active: false },
    { name: 'About', href: '/about', active: false },
    { name: 'Contact', href: '/contact', active: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/BackgroundImage.png')",
          opacity: 0.5
        }}
      />

      <div className="relative z-10">
        {/* navbar */}
        <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-teal-400 text-xl font-bold">
            Sasin<span className="text-white">._</span>
          </div>

          <div className="hidden  md:flex flex-1 justify-center mr-[5rem] gap-4 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${link.active ? 'text-teal-400' : 'text-white'
                  } hover:text-teal-400 transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-white hover:text-teal-400 transition-colors">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 border-gray-800 text-white p-0">
                <div className="flex flex-col h-full p-6">
                  <div className="flex justify-end mb-8">
                    <button onClick={() => setIsOpen(false)}>
                      <X size={24} className="text-white hover:text-teal-400" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`${link.active ? 'text-teal-400' : 'text-white'
                          } text-lg hover:text-teal-400 transition-colors`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center mt-8 sm:mt-16 lg:mt-24 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider mb-8 sm:mb-12 lg:mb-16 font-mono text-center">
            SASIN NEUPANE
          </h1>


          <Card className="w-full max-w-3xl bg-black border border-gray-800 text-white rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-black px-4 py-2 border-b border-gray-800 flex  gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-3 sm:p-4 lg:p-6 font-mono text-xs sm:text-sm bg-black" >
              <div className="text-green-500 mb-4">~</div>

              <div className="mb-4 flex flex-wrap">
                <span className="text-orange-400 mr-2">&gt;</span>
                <span className="text-green-400 mr-2">Select</span>
                <span className="text-white mr-2"> Skills, Collaborative Tools </span>
                <span className="text-green-400 mr-2">From</span>
                <span className="text-white mr-1"> Developers </span>
                <div className="w-full hidden xs:inline-block md:hidden"></div>
                <span className="text-green-400 mr-2">Where</span>
                <span className="text-white mr-2"> Name = </span>
                <span className="text-green-400 mr-2">"Sasin"</span>
                <span className="text-white mr-2">;</span>
              </div>


              <div className="overflow-x-auto -mx-3 px-3 bg-black" >
                <table className="  min-w-full font-mono text-sm text-white">
                  <thead>
                    <tr className="border-b border-dotted border-white-700 md: border-t border-t-0 border-dotted border-white-700 ">
                      <th className="text-yellow-400 border-r border-dotted py-2 text-left px-2 sm:pr-8">ID</th>
                      <th className="text-green-400 py-2 text-left  sm:pr-8 border-r px-2 border-dotted ">Name</th>
                      <th className="text-green-400 py-2 text-left sm:pr-8 border-r px-2 border-dotted ">Skills</th>
                      <th className="text-green-400 py-2 text-left border-r px-2 border-dotted ">Collaborative tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pl-2.5  sm:pr-8 border-r border-dotted  text-yellow-400 align-top">1</td>
                      <td className="py-2 px-2  sm:pr-8 border-r border-dotted  text-yellow-400 align-top">Sasin</td>
                      <td className="py-2 px-2 sm:pr-8  border-r border-dotted align-top">
                        <div>Full-stack Developer</div>
                        <div className="text-yellow-400">UI/ UX Designer</div>
                        <div>Agile Developer</div>
                      </td>
                      <td className="py-2 align-top border-r border-dotted px-2 ">
                        <div>Github</div>
                        <div>Jira</div>
                        <div className="text-yellow-400">Notion</div>
                        <div>Gitlab</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}