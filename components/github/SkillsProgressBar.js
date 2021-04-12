import { Col, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

const SkillsProgressBar = () => {
  const theme = useSelector((state) => state.theme);
  
  return (
    <Col md={9} className="mt-5 mt-md-0 px-md-4 h-100">
      <div>
        <div className="mb-5">
          <h2 className="font-weight-light">
            HTML5 / CSS3 / Javascript / Bootstrap
          </h2>
          <ProgressBar variant={theme && theme==="dark"?"progress-bar-dark":""} animated now={90} label={"90%"} />
        </div>
        <div className="mb-5">
          <h2 className="font-weight-light">React.js / Redux / Next.js</h2>
          <ProgressBar variant={theme && theme==="dark"?"progress-bar-dark":""} animated now={90} label={"90%"} />
        </div>
        <div className="mb-5">
          <h2 className="font-weight-light">Node.js / MongoDB / API Rest</h2>
          <ProgressBar variant={theme && theme==="dark"?"progress-bar-dark":""} animated now={90} label={"90%"} />
        </div>
        <div className="mb-5">
          <h2 className="font-weight-light">
            AWS (S3 / SES / IAM / Amplify) / Heroku / Firebase
          </h2>
          <ProgressBar variant={theme && theme==="dark"?"progress-bar-dark":""} animated now={70} label={"70%"} />
        </div>
        <div>
          <h2 className="font-weight-light">Photoshop</h2>
          <ProgressBar variant={theme && theme==="dark"?"progress-bar-dark":""} animated now={60} label={"60%"} />
        </div>
      </div>
    </Col>
  );
};
export default SkillsProgressBar;
