import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



const CalendarSearchBar = (props) => {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const submitDate =(dates)=> {
    console.log('Submitting this date range: ', dates)
    fetch('http://localhost:8000/')

  }

  return (
    <>
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
    />

    <button onClick={
      ()=> {
        submitDate(dateRange)
        props.getReports(dateRange)
      }

    }>submit</button>
    </>
  );

};

export default CalendarSearchBar
