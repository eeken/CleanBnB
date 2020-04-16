import React, { useReducer, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calender(props) {

    const [startDate, setStartDate] = useState(new Date());
  
    console.log('start' + startDate)
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        placeholderText="Select a date"
        excludeDates={[new Date(), (new Date(), 1)]}
      />
    );
};
export default Calender;