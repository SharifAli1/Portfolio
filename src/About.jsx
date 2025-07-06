import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4 py-16"
    >
      <div className="text-center space-y-8 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-black-500 mb-8">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 underline decoration-indigo-500 decoration-4 underline-offset-8">
            Me
          </span>
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            I am a third-year CS student passionate about full-stack web
            development and solving problems with code.
          </p>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <span className="text-blue-600 text-bold"></span>
              Education
            </h3>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently pursuing a{" "}
                <span className="font-semibold ">
                  Bachelor of Arts in Computer Science
                </span>{" "}
                at{" "}
                <span className="font-semibold text-gray-600">
                  City University of New York - Queens College {""}
                </span>
                <p>Expected Graduation May 2027</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
