/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me.jpg";


/*const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};
*/

const imageAltText = "Person in a professional setting";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", height: "100vh" }}>
    {/* Make the background image cover the full section with object positioning to focus on the upper part */}
    <img 
      className="background" 
      src={image} 
      alt="" 
      style={{ 
        objectFit: "cover", 
        objectPosition: "35% 35%",  // Adjust this to position the image correctly (focuses on the upper part of the image)
        width: "100%", 
        height: "100%", 
        position: "absolute", 
        zIndex: "-1" 
      }} 
    />
    
    {/* Text positioning: shift upwards and make the text container larger */}
    <div style={{ position: "absolute", top: "30%", left: "2rem", width: "20rem" }}>
      <h1 style={{ fontSize: "3rem", margin: "0", color:"white" }}>{name}</h1>
      <h2 style={{ fontSize: "1.5rem", margin: "0.5rem 0", color:"white" }}>{title}</h2>
    </div>

    {/* Arrow positioning: push lower and make it smaller */}
    <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}>
      <img 
        src={arrowSvg} 
        style={{ height: "2rem", width: "2rem" }} 
        alt={imageAltText} 
      />
    </div>
  </section>
);
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
