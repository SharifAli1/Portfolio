import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-100 px-4"
    >
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <img
                src="1.png"
                alt="Sharif Ali"
                className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white/30 backdrop-blur-sm"
              />

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl -z-10"></div>
            </div>
          </div>

          <div className="text-center lg:text-left space-y-6 order-1 lg:order-2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Sharif Ali
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-125 font-medium">
              Aspiring Software Engineer
            </p>
            <p className="text-lg text-gray-125 max-w-2xl lg:max-w-none leading-relaxed">
              Passionate about full-stack web development and solving problems
              with code
            </p>
            <div className="flex justify-center lg:justify-start items-center space-x-6 pt-4">
              <a
                href="https://github.com/SharifAli1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/sharif-ali1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
