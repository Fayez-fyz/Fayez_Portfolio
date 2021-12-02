import React, { useEffect, useRef } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-scroll";

const Projects = () => {
  const deploysocial = () => {
    window.open("https://fyz-capstone.netlify.app");
  };
  const deploychatapp = () => {
    window.open("https://fyz-chat-app.netlify.app");
  };
  const deploycribsapp = () => {
    window.open("https://fyz-cribs-app.netlify.app");
  };
  const deploytodoapp = () => {
    window.open("https://fyz-todo-app.netlify.app/login");
  };
  const deployexpense = () => {
    window.open("https://fyz-moneymanager.netlify.app/login");
  };
  const deploysbadmin = () => {
    window.open("https://fayez-formik-crud-react.netlify.app");
  };
  const deploycryptoapi = () => {
    window.open("https://fayez-cryptocurrency-task.netlify.app");
  };
  //github
  const githubsocial = () => {
    window.open("https://github.com/Fayez-fyz/fyz-capstone-frontend");
  };
  const githubchatapp = () => {
    window.open("https://github.com/Fayez-fyz/FYZ-Chat-App");
  };
  const githubcribsapp = () => {
    window.open("https://github.com/Fayez-fyz/fyz-cribs-react");
  };
  const githubtodoapp = () => {
    window.open("https://github.com/Fayez-fyz/Todo_app_react");
  };
  const githubexpense = () => {
    window.open("https://github.com/Fayez-fyz/money-manager-react");
  };
  const githubsbadmin = () => {
    window.open("https://github.com/Fayez-fyz/formik-CRUD");
  };
  const githubcryptoapi = () => {
    window.open("https://fayez-cryptocurrency-task.netlify.app");
  };

  const github = () => {
    window.open("https://github.com/Fayez-fyz");
  };

  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTo(35, 0);
    }
  }, []);

  const scrollLeft = () => {
    if (container.current) {
      container.current.scrollBy(322, 0);
    }
  };
  const scrollRight = () => {
    if (container.current) {
      container.current.scrollBy(-322, 0);
    }
  };

  return (
    <>
      <section style={{ backgroundColor: "#121222" }} name="project">
        <div className="container py-5">
          <div data-aos="fade-down">
            <h1 className=" text-light text-center " id="montserrat">
              Projects
            </h1>
            <hr className="w-100 text-light mx-auto" />
          </div>
          <div >
            <ScrollContainer
              className="scroll-container mt-5"
              innerRef={container}
            >
              <Link smooth={true}>
                <div className="row flex-nowrap" data-aos="fade-right">
                  <div className="col-md-4" style={{ width: "28rem" }}>
                    <div className="card cd border border-5 rounded-3 ">
                      <img
                        src="/images/social.jpg"
                        className="card-img"
                        alt="social"
                      />
                      <div className="card-img-overlay" id="playfair">
                        <div className=" text-center my-5">
                          <h5 className="text-white fs-2 ">Social App</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deploysocial}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubsocial}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" style={{ width: "28rem" }}>
                    <div className="card cd border border-5 rounded-3 ">
                      <img
                        src="/images/chat-app.jpg"
                        className="card-img"
                        alt="social"
                      />
                      <div className="card-img-overlay" id="playfair">
                        <div className="text-center my-5">
                          <h5 className="text-white fs-2 ">Chat App</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deploychatapp}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubchatapp}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" style={{ width: "28rem" }}>
                    <div className="card cd border border-5 rounded-3">
                      <img
                        src="/images/cribs.jpg"
                        className="card-img "
                        alt="crud"
                      />
                      <div className="card-img-overlay" id="playfair">
                        <div className="text-center my-5">
                          <h5 className="text-white fs-2 ">Cribs App</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deploycribsapp}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubcribsapp}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" style={{ width: "28rem" }}>
                    <div className="card cd border border-5 rounded-3">
                      <img
                        src="/images/money-manager.jpg"
                        className="card-img "
                        alt="expense"
                      />
                      <div className="card-img-overlay " id="playfair">
                        <div className="text-center my-5">
                          <h5 className="text-white fs-2 ">Expense Tracker</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deployexpense}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubexpense}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 " style={{ width: "28rem" }}>
                    <div className="card cd border border-5 rounded-3">
                      <img
                        src="/images/todoapp.jpg"
                        className="card-img "
                        alt="todo"
                      />
                      <div className="card-img-overlay " id="playfair">
                        <div className="text-center my-5">
                          <h5 className="text-white fs-2 ">Todo App</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deploytodoapp}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubtodoapp}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" style={{ width: "28rem" }}>
                    <div className="card cd border border-5 rounded-3">
                      <img
                        src="/images/formik.jpg"
                        className="card-img"
                        alt="SB"
                      />
                      <div className="card-img-overlay " id="playfair">
                        <div className="text-center my-5">
                          <h5 className="text-white fs-2 ">SB Admin</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deploysbadmin}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubsbadmin}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" style={{ width: "28rem" }}>
                    <div className="card cd border border-5 rounded-3">
                      <img
                        src="/images/cryptoapi.jpg"
                        className="card-img "
                        alt="crypto"
                      />
                      <div className="card-img-overlay " id="playfair">
                        <div className="text-center my-5">
                          <h5 className="text-white fs-2 ">Live Crypto App</h5>
                          <a
                            className="btn btn-outline-success text-white  border-white mx-1"
                            onClick={deploycryptoapi}
                          >
                            Deploy Link
                          </a>
                          <a
                            className="btn btn-outline-primary text-white border-white mx-1"
                            onClick={githubcryptoapi}
                          >
                            Github Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollContainer>
          </div>

          <div>
          <div className="text-center mt-4">
            <button
              onClick={scrollRight}
              className="btn btn-sm btn-outline-secondary mx-3 border-white text-white"
              data-aos="fade-right"
            >
              <ArrowLeftOutlined className=" text-white h5" />
            </button>
            <button
              onClick={scrollLeft}
              className="btn btn-sm btn-outline-secondary mx-3 border-white text-white"
              data-aos="fade-left"
            >
              <ArrowRightOutlined className="text-white h5" />
            </button>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <a
              className="btn btn-outline-secondary border-white text-white"
              onClick={github}
              data-aos="fade-up"
            >
              See more
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
