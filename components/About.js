import React from "react";
import "devicon";


const About = () => {
 
  return (
    <>
      <section name="about">
        <div className="container py-5 ">
          <div data-aos="fade-down">
            <h1 className="display-5 text-center " id="montserrat">
              About
            </h1>
            <hr className="w-100 mx-auto" />
          </div>
          <div className="row">
            <div className="col-lg-8" data-aos="fade-right">
              <div className="card" id="about_card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="/images/fz_pic.jpg"
                      className="img-fluid"
                      alt="fyz"
                      id="pic"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text fw-bold" id="montserrat">
                        Hello! I'm Fayez, a Full stack developer from Tamil
                        Nadu,India.
                        <br /> <br />
                        I have 5 month of experience in MERN technologies.And
                        also I have good designing skills ,development skills
                        and problem solving skills I develop web apps with
                        appealing UI and robust performance. Worked in so many
                        libraries & frameworks like ReactJS, Bootstrap, NodeJS
                        worked using so many technologies like Git,heroku. It
                        does feel amazing to see myself improving.I had
                        published 10+ webapps on netlify. <br /> <br /> Right
                        now,I currently going to complete Full stack developer
                        course in Guvi geek network private limited. In this
                        course i participated two hackathons, one capstone and
                        more mini projects.
                        <br /> <br />I have many hobbies like play table tennis,
                        football, explore new places with friends , coding,
                        designing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 " data-aos="fade-left">
              <div
                className=" text-white text-center py-3 mt-1 h-100"
                style={{ backgroundColor: "#121222" }}
              >
                <div className="col-md-12">
                  <h4 className="text-white " id="montserrat">
                    SKILLS
                  </h4>
                  <hr className="w-75 mx-auto" />
                  <div className="row row-cols-3 mx-4">
                    <i
                      className="devicon-html5-plain colored my-3"
                      id="skills"
                      title="HTML"
                    ></i>
                    <i
                      className="devicon-css3-plain colored my-3"
                      id="skills"
                      title="CSS"
                    ></i>
                    <i
                      className="devicon-javascript-plain colored my-3"
                      id="skills"
                      title="JavaScript"
                    ></i>
                    <i
                      className="devicon-bootstrap-plain colored my-3"
                      id="skills"
                      title="Bootstrap"
                    ></i>
                    <i
                      className="devicon-materialui-plain colored my-3"
                      id="skills"
                      title="Material UI"
                    ></i>
                    <i
                      className="devicon-react-original colored my-3"
                      id="skills"
                      title="React"
                    ></i>
                    <i
                      className="devicon-nodejs-plain colored my-3"
                      id="skills"
                      title="Node JS"
                    ></i>
                    <i
                      className="devicon-express-original my-3"
                      id="skills"
                      title="Express JS"
                    ></i>
                    <i
                      className="devicon-mongodb-plain colored  my-3"
                      id="skills"
                      title="Mongo DB"
                    ></i>
                    <i
                      className="devicon-nextjs-line my-3"
                      id="skills"
                      title="Next JS"
                    ></i>
                    <i
                      className="devicon-github-original my-3"
                      id="skills"
                      title="Github"
                    ></i>
                    <i
                      className="devicon-heroku-original colored my-3"
                      id="skills"
                      title="Heroku"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row " data-aos="fade-up">
            <div className="col-md-12" >
              <div
                className="text-light py-3 my-2"
                style={{ backgroundColor: "#121222" }}
              >
                <blockquote className="blockquote lead text-center fs-4">
                  <p>"I may not to be perfect,but I am surely of some help"</p>{" "}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
