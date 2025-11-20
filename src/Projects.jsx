import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectData = [
    {
      title: "Receiptify",
      description: `AI-driven web platform that automates receipt processing, enabling users to digitize and categorize over 100 receipts per minute with ~95% parsing accuracy.
        Implemented secure upload and classification workflow using Google OAuth 2.0, Supabase, and Gemini 2.5 Flash for automated text extraction and folder-based organization.
        Built a dynamic financial dashboard providing real-time spending analytics and AI-generated insights to identify 30-day spending patterns and actionable savings opportunities.`,
      link: "https://github.com/alfredscyriac/Receiptify", // replace with your actual link
    },
    {
      title: "FitNest",
      description: `Full-stack habit tracking application built with React, Node.js/Express, and MongoDB for persistent user data storage.
        Implemented RESTful API endpoints enabling CRUD operations for habit creation, progress tracking, and secure session-based user authentication.
        Designed optimized MongoDB schemas for user profiles, habit definitions, and daily progress logs, ensuring efficient queries and scalable performance.`,
      link: "https://github.com/SharifAli1/FitNest", // replace with your actual link
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-100 px-4"
    >
      <div className="max-w-6xl w-full space-y-12 mt-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 underline decoration-indigo-500 decoration-4 underline-offset-8">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
