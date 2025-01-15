"use client";
import {useState, SetStateAction} from 'react';
import { Award, Users, Book, HeartPulse, GitBranch, MessageSquare } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import ProjectSample from '../ProjectSample/projectsample';


type IconComponent = React.FC<LucideProps>;


interface Project {
  id: number;
  title: string;
  duration: string;
  description: string;
  achievements: string[];
  icon: IconComponent;
}

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Triage System Optimization",
      duration: "January 2023 - April 2023",
      description: "Led the implementation of an innovative triage system that revolutionized patient flow in a busy hospital setting.",
      achievements: [
        "Reduced wait times by 10%",
        "Trained staff on new procedures",
        "Improved emergency response times"
      ],
      icon: HeartPulse
    },
    {
      id: 2,
      title: "Clinical Research Management",
      duration: "May 2023 - December 2023",
      description: "Managed comprehensive data collection and analysis for multiple clinical trials at KEMRI-WELLCOME TRUST.",
      achievements: [
        "Developed standardized protocols",
        "Maintained HIPAA compliance",
        "Coordinated international teams"
      ],
      icon: Book
    },
    {
      id: 3,
      title: "Virtual Assistant Training Program",
      duration: "January 2024 - October 2024",
      description: "Developed and implemented a comprehensive training program for remote medical assistants.",
      achievements: [
        "Trained 10 new assistants",
        "Reduced onboarding time by 30%",
        "Implemented quality controls"
      ],
      icon: Users
    },
    {
      id: 4,
      title: "Patient Satisfaction Initiative",
      duration: "2024",
      description: "Led a strategic initiative to improve patient experience and satisfaction rates.",
      achievements: [
        "Increased satisfaction by 20%",
        "Developed feedback systems",
        "Improved response protocols"
      ],
      icon: Award
    },
    {
      id: 5,
      title: "EMR System Optimization",
      duration: "2023-2024",
      description: "Spearheaded the improvement of electronic medical record management systems.",
      achievements: [
        "Reduced errors by 15%",
        "Implemented daily audits",
        "Streamlined data entry"
      ],
      icon: GitBranch
    },
    {
      id: 6,
      title: "Healthcare Communication Pipeline",
      duration: "2023-2024",
      description: "Designed and implemented a comprehensive communication system for medical professionals.",
      achievements: [
        "Reduced response times by 25%",
        "Established secure channels",
        "Created standardized protocols"
      ],
      icon: MessageSquare
    }
  ];

  const handleMouseEnter = (id: number) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="bg-[#1a202c] px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Signature Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`
                  relative bg-[#1a202c] rounded-lg p-6 
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-xl
                  border border-blue-700
                  ${hoveredCard === project.id ? 'border-blue-400' : 'border-transparent'}
                `}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                
                <div className={`
                  absolute inset-0 rounded-lg
                  ${hoveredCard === project.id ? 'animate-pulse' : ''}
                  transition-all duration-300
                  bg-gradient-to-r from-gray-500 to-gray-600 opacity-20
                `} />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-300">{project.title}</h3>
                  </div>
                  
                  <p className="text-blue-200 text-sm mb-3">{project.duration}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <ProjectSample/>
        </div>
      </div>
    </section>
  );
};

export default Projects;


