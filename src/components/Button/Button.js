import {React, useState, useEffect} from "react";
import "./button.css";
import { CodeOutlined } from "@ant-design/icons";
import { MdWork } from "react-icons/md";
import { CgAwards } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { Tooltip } from "@material-ui/core";

function Button ({title, dataKey, updateSectionNumber, sectionNumber}) {
    const [key, ] = useState(dataKey);
    const [isActive, setIsActive] = useState(sectionNumber === dataKey? true:false);
    console.log("sectionnumber is " + sectionNumber);

    const handleSectionButton = (dataKey) => {
        console.log(dataKey + " " + isActive + " " + key);
        // if(isActive === false) return;
        setIsActive(true);
        updateSectionNumber(dataKey);
        console.log("sectionnumber is handle " +sectionNumber);
    };

    useEffect(() => {
        if(sectionNumber !== dataKey) {
            setIsActive(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionNumber]);

    return (
        <Tooltip title={title} className={title}>
            <button 
            className = {isActive ? "mi-btn resume-btn pressed-btn" : "mi-btn resume-btn"}
            
            onClick={() => handleSectionButton(key)}>
                {(() => {
                    switch(title) {
                        case "LATEX": return (<CodeOutlined/>);
                        case "PERSONAL INFORMATION": return (<BsFillPersonFill/>);
                        case "WORK EXPERIENCE": return (<MdWork/>);
                        case "EDUCATION": return (<FaGraduationCap/>);
                        case "PROJECTS": return (<AiOutlineFundProjectionScreen/>);
                        case "AWARDS":return (<CgAwards/>);
                        case "SKILLS":return (<GiSkills/>);
                        default:
                            return null;
                    }
                })()}
            </button>
        </Tooltip>
    );
};

export default Button;