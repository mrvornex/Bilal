"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#E34F26",
    experience: "3+ Years",
  },
  {
    id: 2,
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#1572B6",
    experience: "3+ Years",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
    experience: "2.5+ Years",
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
    experience: "2+ Years",
  },
  {
    id: 5,
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
    experience: "1.5+ Years",
  },
  {
    id: 6,
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
    experience: "1.5+ Years",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    experience: "2+ Years",
  },
  {
    id: 8,
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "#339933",
    experience: "Learning",
  },
  {
    id: 9,
    name: "Express.js",
    icon: <SiExpress />,
    color: "#111111",
    experience: "Learning",
  },
  {
    id: 10,
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
    experience: "Learning",
  },
  {
    id: 11,
    name: "Git",
    icon: <SiGit />,
    color: "#F05032",
    experience: "2+ Years",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mt-24">

      <h2 className="text-lg font-bold tracking-widest uppercase text-black mb-10">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors"
          >
            <div
              className="text-4xl mb-4"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <h3 className="text-lg font-semibold text-black">
              {skill.name}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              {skill.experience}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;