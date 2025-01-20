
"use client";
import React from "react";
import { FileDown, ExternalLink } from 'lucide-react';
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-[#1a202c] text-white px-4 pt-16" id="aboutme">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <Image
                  src="/images/viv_image.jgp"
                  alt="Vivian Nafula"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                />
                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-blue-600/20 rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
              Dedicated and detail-oriented Healthcare Virtual Assistant
              with extensive experience in medicine and healthcare administration. Combines 
              clinical expertise as a General Practitioner with virtual assistance skills
              to provide comprehensive support to medical professionals globally. Specializes in 
              healthcare technology, patient care coordination, and medical documentation 
              while maintaining strict HIPAA compliance standards.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a  href="/images/Vivian Nafula - CV.pdf"
                download >
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors">
                  <FileDown className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
                </a>
  
                <a href="https://www.linkedin.com/in/vivian-nafula-857740194"
                  target="_blank"
                  rel="noopener noreferrer">
                <button className="flex items-center space-x-2 border border-blue-600 hover:bg-blue-600/20 px-6 py-3 rounded-full transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  <span>View LinkedIn</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;