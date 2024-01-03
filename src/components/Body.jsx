import React from "react";

function Body() {
  return (
    <>
      <div className="p-4 md:flex md:justify-center md:items-center">
        <div className="mb-4 md:w-1/2 md:mr-4 ml-4 ml-12 ">
          <h1 className="text-5xl font-bold font-sans">Hi, I'm HeenetH</h1>
          <h2 className="text-lg text-gray-600">Full Stack Developer</h2>
          <p className="mt-4 text-gray-700 text-md font-semibold">
            I'm passionate about building seamless and efficient web
            applications. With expertise in both front-end and back-end
            technologies, I bring creative solutions to complex problems. My
            journey in web development started with a fascination for creating
            interactive interfaces, which led me to explore the entire software
            development process.
          </p>

          <button className="mt-6 bg-green-900 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">
            Contact Me
          </button>
          <div>
            <nav className=" mt-6 item-center   rounded-lg flex">
              <a className="mr-8" href="https://github.com/Heeneth12">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 16.00 16.00"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#161514"
                      fill-rule="evenodd"
                      d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
                      clip-rule="evenodd"
                    ></path>
                  </g>
                </svg>
              </a>
              <a className="mr-8" href="https://github.com/Heeneth12">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>social_twitter</title>{" "}
                    <rect width="24" height="24" fill="none"></rect>{" "}
                    <path d="M5,3H19a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3M17.71,9.33A4.77,4.77,0,0,0,19,7.92a4.41,4.41,0,0,1-1.44.41,2.92,2.92,0,0,0,1.12-1.47A5.62,5.62,0,0,1,17,7.5,2.72,2.72,0,0,0,12.37,10,7.65,7.65,0,0,1,6.85,7.16a2.87,2.87,0,0,0,.79,3.58,2.94,2.94,0,0,1-1.14-.33,2.68,2.68,0,0,0,2.08,2.68,3.35,3.35,0,0,1-1.14,0A2.67,2.67,0,0,0,9.9,15,5.38,5.38,0,0,1,6,16.08a7,7,0,0,0,4.28,1.23C14.69,17.11,17.64,14,17.71,9.33Z"></path>{" "}
                  </g>
                </svg>
              </a>
              <a className="mr-6" href="https://github.com/Heeneth12">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>social_twitter</title>{" "}
                    <rect width="24" height="24" fill="none"></rect>{" "}
                    <path d="M5,3H19a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3M17.71,9.33A4.77,4.77,0,0,0,19,7.92a4.41,4.41,0,0,1-1.44.41,2.92,2.92,0,0,0,1.12-1.47A5.62,5.62,0,0,1,17,7.5,2.72,2.72,0,0,0,12.37,10,7.65,7.65,0,0,1,6.85,7.16a2.87,2.87,0,0,0,.79,3.58,2.94,2.94,0,0,1-1.14-.33,2.68,2.68,0,0,0,2.08,2.68,3.35,3.35,0,0,1-1.14,0A2.67,2.67,0,0,0,9.9,15,5.38,5.38,0,0,1,6,16.08a7,7,0,0,0,4.28,1.23C14.69,17.11,17.64,14,17.71,9.33Z"></path>{" "}
                  </g>
                </svg>
              </a>
            </nav>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=1380&t=st=1704260744~exp=1704261344~hmac=7d320de31b9609231d2e270d6c207d2348948c54bd61e2ae0d25b718ceca9b54"
            width={"600px"}
            height={"600px"}
          />
        </div>
      </div>
    </>
  );
}

export default Body;
