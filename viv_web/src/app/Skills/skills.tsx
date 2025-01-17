"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Microscope, Laptop, Users } from 'lucide-react';

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState<string>('');

  const skillsData = {
    Technical: {
      icon: <Laptop size={24} />,
      items: {
        'EMR Systems Management:': 'Proficient in navigating and maintaining electronic medical record systems, ensuring accurate patient data management and seamless access to medical information.',
        'Telehealth Software': 'Experienced in operating various telehealth platforms to facilitate remote patient consultations and virtual healthcare services.',
        'Medical Documentation': 'Skilled in creating and maintaining comprehensive medical records, clinical notes, and healthcare reports.',
        'Google Workspace': 'Advanced user of Google collaborative tools for document management, scheduling, and team communication.',
        'Insurance Verification:': 'Proficient in verifying patient insurance coverage, benefits, and eligibility for various medical procedures.',
        'HIPAA Compliance:': 'Expert knowledge in maintaining patient confidentiality and handling sensitive medical data according to HIPAA regulations and guidelines.'
      }
    },
    Clinical: {
      icon: <Microscope size={24} />,
      items: {
        'Patient Assessment': 'Expert in conducting thorough patient evaluations, including history taking and physical examinations.',
        'Medical Research': 'Experienced in conducting clinical research, data collection, and analysis for medical studies.',
        'Clinical Trial Management': 'Skilled in coordinating clinical trials, including participant recruitment and follow-up.',
        'Triage Protocols': 'Proficient in assessing patient urgency and implementing efficient triage systems.',
        'Patient Care Coordination': 'Expert in managing patient care plans and coordinating between healthcare providers.',
        'Medical Education': 'Experienced in conducting medical education sessions for healthcare professionals.'
      }
    },
    'Adminisrative Skills': {
      icon: <Users size={24} />,
      items: {
        'Patient Scheduling': 'Expert in managing complex medical appointment systems.',
        'Virtual Team Training': 'Experienced in training and mentoring remote healthcare support staff.',
        'Data Management': 'Skilled in organizing and maintaining accurate medical databases and records.',
        'Healthcare Communication': 'Expert in facilitating clear communication between patients, providers, and staff.',
        'Quality Assurance': 'Proficient in implementing and maintaining quality control measures.',
        'Calendar Management': 'Advanced scheduling and calendar optimization for medical practices.'
      }
    }
  };

  type SkillCategory = string;
  type SkillName = string;

  const toggleSkill = (category: SkillCategory, skill: SkillName) => {
    const skillKey = `${category}-${skill}`;
    setExpandedSkill(expandedSkill === skillKey ? '' : skillKey);
  };

  return (
    <section className="min-h-screen bg-[#1a202c] text-white pt-4 px-4" id='skills'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Skills & Expertise</h2>
        
        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, { icon, items }]) => (
            <div 
              key={category}
              className="bg-[#1a202c] text-white border-2 border-gray-600 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6 cursor-pointer">
                <div className="text-blue-400">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>

              <div className="space-y-4">
                {Object.entries(items).map(([skill, description]) => {
                  const skillKey = `${category}-${skill}`;
                  const isExpanded = expandedSkill === skillKey;
                  
                  return (
                    <div key={skill} className="space-y-2">
                      <div
                        className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors"
                        onClick={() => toggleSkill(category, skill)}
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-5 h-5 flex-shrink-0" />
                        )}
                        <span className="text-lg">{skill}</span>
                      </div>

                      {isExpanded && (
                        <div className="ml-7 p-4 bg-gray-400 text-black rounded-md shadow-md transition-all duration-300">
                          <p className="text-base">{description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;