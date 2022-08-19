import {React} from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Tooltip } from "@material-ui/core";
import { Grid  } from '@material-ui/core';
import "./button.css";

function PlusButton () {

    return (
        <div>
        <Grid container justify="center">
          <button class="mi-btn plus-btn" color="primary" size="large" type="submit" variant="contained" >
          <AiOutlinePlusCircle/>
          </button>
          <button class="mi-btn minus-btn" color="primary" size="large" type="submit" variant="contained" >
          <AiOutlineMinusCircle/>
          </button>
        </Grid>
      </div>
    );
};

export default PlusButton;