import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-3 border-b-red-200 drop-shadow-sm sticky top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="text-blue-500 text-xl font-semibold">
                  HRSystem
                  <span className="text-black font-bold">App.</span>
                </h1>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link href="/dashboard" className=" text-gray-500 hover:text-red-500 rounded-md px-2 py-2 text-sm font-medium" aria-current="page">
                    Dashboard
                  </Link>
                  <Link href="/employees" className=" text-gray-500 hover:text-red-500 rounded-md px-2 py-2 text-sm font-medium" aria-current="page">
                    Employees
                  </Link>
                  <Link href="/register" className=" text-gray-500 hover:text-red-500 rounded-md px-2 py-2 text-sm font-medium" aria-current="page">
                    Register
                  </Link>
                  <Link href="/login" className=" text-gray-500 hover:text-red-500 rounded-md px-2 py-2 text-sm font-medium" aria-current="page">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="/" className=" text-gray-500 hover:red-500 rounded-md px-2 py-2 text-sm font-medium" aria-current="page">
              Home
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
