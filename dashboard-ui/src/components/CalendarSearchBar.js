import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// This whole component is pretty much from react-datepicker

const CalendarSearchBar = (props) => {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;



  return (
    <>
    <div className='searchBarContainer'>
    <h5>SEARCH BY DATE RANGE</h5>
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
          props.getReports(dateRange)
        }

      }>submit</button>
    </div>

    </>
  );

};

export default CalendarSearchBar
