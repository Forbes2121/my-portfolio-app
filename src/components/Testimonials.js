import React from "react";
import { TerminalIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import { HiOutlineGlobe } from "react-icons/hi";
import { HiDesktopComputer} from "react-icons/hi";
import { RiCamera3Line } from "react-icons/ri";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <HiOutlineGlobe className="w-20 inline-block mb-4" size='2.5em'/>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Life Away from the <HiDesktopComputer className="inline-block" size='1.1em'/>
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <RiCamera3Line className="block w-8 text-gray-500 mb-4" size='2em'/>
                <p className="leading-relaxed mb-4">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt={testimonial.quote}
                    src={testimonial.image}
                    className="w-12 object-cover object-center"
                    style={{width: '250px', height: '100%', borderRadius: '10px'}}
                    
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
