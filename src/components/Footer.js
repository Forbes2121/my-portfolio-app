
import React, { useState } from 'react';
import {FaGithub} from "react-icons/fa";
import {SiGmail, SiLinkedin} from "react-icons/si";
import {GrInstagram} from "react-icons/gr";

export default function Footer(){

    const messages = {
        blank: "\u00A0",
        linkedin: "Come connect with me.",
        github: "Check out what I'm working on.",
        email: "Email me, forbes2121@gmail.com.",
        instagram: "See what I've been up to."
    };

    const [socialMessage, setSocialMessage] = useState(messages.blank)
    
    return (
        <section id="socials">
        <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Social Links
        </h1>
            <div className="text-center mb-10">
                <div className="col social social-linkedin">
                    <a href="https://www.linkedin.com/in/tyler-forbes2121/" target="_blank" rel="noreferrer"
                        onMouseEnter={() => setSocialMessage(messages.linkedin)}
                        onMouseLeave={() => setSocialMessage(messages.blank)}
                    ><span> <SiLinkedin className="inline-block"/>   LinkedIn</span></a>
                </div>
                <div className="col social social-github">
                    <a href="https://github.com/Forbes2121" target="_blank" rel="noreferrer"
                        onMouseEnter={() => setSocialMessage(messages.github)}
                        onMouseLeave={() => setSocialMessage(messages.blank)}
                    ><span> <FaGithub className="inline-block"/>   GitHub</span></a>
                </div>
                <div className="col social social-email">
                    <a href="mailto:forbes2121@gmail.com" target="_blank" rel="noreferrer"
                        onMouseEnter={() => setSocialMessage(messages.email)}
                        onMouseLeave={() => setSocialMessage(messages.blank)}
                    ><span> <SiGmail className="inline-block"/>   Email</span></a>
                </div>
                <div className="col social social-instagram">
                    <a href="https://www.instagram.com/tyler.forbes/" target="_blank" rel="noreferrer"
                        onMouseEnter={() => setSocialMessage(messages.instagram)}
                        onMouseLeave={() => setSocialMessage(messages.blank)}
                    ><span> <GrInstagram className="inline-block"/>   Instagram</span></a>
                </div>
                <br/>
        <div className="navWrapper mb-8 text-white">
                <p>
                    {socialMessage}
                </p>
        </div>
        </div>
        <h3>Made by me, Tyler Forbes.</h3>
        </div>
        </section>
    )
}
