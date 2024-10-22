/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Monksquare",
    description:
      "Developed a dynamic e-commerce website for a local brand MonkSquare using HTML, CSS, and JavaScript, integrating Firebase for real-time data management and Stripe for secure payment processing",
    url: "https://github.com/karmicharsh/Monksq-2",
  },
  {
    title: "Ecommerce Store",
    description:
      "Built Thapa Store: A responsive e-commerce frontend using React and Vite, featuring product listings and cart functionality",
    url: "https://github.com/karmicharsh/thapa-react-ecom",
  },
  {
    title: "Full stack blogging app",
    description:
      "Developed a Medium-like platform with a React frontend and Cloudflare Workers backend. Utilized Zod for type validation and Prisma with connection pooling for ORM. Implemented JWT for secure authentication and managed data with postgres.",
    url: "https://github.com/karmicharsh/fullStack-Blog",
  },
  {
    title: "Catalouge app",
    description:
      "A responsive catalouge of tech gadgets made using dart and flutter.",
    url: "https://github.com/deepnp7/Flutter-Project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
