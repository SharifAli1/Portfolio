import React from "react";
import { IoIosMail } from "react-icons/io";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-100 px-4"
    >
      <div className="max-w-4xl w-full space-y-12 mt-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 underline decoration-indigo-500 decoration-4 underline-offset-8">
              Contact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Let's connect and discuss opportunities or collaborations
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
          <div className="space-y-8">
            {/* Email Section */}
            <div className="flex items-center justify-center">
              <a
                href="mailto:sharifali7572@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <IoIosMail className="w-6 h-6 mr-3" />
                <span className="text-lg">sharifali7572@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      GitHub
                    </h3>
                    <p className="text-gray-600">Check out my repositories</p>
                  </div>
                  <a
                    href="https://github.com/SharifAli1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium"
                  >
                    SharifAli1
                  </a>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      LinkedIn
                    </h3>
                    <p className="text-gray-600">
                      Let's connect professionally
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sharif-ali1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    SharifAli1
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
