import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-100 px-4 border-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm md:text-base text-blue-900">
              © 2025 Sharif Ali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
