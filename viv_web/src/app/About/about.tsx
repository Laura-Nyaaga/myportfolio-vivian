"use client";
import React from 'react';
import { useState} from 'react';

const About = () => {
    const [activeSection, setActiveSection] = useState('home');

    return(
        <section className="bg-[#1a202c] py-16 pb-10 px-4 sm:px-6 lg:px-8" id='about'>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4 animate-fade-in">
          Vivian Nafula
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
          HealthCare Virtual Assistant/ Virtual Medical Assistant 
           </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact">
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-full transition-colors"
            >
              Get in Touch
            </button>
            </a>

            <a href="#projects">
            <button
              onClick={() => setActiveSection('projects')}
              className="border border-blue-600 hover:bg-blue-600/20 px-6 py-3 text-white rounded-full transition-colors"
            >
              View Projects
            </button>
            </a>
          </div>
        </div>
      </section>
    );
};
export default About;