'use client'
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="relative group overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105"
      onClick={handleInteraction}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Hover/Touch Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6
          ${isActive
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
          } transition-all duration-300`}
      >
        <div className={`transform transition-transform duration-300
          ${isActive
            ? 'translate-y-0'
            : 'translate-y-10'
          }`}
        >
          <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-200 mb-4">{project.description}</p>
          <div className="text-gray-100 text-sm leading-relaxed">
            {project.projectDetails}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="absolute top-4 left-4 flex space-x-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-white/70 px-3 py-1 rounded-full text-xs font-medium text-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Responsive and interactive personal portfolio showcasing skills and projects.",
      projectDetails: "Developed a comprehensive personal portfolio using React and Next.js, implementing responsive design with Tailwind CSS. Created interactive project cards with hover and touch interactions, showcasing project details dynamically. Utilized modern web development techniques to create an engaging and professional online presence.",
      technologies: ["React", "Tailwind", "Next.js"],
      image: "/Images/ImagePortfolio.png"
    },
    {
      title: "House of Momos",
      description: "Restaurant website with dynamic menu and responsive design.",
      projectDetails: "Designed and implemented a WordPress-based website for a restaurant, focusing on user experience and visual appeal. Created a responsive layout that works seamlessly across devices. Developed a dynamic menu section, integrated with WordPress CMS for easy content management. Implemented clean, modern design that reflects the restaurant's brand identity.",
      technologies: ["WordPress", "HTML", "CSS","Figma"],
      link: "https://houseofmomos.com",
      image: "/Images/Momo.png"
    },
    {
      title: "Shree Brow Bar",
      description: "Beauty and salon services website with modern design.",
      projectDetails: "Crafted a sleek and modern website for a beauty salon using React and Tailwind CSS. Designed the UI/UX in Figma before implementation, ensuring a professional and aesthetically pleasing interface. Implemented responsive design principles to provide an optimal viewing experience across all devices. Integrated smooth interactions and modern design elements to showcase salon services.",
      technologies: ["Figma", "React", "Tailwind"],
      link: "https://shreebrowbar.com",
      image: "/Images/shreebrowbar.png"
    },
    {
      title: "Wevona Marketing Platform",
      description: "Advanced marketing platform with user-centric interface.",
      projectDetails: "Developed a cutting-edge marketing platform using React and Tailwind CSS. Created a user-centric interface with intuitive navigation and interactive components. Implemented advanced functionality to streamline marketing processes, focusing on user experience and modern design principles. Integrated AI technologies to enhance platform capabilities.",
      technologies: ["React", "Tailwind"],
      link: "https://wevona.com",
      image: "/Images/Wevona.png"
    },
    {
      title: "E-commerce Platform",
      description: "Advanced E-commerce platform with user-centric interface.",
      projectDetails: <b className='text-red-800'>ONGOING PROJECT.....</b>,
      technologies: ["React", "Tailwind",'Flowbite','ShadCN'],
      link: "https://wevona.com",
      image: "/Images/Ecommerce.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-16">
          My Projects
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;