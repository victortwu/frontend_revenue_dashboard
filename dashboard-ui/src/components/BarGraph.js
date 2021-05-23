import React from 'react'

const BarGraph =(props)=> {
console.log(props.reports)

  return(
    <>
      {
        props.reports.map(report=> {

            return <li>{report.vendor}:  {report.subtotal}</li>

          })

      }







    </>
  )
}

export default BarGraph
