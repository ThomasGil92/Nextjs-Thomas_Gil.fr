import { Row } from "react-bootstrap";
import React from "react";
import GithubCard from "../../components/github/GithubCard";
import SkillsProgressBar from "../../components/github/SkillsProgressBar";
import { useSelector } from "react-redux";

const Github = ({ githubData }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <div id="skills" className={theme && theme !== "light" ? "text-white" : ""}>
      <h1 className="my-5 text-center font-weight-light">Mes Skills</h1>
      <Row className="text-center p-md-5 mx-0 mb-5 align-items-center">
        {githubData && <GithubCard githubData={githubData} />}
        <SkillsProgressBar />
      </Row>
    </div>
  );
};

export default Github;
