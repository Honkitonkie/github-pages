
import React from 'react';
import pic from "./images/duncan.jpg";

const github = "https://github.com/Honkitonkie";
const linkedin = "https://www.linkedin.com/in/duncan-kooyman";

function Card() {
  return (
    <div className='flex justify-center pt-20 content-center align-center align-center'>
      <div className='max-w-sm my-10 px-16 py-10 rounded-lg border border-gray-200 shadow-xl bg-white dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex flex-col items-center'>
          <img className='mb-3 w-24 h-24 rounded-full shadow-lg' src={pic} alt='Duncan'></img>
          <span className='text-sm text-gray-500 dark:text-gray-400'>Webdeveloper</span>
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-grey-100'>Duncan Kooyman</h5>
          <span className='text-md text-gray-500 dark:text-gray-400 mt-4'>Reach out!</span>
          <div className='flex mt-4 space-x-3 lg:mt-6'>
            <a
              href={linkedin}
              className='inline-flex items-center py-2 px-4 text-sm font-medium shadow-xl hover:shadow-none text-center text-gray-900 rounded-lg focus:ring-4 focus:ring-blue-300 bg-linkedin text-white border border-linkedin hover:text-linkedin hover:bg-linkedin-light hover:border-linkedin-light focus:ring-linkedin-light'
            >
              LinkedIn
            </a>
            <a
              href={github}
              className='inline-flex items-center py-2 px-4 text-sm font-medium shadow-xl hover:shadow-none text-center text-gray-900 rounded-lg focus:ring-4 focus:ring-blue-300 bg-github text-white border border-github hover:text-github hover:bg-github-light hover:border-github-light focus:ring-github-light'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
