import React from "react";
import Project from "../Project";
import pic1 from "../../images/budget-tracker-6.png";
import pic2 from "../../images/fitness-tracker-4.png";
import pic3 from "../../images/personal-cookbook-1.png";
import pic4 from "../../images/tech-blog-screenshot.png";
import pic5 from "../../images/ecbe-walkthrough-screenshot.png";
import pic6 from "../../images/flixfinder-demo.png";

const projects = [
  {
    title: "Budget Tracker",
    description: "This app keeps track of a running budget balance, online or offline. If updated while offline, it updates the database as soon as an internet connection becomes available.",
    resources:
      "HTML, CSS, JavaScript, Node, Express, MongoDB, Mongoose, IndexedDB",
    github: "https://github.com/tharveyster/budget-tracker",
    deployed: "https://thawing-cove-07753.herokuapp.com/",
    image: pic1,
    alt: "Budget Tracker",
  },
  {
    title: "Fitness Tracker",
    description: "This app tracks cardio distances and amount of weight lifted for workouts. Exercises can be added to an existing workout, or a new workout can be created.",
    resources:
      "HTML, CSS, JavaScript, MongoDB, Mongoose, Node, Express, Morgan",
    github: "https://github.com/tharveyster/fitness-tracker",
    deployed: "https://murmuring-lake-01147.herokuapp.com/",
    image: pic2,
    alt: "Fitness Tracker",
  },
  {
    title: "Personal Cookbook",
    description: "Allows registered users to search for recipes. Results are received from the Spoonacular API, and the users have the option of saving individual recipes to, or deleting them from, their own personal cookbooks.",
    resources:
      "HTML, CSS, JavaScript, Node, Express, Handlebars, MySQL, Axios, APIs",
    github: "https://github.com/tharveyster/recipe-search",
    deployed: "https://tranquil-springs-98499.herokuapp.com/",
    image: pic3,
    alt: "Personal Cookbook",
  },
  {
    title: "Tech Blog",
    description: "A tech blog that allows users to read blog posts from other users. Registered users can add, edit, or delete their own posts and comment on posts.",
    resources:
      "HTML, CSS, JavaScript, Node, Express, Handlebars, MySQL, BCrypt, Sequelize, Sequelize Session",
    github: "https://github.com/tharveyster/tech-blog",
    deployed: "https://shrouded-coast-39041.herokuapp.com/",
    image: pic4,
    alt: "Tech Blog",
  },
  {
    title: "E-Commerce Back-End",
    description: "This project is an e-commerce back-end application.",
    resources: "Node, Express, MySQL2, Sequelize, dotenv, Insomnia Core",
    github: "https://github.com/tharveyster/e-commerce-back-end",
    deployed:
      "https://drive.google.com/file/d/17oLpM-PeuqrqMFMzOfQr04hDl0CEhrkR/view",
    image: pic5,
    alt: "E-Commerce Back-End",
  },
  {
    title: "FlixFinder",
    description: "A group project that takes a user submitted movie title and returns information about the movie, a trailer for the movie, and three similar movie titles. A search history is saved to local storage.",
    resources:
      "HTML, CSS, JavaScript, Server Side APIs (OMDB, Google Youtube, TMDB)",
    github: "https://github.com/tharveyster/FlixFinder",
    deployed: "https://tharveyster.github.io/FlixFinder/",
    image: pic6,
    alt: "FlixFinder",
  },
];

export default function Projects() {
  return (
    <div className="work">
      <h2>Portfolio</h2>
      <div className="cards">
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            resources={project.resources}
            github={project.github}
            deployed={project.deployed}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
}
