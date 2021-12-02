import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Social_Icon from "./Social Icon/Social_Icon";
const Contact = () => {
  const [response, setResponse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const data = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_ID
      );
      console.log(data);
      if (data.status == 200) {
        setResponse("Your message successfully sent");

        setTimeout(() => {
          setResponse("");
        }, 8000);
      }

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setResponse("Something wrong in server");
      setTimeout(() => {
        setResponse("");
      }, 8000);
      console.log(error);
    }
  };

  return (
    <>
      <section name="contact">
        <div className="container py-3">
          <div data-aos="fade-down">
            <h1 className="text-center mt-5" id="montserrat">
              Contact
            </h1>
            <hr className="w-100 mx-auto" />
          </div>
          <div
            className="text-white px-3 py-3"
            style={{ backgroundColor: "#121222" }}
          >
            <div className="row">
              <div className="col-md-6 " data-aos="fade-right">
                <div
                  className={`lead text-center ${
                    response === "Your message successfully sent"
                      ? "text-success"
                      : "text-danger"
                  } `}
                >
                  {response}
                </div>
                <form onSubmit={sendEmail}>
                  <div className="form-group">
                    <label className="" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control text-white"
                      style={{ backgroundColor: "#121222" }}
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control  text-white"
                      style={{ backgroundColor: "#121222" }}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="user_email"
                      required
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control  text-white"
                      style={{ backgroundColor: "#121222" }}
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="8"
                      required
                      placeholder="Message"
                    />
                  </div>
                  <input
                    className="btn btn-outline-secondary border-white text-white my-2 col-12"
                    type="submit"
                    defaultValue="Submit"
                    onClick={() => response}
                  />
                </form>
              </div>

              <div className="col-md-6 " data-aos="fade-left">
                <div className="container py-2 ">
                  <div className="my-4 d-flex justify-content-center ">
                    <EnvironmentOutlined
                      style={{ fontSize: "3rem", textAlign: "center" }}
                      size={10}
                    >
                      {" "}
                    </EnvironmentOutlined>
                    <span className="lead mx-3"> Thanjavur,Tamil Nadu</span>
                  </div>
                  <div className="my-4 d-flex justify-content-center">
                    <PhoneOutlined
                      style={{ fontSize: "3rem", textAlign: "center" }}
                      size={10}
                    >
                      {" "}
                    </PhoneOutlined>
                    <span className="lead mx-3"> +91-8098838503</span>
                  </div>
                  <div className="my-4 d-flex justify-content-center">
                    <MailOutlined
                      style={{ fontSize: "3rem", textAlign: "center" }}
                      size={10}
                    >
                      {" "}
                    </MailOutlined>
                    <span className="lead mx-3"> zeyaffayez007@gmail.com</span>
                  </div>

                  <hr className="w-100 mt-3" />
                  <div className="d-flex justify-content-center my-4 ">
                    <Social_Icon />
                  </div>
                  <hr className="w-100 mt-3" />
                  <div className="text-center">
                    &copy; ALL OF THE RIGHTS RESERVED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
