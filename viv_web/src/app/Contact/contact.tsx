


 "use client"
 import React from 'react';
 import { Mail, Phone, ExternalLink } from 'lucide-react';


const Contact = () => {
    return(
        <div className="py-10 px-4 sm:px-6 lg:px-8 bg-[#1a202c] text-white" id='contact'>
                 <div className="max-w-7xl mx-auto">
                   <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                   <div className="flex flex-col items-center space-y-4">
                     <a href="mailto:venesas765@gmail.com" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                       <Mail className="w-5 h-5 text-blue-600" />
                       <span>ivyvivienne97@gmail.com</span>
                     </a>
                     <a href="tel:+254719850270" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                       <Phone className="w-5 h-5 text-blue-600" />
                       <span>+254 715 166 908</span>
                     </a>
                     <div className="flex space-x-4 mt-4">
                       <a
                         href="#about"
                         className="p-2 rounded-full hover:bg-blue-600/20 transition-colors"
                       >
                         <ExternalLink className="w-6 h-6" />
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
    );
};
export default Contact;