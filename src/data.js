import grandcanyon from './Photos/grandcanyon.jpg';
import skimboarding from './Photos/skimboarding.jpg';
import stowegondola from './Photos/stowegondola.jpg';
import soccerdribbling from './Photos/soccerdribbling.jpg';
import wakeboarding from './Photos/wakeboarding.jpg';
import jetskiskyline from './Photos/jetskiskyline.jpg';
import rockclimbing from './Photos/rockclimbing.jpg';
import snowywhiteface from './Photos/snowywhiteface.jpg';

export const projects = [
  {
    title: "Restaurant Reservations",
    subtitle: "PERN Stack",
    description:
      "Fully deployed app that can allow a restaurant to track new reservations, existing reservations, delete reservations, and can manage their tables all via api.",
    image: "./restaurantresy.gif",
    link: "https://forbes-frontend-app.herokuapp.com/dashboard",
  },
  {
    title: "Flashcards App",
    subtitle: "JavaScript and React",
    description:
      "Created an app that allows the user to create and store flashcards, flip through them for studying purposes, and then delete them if necessary.",
    image: "./flashcards.gif",
    link: "https://github.com/Forbes2121/Flashcards-App-Solution",
  },
  {
    title: "Meme Generator",
    subtitle: "JS, React, HTML and CSS",
    description:
      "Created a React app that allows the user to generate a meme throught top/bottom text based on a random image that is stored via an API.",
    image: "./memegenerator.gif",
    link: "https://github.com/Forbes2121/Meme-Generator",
  },
  {
    title: "WeLoveMovies Project",
    subtitle: "PERN Stack",
    description:
      "Created a back end API utilizing PostgreSQL and Knex in order to go alongside the front-end user interface for a fully loaded movie theater app.",
    image: "./welovemovies.gif",
    link: "https://github.com/Forbes2121/WeLoveMovies-Capstone",
  },
];

export const testimonials = [
  {
    quote:
      "Grand Canyon hiking trip.",
    image: grandcanyon,
  },
  {
    quote:
      "Skimboarding at Emerald Isle, NC.",
    image: skimboarding,
  },
  {
    quote:
      "Snowboarding in Stowe, VT.",
    image: stowegondola,
  },
  {
    quote:
      "Wakeboarding out in Long Island, NY.",
    image: wakeboarding,
  },
  {
    quote:
      "Soccer game in New York City, NY.",
    image: soccerdribbling,
  },
  {
    quote:
      "Jetskiing the inner harbour of NYC.",
    image: jetskiskyline,
  },
  {
    quote:
      "Rockclimbing indoors in Syracuse, NY.",
    image: rockclimbing,
  },
  {
    quote:
      "Top of Whiteface Mountain, NY.",
    image: snowywhiteface,
  },
];

export const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "React",
  "PostgreSQL",
  "Github",
  "VS Code"
];
