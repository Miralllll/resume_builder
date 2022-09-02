import "./resumeBar.css";
import "../Button/button.css";
import Button from "../Button/Button.js";
function ResumeBar({ updateSectionNumber, sectionNumber }) {
  return (
    <div className="resume-bar">
      <Button
        title="LATEX"
        dataKey={-1}
        updateSectionNumber={updateSectionNumber}
        sectionNumber={sectionNumber}
      />
      <Button
        title="PERSONAL INFORMATION"
        dataKey={0}
        updateSectionNumber={updateSectionNumber}
        sectionNumber={sectionNumber}
      />
      <Button
        title="WORK EXPERIENCE"
        dataKey={1}
        updateSectionNumber={updateSectionNumber}
        sectionNumber={sectionNumber}
      />
      <Button
        title="EDUCATION"
        dataKey={2}
        updateSectionNumber={updateSectionNumber}
        sectionNumber={sectionNumber}
      />
      <Button
        title="PROJECTS"
        dataKey={3}
        updateSectionNumber={updateSectionNumber}
        sectionNumber={sectionNumber}
      />
      <Button
        title="AWARDS"
        dataKey={4}
        updateSectionNumber={updateSectionNumber}
        sectionNumber={sectionNumber}
      />
      <Button
        title="SKILLS"
        dataKey={5}
        updateSectionNumber={updateSectionNumber}
        sectionNumber={sectionNumber}
      />
    </div>
  );
}

export default ResumeBar;
