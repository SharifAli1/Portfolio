import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-100 px-4"
    >
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Sharif Ali
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-125 font-medium">
          Aspiring Software Engineer
        </p>

        <p className="text-lg text-gray-125 max-w-2xl mx-auto leading-relaxed">
          Passionate about full-stack web development and solving problems with
          code
        </p>

        <div className="flex justify-center items-center space-x-6 pt-4">
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
    </section>
  );
}

export default Home;
