import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-800 ">
      <div className=" mx-auto px-3 sm:px-4 lg:px-8 justify-between ">
        <div className="flex items-center justify-between h-14  ">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0 text-white p-6">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                style={{
                  color: "black",
                }}
                xmlns="http://www.w3.org/2000/svg"
                stroke="#808080"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                    stroke="#808080"
                    stroke-width="1.32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M15 10.1667C15 10.1667 14.6941 10.1667 14.625 10.1667C13.6006 10.1667 12.7077 9.75244 12 9C11.2923 9.75241 10.3995 10.1667 9.37504 10.1667C9.30596 10.1667 9.00004 10.1667 9.00004 10.1667C9.00004 10.1667 9 10.9444 9 11.3979C9 13.6121 10.2748 15.4725 12 16C13.7252 15.4725 15 13.6121 15 11.3979C15 10.9444 15 10.1667 15 10.1667Z"
                    stroke="#808080"
                    stroke-width="1.32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="hidden md:block font-bold p-12">
              <a
                href="/"
                className="text-green-800 ml-4 hover:text-green-300 p-2"
              >
                Home
              </a>
              <a
                href="/RandomChat"
                className="text-green-800 ml-4 hover:text-green-300 p-2"
              >
                About
              </a>
              <a
                href="#services"
                className="text-green-800 ml-4 hover:text-green-300 p-2"
              >
                Skills
              </a>
              <a
                href="#services"
                className="text-green-800 ml-4 hover:text-green-300 p-2"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600"
          >
            Group chat
          </a>
          <a
            href="/RandomChat"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600"
          >
            Randome chat
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
