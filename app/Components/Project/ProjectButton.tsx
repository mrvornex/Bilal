import React from "react";

interface ProjectButtonProps {
  href: string;
  children: React.ReactNode;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default ProjectButton;