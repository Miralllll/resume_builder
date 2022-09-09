import {React} from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Grid  } from '@material-ui/core';
import "./button.css";

function PlusButton ({sectionBoxes, updateSectionBoxes, removePressed, updateRemovePressed, isLast, isZero, index, actualIndex}) {

    const handleAdd = () => {
        var indStr = "" + (Number(actualIndex) + 1);
        var objCurr = { [indStr]: {}};
        var sectionBoxesCrr = [...sectionBoxes];
        sectionBoxesCrr.push(objCurr);
        updateSectionBoxes(sectionBoxesCrr);
    };

    const handleRemove = (index) => {
        updateRemovePressed([true, index]);
    };

    return (
        <div>
        <Grid container justifyContent="center">
            {(() => {
            if(isLast) 
                return (
                    <button id={index} className="mi-btn plus-btn" color="primary" size="large" type="submit" variant="contained" onClick={handleAdd}>
                    <AiOutlinePlusCircle/>
                    </button>);
            })()}
            {(() => {
            if(!isZero) 
                return (
                    <button id={index} className="mi-btn minus-btn" color="primary" size="large" type="submit" variant="contained" onClick={() => {handleRemove(index)}}>
                <AiOutlineMinusCircle/>
                </button>);
            })()}
        </Grid>
      </div>
    );
};

export default PlusButton;