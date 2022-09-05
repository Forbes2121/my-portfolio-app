import React from 'react';
import Header from '../home/Header';
import Social from '../layout/Social';

import about1 from '../assets/about-01.png';
import about2 from '../assets/about-02.png';
import about3 from '../assets/about-03.png';

export default function About() {
    return (
        <>
        <Header />
        <div className="container-fluid container-md">
            <div className="about row align-items-center">
                <div className="illustration col col-12 col-md-6">
                    <img style={{maxWidth: "100%"}} src={about1} alt="About Tyler" />
                </div>
                <div className="col col-12 col-md-6">
                    <p>I'm a recent Thinkful graduate of their software engineering flex program. I am aspiring to be a full-stack developer. I also have a Bachelor's Degree in Mathematical Economics from Colgate University.</p>
                    <h2>About Me</h2>
                    <p>I always love a good challenge. Whether that is solving a puzzle, strategizing in a board game, or competing out on the soccer field. I love being active and spending time outdoors hiking, running, biking, rollerblading, or snowboarding.</p>
                    <p>Despite my love for the outdoors, I also enjoy video gaming, movies, TV, and the latest technology. I have grown to appreciate clean user interfaces that are both elegant and efficient.</p>
                    <p>In my previous career within Finance as a front-office trader of US Treasuries, I was constantly looking for better software and technology to help make our jobs easier, more efficient, and also more profitable.</p>
                </div>
                
                <hr />

                <div className="illustration col order-md-2 col-12 col-md-6">
                    <img style={{maxWdith: "100%"}} src={about2} alt="About Tyler" />
                </div>
                <div className="col order-md-1 col-12 col-md-6">
                    <h3>List of some of my tech skills:</h3>
                    <ul>
                        <li>Full-stack Dev</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>PostgreSQL</li>
                        <li>Express</li>
                        <li>RESTful APIs</li>
                        <li>Node.js and NPM</li>
                        <li>Git and GitHub</li>
                    </ul>
                </div>

                <hr className="order-md-3" />

                <div className="illustration col order-md-4 col-12 col-md-6">
                    <img style={{maxWidth: "100%"}} src={about3} alt="About Tyler" />
                </div>

                <div className="col order-md-5 col-12 col-md-6">
                    <h3>To get to know me a little better, here are some other interests and hobbies of mine:</h3>
                    <ul>
                        <li>Reading on my Kindle</li>
                        <li>Listening to Podcasts</li>
                        <li>Volunteering</li>
                        <li>Coaching Soccer</li>
                        <li>Golfing</li>
                        <li>Pickleball (fastes growing sport!)</li>
                        <li>Spending time with family</li>
                        <li>Traveling</li>
                    </ul>
                </div>
            </div>
        </div>
        <Social />
        </>
    )
}