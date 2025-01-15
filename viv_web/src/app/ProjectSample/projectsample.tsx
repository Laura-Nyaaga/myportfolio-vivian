"use client";
import { useState } from 'react';
import { FileText, FileSpreadsheet, LucideIcon, X, ZoomIn, ZoomOut } from 'lucide-react';
import Image from 'next/image';


interface ProjectImages {
  [projectTitle: string]: {
    [attachmentTitle: string]: string;
  };
}

const projectAttachmentImages: ProjectImages = {
  'Sexual Harassment Survey Research': {
    'Workplace Survey Form': '/images/sexual_harassment_survey.png'
  },
  'Project Management': {
    'Project Management': '/images/project_management.png',
  },
  'Communication Coordination': {
    'Email Management': '/images/email_management.png'
  },
  'Patient Management': {
    'Patient Scheduling': '/images/patient_scheduling.png'
  }
};

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

// Modal File Preview
const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const [scale, setScale] = useState(1);
  
  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#1a202c] rounded-full hover:bg-gray-200 transition-colors z-50"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="absolute top-4 left-4 space-x-2 z-50">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-[#1a202c] rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-6 h-6" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-[#1a202c] rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-6 h-6" />
          </button>
        </div>

        <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-[90vh] object-contain transition-transform duration-200"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// FilePreview 
type FilePreviewProps = {
  type: "form" | "spreadsheet" | "presentation" | "document";
  title: string;
  projectTitle: string;
};

const FilePreview: React.FC<FilePreviewProps> = ({ type, title, projectTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getPreviewStyle = () => {
    switch (type) {
      case 'form':
        return 'bg-blue-100';
      case 'spreadsheet':
        return 'bg-gray-200';
      case 'document':
        return 'bg-blue-100';
      case 'presentation':
        return 'bg-orange-100';
      default: 
        return 'bg-gray-100';
    }
  };

  const imageSrc = projectAttachmentImages[projectTitle]?.[title] || '/images/default-preview.png';

  return (
    <>
      <div 
        className={`rounded-lg p-4 ${getPreviewStyle()} flex items-center justify-center h-32 mb-2 cursor-pointer 
          transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative group`}
        onClick={() => setIsModalOpen(true)}
      >
        <Image 
          src={imageSrc}
          alt={`Preview for ${title}`}
          width={200}
          height={200}
          className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg" />
      </div>

      <ImagePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={imageSrc}
        imageAlt={`Preview for ${title}`}
      />
    </>
  );
};

// AttachmentCard 
type AttachmentCardProps = {
  title: string;
  type: "form" | "spreadsheet" | "presentation" | "document";
  icon: LucideIcon;
  projectTitle: string;
};

const AttachmentCard: React.FC<AttachmentCardProps> = ({ title, type, icon: Icon, projectTitle }) => (
  <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
    <FilePreview type={type} title={title} projectTitle={projectTitle} />
    <div className="flex items-center space-x-2">
      <Icon className="w-4 h-4 text-gray-500" />
      <span className="text-sm text-gray-700 truncate">{title}</span>
    </div>
  </div>
);

// ProjectCard 
type ProjectCardProps = {
  title: string;
  description: string;
  date: string;
  attachments: {
    title: string;
    type: "form" | "spreadsheet" | "presentation" | "document";
    icon: LucideIcon;
  }[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, date, attachments }) => (
  <div className="bg-[#1a202c] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-gray-400">
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-2">{description}</p>
      <p className="text-sm text-gray-300 mb-4">{date}</p>
    </div>
    
    {attachments && attachments.length > 0 && (
      <div>
        <h4 className="text-sm font-medium text-gray-200 mb-3">Related Files</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {attachments.map((attachment, index) => (
            <AttachmentCard 
              key={index} 
              {...attachment} 
              projectTitle={title}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);

// Projects Component
const ProjectSample = () => {
  const projects = [
    {
      title: "Sexual Harassment Survey Research",
      description: "Leading a comprehensive research study to establish sexual harassment behavior patterns in workplace environments. The project involves designing surveys, collecting data, and analyzing responses to develop preventive measures.",
      date: "2024",
      attachments: [
        {
          title: "Workplace Survey Form",
          type: "document" as "document",
          icon: FileText as LucideIcon,
        }
      ]
    },
    {
      title: "Project Management",
      description: "Demonstrated strong organizational skills by efficiently managing collaborative projects and email correspondence. Coordinated document access and permissions for research contributors while maintaining seamless project workflows.",
      date: "2024",
      attachments: [
        {
          title: "Project Management",
          type: "spreadsheet" as "spreadsheet",
          icon: FileSpreadsheet as LucideIcon,
        }
      ]
    },
    {
      title: "Commmunication Coordination",
      description: "Effectively handled email inbox management, scheduled virtual meetings, and ensured timely responses andseamlesscommunication.",
      date: "2022-present",
      attachments: [
        {
          title: "Email Management",
          type: "spreadsheet" as "spreadsheet",
          icon: FileSpreadsheet as LucideIcon,
        }
      ]
    },
    
    {
      title: "Patient Management",
      description: "Developed a patient scheduling system with an intuitive calendar interface, enabling efficient management of appointments, practitioner availability, and patient workflows. The system includes features such as categorized patient lists, real-time status updates, and color-coded time blocks to streamline clinic operations and improve healthcare service delivery",
      date: "2023 - Present",
      attachments: [
        {
          title: "Patient Scheduling",
          type: "document" as "document",
          icon: FileText as LucideIcon,
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a202c] text-white px-4 py-8" id='projects'>
      <div className="mb-12 text-center">
        {/* <h2 className="text-3xl font-bold mb-4">Projects & Documentation</h2> */}
        <p className="text-white max-w-2xl mx-auto">
          A comprehensive collection of research initiatives, professional projects, and associated documentation showcasing healthcare improvement, data analysis, and clinical research work.
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSample;