import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {

  const onResumeClick = () => {
    fetch('Tyler_Forbes_Resume.pdf').then(response => {
      response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'Tyler_Forbes_Resume.pdf';
      alink.click();
      })
    })
  }

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Tyler Forbes
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Photos
          </a>
          <a href="#socials" className="mr-5 hover:text-white">
            Socials
          </a>
          <button onClick={onResumeClick} className="mr-5 hover:text-white">
            Download Resume
          </button>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
