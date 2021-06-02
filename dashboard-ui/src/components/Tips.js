import React from 'react'

const Tips = (props) => {

  const tips = props.reports.map(report=> {
    return report.tip
  }).reduce((acc, curr)=> acc + curr, 0)
  
  return(
    <div className='tipsContainer'>
          <h4>Total Tips:</h4>


      <h1 id='avgTicketH1'>${tips.toFixed(2)}</h1>


    </div>
  )

}

export default Tips
