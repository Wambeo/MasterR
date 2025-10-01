import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  return (
    <>
     

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Master R</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link to="/contact" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Me</Link>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link  to="/" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <a href="/#about" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="/#topics" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Topics</a>
      </li>
      <li>
        <a href="/#testimonials" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</a>
      </li>
       <li>
        <a href="/#pricing" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      
    </ul>
  </div>
  </div>
</nav>
<div className='bg-transparent text-lg pt- container mx-auto'>
             
          <Outlet />
        </div>

<footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
        
        {/* Branding */}
        <div>
          <h2 className="font-semibold text-lg">Master R Programming with Esther</h2>
          <p className="text-sm text-gray-600 mt-2">
            Personalized R programming and data science tutoring for students and professionals.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-base mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Data Visualization</li>
            <li>Statistical Analysis</li>
            <li>Package Development</li>
          </ul>
        </div>

        {/* Learning */}
        <div>
          <h3 className="font-semibold text-base mb-3">Learning</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href='#about'>About Esther</a></li>
            <li><a href='#pricing'>Pricing Plan</a></li>
            <li><a href='#testimonials'>Student Reviews</a></li>
            <li><a href='#form'>Schedule Session</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-base mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="mailto:estherwambeo18.com" className="hover:underline">
                estherwambeo18@gmail.com
              </a>
            </li>
            <li>+254 705977428</li>
            <li>Online sessions via Zoom</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-[#f5ede3]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2025 StatCoreInstituteofStatisticalAnalysis. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/254705977428"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M16 .5C7.6.5.5 7.6.5 16c0 2.8.7 5.4 2 7.7L0 32l8.6-2.5c2.3 1.3 4.9 2 7.7 2 8.4 0 15.5-7.1 15.5-15.5S24.4.5 16 .5zm0 28.1c-2.5 0-4.9-.7-6.9-1.9l-.5-.3-5.1 1.5 1.5-5-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.5 6.1-13.6 13.6-13.6S29.6 8.5 29.6 16 23.5 28.6 16 28.6zm7.5-9c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.5-.2-.7.2s-.8 1.2-1 1.5c-.2.3-.4.3-.7.1s-1.3-.5-2.4-1.5c-.9-.8-1.5-1.7-1.7-2s0-.4.1-.6c.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.1.2-.2.3-.3.1-.2.1-.3 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.4-.5-.7-.5h-.6c-.2 0-.5.1-.7.3s-1 1-1 2.5 1 2.9 1.2 3.2c.1.2 2 3.1 5 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.7.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.3-.1-.2-.3-.3-.7-.5z" />
  </svg>
</a>


    </>
  )
}
