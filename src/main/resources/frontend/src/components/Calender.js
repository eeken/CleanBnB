import React, { useReducer, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calender(props) {

    const [startDate, setStartDate] = useState(new Date());
    
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        placeholderText="Select a day"
      />
    );
};
export default Calender;