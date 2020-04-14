import React, { useReducer } from "react";
import { DateRangeInput } from "@datepicker-react/styled";
import { ThemeProvider } from "styled-components";

function Calender(props) {

  const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
    vertical: true,
    minDate: new Date("Tue Apr 14 2020 00:00:00 GMT+0200 (centraleuropeisk sommartid)"),
    maxDate: new Date("Tue Apr 21 2020 00:00:00 GMT+0200 (centraleuropeisk sommartid)")
  }

  function reducer(state, action) {
    
    switch (action.type) {
      case 'focusChange':
        return { ...state, focusedInput: action.payload }
      case 'dateChange':
        return action.payload
        case 'verticalChange':
        return action.vertical
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  Date.prototype.getUnixTime = function() {
    return this.getTime()/1000
  };

  let startDateUnix = new Date(state.startDate).getUnixTime();
  let endDateUnix = new Date(state.endDate).getUnixTime();

  let duration = (endDateUnix - startDateUnix) / 86400;
  console.log(duration);
  console.log('minDate: ' + state.minDate);
  console.log('maxDate: ' + state.maxDate);
  
  return (
    <ThemeProvider
    theme={{
      breakpoints: ["32em", "48em", "64em"],
      reactDatepicker: {
        daySize: [36, 40],
        fontFamily: "Segoe UI",
        colors: {
          accessibility: "#3F392F",
          selectedDay: "#B9986D",
          selectedDayHover: "#3F392F",
          primaryColor: "#3F392F"
        }
      }
    }}
  >
    <DateRangeInput
      onDatesChange={data => dispatch({ type: 'dateChange', payload: data })}
      onFocusChange={focusedInput => dispatch({ type: 'focusChange', payload: focusedInput })}
      startDate={state.startDate}
      endDate={state.endDate}
      focusedInput={state.focusedInput}
      vertical={vertical => dispatch({type: 'verticalChange', payload: vertical})}
      displayFormat="dd/MM/yyyy"
      onChange={props.duration}
      minBookingDate={state.minDate}
      maxBookingDate={state.maxDate}
    />
    </ThemeProvider>
  )
}
export default Calender;