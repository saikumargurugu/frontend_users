import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="bg-white border-2 p-8 my-4 mx-32 justify-start">
          <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Job Portal
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-6 xl:px-8 dark:text-gray-400">
          This is a simple job posting portal where user can post job and review
          it when every they want.
        </p>

        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-6 xl:px-8 dark:text-gray-400">
          *Move to Jobs Lit on top nav bar or click on below button to navigate
          to Job List
        </p>

        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-6 xl:px-8 dark:text-gray-400">
          *To create new job post click on "Add Job" on nav bar and it will
          navigate you to job creation page.
        </p>

        <Link
          to="/jobs/"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Job List
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
