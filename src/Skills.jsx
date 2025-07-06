import React from "react";

function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "Git",
    "C++",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4 py-16"
    >
      <div className="max-w-6xl w-full space-y-12 mt-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 underline decoration-purple-500 decoration-4 underline-offset-8">
              Skills
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-40 md:w-48"
            >
              <div className="text-center">
                <span className="text-lg md:text-xl font-bold text-gray-800">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
