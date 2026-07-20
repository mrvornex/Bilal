"use client";

import React, { useState } from "react";
import ProjectButton from "./ProjectButton";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  sourceCode: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveDemo,
  sourceCode,
  techStack,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row gap-6 p-6 hover:bg-gray-50 transition-colors duration-200">

        {/* Image */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">

          <div>
            <h3 className="text-2xl font-semibold text-black">
              {title}
            </h3>

            <p className="text-gray-600 leading-7 mt-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full border border-gray-300 bg-gray-50 text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6 flex-wrap">

            {liveDemo && (
              <ProjectButton href={liveDemo}>
                Live Demo
              </ProjectButton>
            )}

            <ProjectButton href={sourceCode}>
              Source Code
            </ProjectButton>

          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={image}
              alt={title}
              className="rounded-lg max-h-[90vh]"
            />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 bg-white border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;