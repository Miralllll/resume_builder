import React from "react";
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import { Grid  } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import "./element.css";
const DatePickerLCL = ({field_label}) => {
    const [date, setSelectedDate] = React.useState(
        Date().toLocaleString() + ""
        // new Date("2021-09-11T12:00:00")
    );
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="mb-3 col-6">
            <label htmlFor="exampleDatePicker" className="date-label">{field_label}</label>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container >
                    <KeyboardDatePicker
                    // disableToolbar
                    className="date-picker"
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker"
                    value={date}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label" : "change date"
                    }}
                    />
                </Grid>
                
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default DatePickerLCL;