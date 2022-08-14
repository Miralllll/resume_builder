import "./resumeBar.css"
import "../Button/button.css"
import { CodeOutlined } from "@ant-design/icons";
import { MdWork } from "react-icons/md";
import { CgAwards } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { Tooltip } from "@material-ui/core";
function ResumeBar() {
    return (
            <div className="resume-bar">
                <Tooltip title="LATEX">
                    <button className="btn resume-btn">
                        <CodeOutlined />
                    </button>
                </Tooltip>
                <Tooltip title="WORK EXPERIENCE">
                    <button className="btn resume-btn">
                        <MdWork />
                    </button>
                </Tooltip>
                <Tooltip title="EDUCATION">
                    <button className="btn resume-btn">
                        <FaGraduationCap />
                    </button>
                </Tooltip>
                <Tooltip title="PROJECTS">
                    <button className="btn resume-btn">
                        <AiOutlineFundProjectionScreen />
                    </button>
                </Tooltip>
                <Tooltip title="AWARDS">
                    <button className="btn resume-btn">
                        <CgAwards />
                    </button>
                </Tooltip>
                <Tooltip title="SKILLS">
                    <button className="btn resume-btn">
                        <GiSkills />
                    </button>
                </Tooltip>
            </div>
    );
}

export default ResumeBar;