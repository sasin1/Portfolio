'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const JourneyProfile = () => {
  const [typedText, setTypedText] = useState('');
  const fullName = 'Sasin Neupane';
  const [isTyping, setIsTyping] = useState(true);
  const [direction, setDirection] = useState('forward');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (direction === 'forward') {
        if (typedText.length < fullName.length) {
          setTypedText(fullName.substring(0, typedText.length + 1));
        } else {
          setDirection('backward');
        }
      } else {
        if (typedText.length > 1) {
          setTypedText(typedText.substring(0, typedText.length - 1));
        } else {
          setDirection('forward');
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [typedText, direction, fullName]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start">


      <h1 className="text-5xl md:text-6xl font-mono my-8 md:my-12" id='About'>
        <span className="text-white">My </span>
        <span className="text-green-500">Journey</span>
      </h1>

      <div className="w-full max-w-6xl px-4 mb-16">
        <div className="bg-gray-900 border border-transparent rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row p-4 md:p-6">
            <div className="md:w-1/3 lg:w-1/4 flex flex-col items-center md:items-start">


              <div className="border-2 border-yellow-500 rounded-lg overflow-hidden mb-3 md:mb-4 w-40 h-40 md:w-full md:h-auto">
                <img
                  src="/Images/Sasin.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gray-800 p-2 md:p-3 rounded-lg border border-pink-500 md:border-2 w-full max-w-xs md:max-w-full">
                <span className="text-white text-lg md:text-xl lg:text-2xl font-mono mr-1 md:mr-2">■</span>
                <span className="text-white text-lg md:text-xl lg:text-2xl font-mono">{typedText}|</span>
                <span className="h-4 md:h-5 w-1 md:w-2 bg-white ml-1 animate-pulse"></span>
              </div>
            </div>

            <div className="md:w-2/3 lg:w-3/4 md:pl-6 mt-6 md:mt-0">
              <div className="text-cyan-50 border border-blue-500 p-3 md:p-4 rounded-lg text-sm md:text-base">
                <p className="mb-3 md:mb-4">
                  Originally from Nepal, I had no clue where life would take me or even
                  where to start. I was just floating through school until I met a friend
                  in middle school who was obsessed with hacking, web designing, and
                  developing. His enthusiasm sparked something in me, and that's how my
                  journey began. My very first project was creating forms in HTML—I was
                  over the moon about it (and yes, I'm still proud of that little
                  victory).
                </p>
                <p className="mb-3 md:mb-4">
                  Later, I moved to Canada to pursue a diploma in computer programming.
                  Between the course materials and reconnecting with my childhood friend,
                  we started designing and developing websites together. Eventually, we
                  landed real clients and couldn't contain our excitement. We've worked
                  with businesses like Wevona, GCS Systems, Momo House, and Shree Brow Bar
                  (some of which expanded to places like the UK!). It's been a
                  rollercoaster of learning and growth, but I'm still on the ride,
                  exploring new programming languages and chasing that "aha!" moment.
                </p>
                <p className="mb-3 md:mb-4">
                  Outside the tech world, I love being active. You'll find me playing
                  soccer and cricket outdoors or gaming indoors with Fortnite and Rocket
                  League. Netflix? That's my chill buddy. And food? Oh, trying new
                  cuisines is practically my hobby. I'm also a travel enthusiast, always
                  ready to pack my bags for the next adventure.
                </p>
                <p>
                  In short, I'm a curious coder, a food fanatic, a travel junkie, and a
                  Netflix binge-watcher all rolled into one. Life is my sandbox, and I'm
                  here to explore every corner of it. Let's just say I'm the type of
                  person who will try to debug code, devour a pizza, and plan a trip—all
                  at the same time, probably in that order. 😊
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyProfile;