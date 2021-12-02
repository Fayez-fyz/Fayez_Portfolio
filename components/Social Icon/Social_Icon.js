import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Social_Icon = () => {
  const github = () => {
    window.open("https://github.com/Fayez-fyz");
  };
  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/fayez-b-316684203/");
  };
  const facebook = () => {
    window.open("https://www.facebook.com/Zeyaf");
  };
  const instagram = () => {
    window.open("https://www.instagram.com/zyf_fyz_007/");
  };
  const twitter = () => {
    window.open("https://twitter.com/zeyaffayez007");
  };

  return (
    <>
      <GithubOutlined
        title="Github"
        type="button"
        onClick={github}
        className="social mx-2 "
        style={{ fontSize: "3em" }}
      />
      <LinkedinOutlined
        title="LinkedIn"
        type="button"
        onClick={linkedIn}
        className="social mx-2"
        style={{ fontSize: "3em" }}
      />
      <FacebookOutlined
        title="Facebook"
        type="button"
        onClick={facebook}
        className=" social mx-2 "
        style={{ fontSize: "3em" }}
      />
      <InstagramOutlined
        title="Instagram"
        type="button"
        onClick={instagram}
        className="social mx-2"
        style={{ fontSize: "3em" }}
      />
      <TwitterOutlined
        title="Twitter"
        type="button"
        onClick={twitter}
        className="social mx-2"
        style={{ fontSize: "3em" }}
      />
    </>
  );
};

export default Social_Icon;
