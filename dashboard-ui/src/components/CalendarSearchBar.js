import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



const CalendarSearchBar = (props) => {
  
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const submitDate =(date1, date2)=> {
    console.log('Submitting this date range: ', date1, date2)


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
        submitDate(startDate, endDate)
        props.getReports(dateRange)
      }

    }>submit</button>
    </>
  );

};

export default CalendarSearchBar
