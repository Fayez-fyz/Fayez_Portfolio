import React from "react";
import Typewriter from "typewriter-effect";
import Social_Icon from "./Social Icon/Social_Icon";
const Home = () => {
  const download = () => {
    window.open(
      "https://drive.google.com/file/d/1HJlzCxS7RSuH9r1JQHkhyYg72ePrQQUv/view?usp=sharing"
    );
  };
 

  return (
    <>
      <section className="motion" name="home">
        <div className="col-md-12" data-aos="flip-right">
          <div className="text-white text-center">
            <h1 className="text-light m-1" id="playfair">
              Hey! I&apos;m Fayez{" "}
            </h1>
            <div className="type">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Frontend Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Full Stack Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("MERN Stack Developer")
                    .start();
                }}
              />
            </div>
            <a className="btn btn-outline-secondary mt-3" onClick={download}>
              Download CV
            </a>
            <div className="mx-4 my-3 ">
              <Social_Icon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
