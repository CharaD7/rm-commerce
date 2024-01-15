import { Link } from "@remix-run/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="relative z-10">
        <div className="bg-white">
          <div className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                <div className="flex items-center">
                  <Link to="/">
                    <h1 className="text-2xl font-semibold">
                      Tech<span className="text-indigo-600">Connect</span>
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          Navbar
        </div>
      </header>
    </>
  );
};

export default Navbar;
