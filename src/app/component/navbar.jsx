'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { Lexend_Exa } from "next/font/google";


const lexendExa = Lexend_Exa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lexend-exa" });

function NavBar() {

     const [isOpen, setIsOpen] = useState(false);

      const navLinks = [
        { name: 'Home', href: 'http://localhost:3000/#Home', active: true},
        { name: 'Works', href: 'http://localhost:3000/#Works', active: false },
        { name: 'About', href: 'http://localhost:3000/#About', active: false },
        { name: 'Contact', href: 'http://localhost:3000/#Form', active: false },
      ];

  return (

<>

<div className={`relative z-10 bg-black text-teal-400 text-xl font-bold ${lexendExa.className}`}>
        {/* navbar */}
        <nav className=" flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6" id='Home'>
          <div className={`text-teal-400 text-xl font-bold`} >
            Sasin<span className="text-white">._</span>
          </div>

          <div className="hidden  md:flex flex-1 justify-center mr-[5rem] gap-4 lg:gap-10">
            {navLinks.map((link) => (
              <Link

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
</div>

</>
  )
}

export default NavBar;