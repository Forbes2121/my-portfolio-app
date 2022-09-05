import React, {useState} from 'react';

export default function Social() {
    const messages = {
        blank:"\u00A0",
        linkedin: "Connect with me on LinkedIn.",
        github: "Check out my past and present projects on GitHub.",
        email: "Shoot me an email @ forbes2121@gmail.com.",
    };

    const [socialMessage, setSocialMessage] = useState(messages.blank);

    return (
        <>
        <div className="row social navWrapper" >
            <hr />
            <div className="col social social-linkedin">
                <a href="https://www.linkedin.com/in/tyler-forbes2121/" target="_blank" rel="noreferrer"
                    onMouseEnter={() => setSocialMessage(messages.linkedin)}
                    onMouseLeave={() => setSocialMessage(messages.blank)}>
                    <span>LinkedIn</span>
                </a>
            </div>
            <div className="col social social-github">
                <a href="https://github.com/Forbes2121" target="_blank" rel="noreferrer"
                    onMouseEnter={() => setSocialMessage(messages.github)}
                    onMouseLeave={() => setSocialMessage(messages.blank)}>
                        <span>GitHub</span>
                </a>
            </div>
            <div className="col social social-email">
                <a href="mailto:forbes2121@gmail.com" target="_blank" rel="noreferrer"
                    onMouseEnter={() => setSocialMessage(messages.email)}
                    onMouseLeave={() => setSocialMessage(messages.blank)}>
                        <span>Email</span>
                </a>
            </div>
            </div>
            <div className="navWrapper mb-5">
                <p>
                    {socialMessage}
                </p>
            </div>
            </>
    )
}