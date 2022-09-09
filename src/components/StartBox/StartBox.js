import React, { useState, useEffect, useRef } from "react";
import StarterBoxCont from "./StarterBoxCont";
import "../Button/button.css";
import { useParams } from "react-router-dom";
import formJSON from "../../JSONData/starterFormElements.json";

function StartBox() {
  const { id } = useParams();
  const { fields, section_label, size } = formJSON[id] ?? {};
  const [sectionInfo, updateSectionInfo] = useState({
    email: "",
    password: "",
    name: ""
  });
  var fieldsCopy = fields;
  var sizeCopy = size;
  var copy_section_label = section_label;

  return (
    <div className="starter-work-sheet">
      <div>
        <div className="starter-work-sheet">
          <StarterBoxCont
            key={id}
            sectionNumber={id}
            updateSectionNumber={undefined}
            sectionInfo={sectionInfo}
            updateSectionInfo={updateSectionInfo}
            fields={fieldsCopy}
            size={sizeCopy}
            section_label={copy_section_label}
          ></StarterBoxCont>
        </div>
      </div>
    </div>
  );
}

export default StartBox;
