import React from 'react'

const FeesCommission = (props) => {
  // ---- SEPARATE BY VENDOR -----
  const doorDash = props.reports.filter(report=> report.vendor === 'Doordash')

  const uberEats = props.reports.filter(report=> report.vendor === 'UberEats')

  const postmates = props.reports.filter(report=> report.vendor === 'Postmates')

  const grubhub = props.reports.filter(report=> report.vendor === 'Grubhub')

  //----- EACH VENDOR'S FEES/COMMISSION -----
  const doorDashTotal = doorDash.map(report=> {
    return report.fee + report.commission
  }).reduce((acc, curr) => acc + curr, 0)

  const uberEatsTotal = uberEats.map(report=> {
    return report.commission
  }).reduce((acc, curr) => acc + curr, 0)

  const postmatesTotal = postmates.map(report=> {
    return report.commission
  }).reduce((acc, curr) => acc + curr, 0)

  const grubhubTotal = grubhub.map(report=> {
    return report.fee + report.commission
  }).reduce((acc, curr) => acc + curr, 0)

  const totalCommission = doorDashTotal + uberEatsTotal + postmatesTotal + grubhubTotal

    return(
      <>
      <div className='content3and4Container'>
      <h4>Fees & Commission</h4>
      <h4>Total: <span id='totalSpan'>{totalCommission.toFixed(2)}</span></h4>

          <h5>DOORDASH: <span id='totalSpan'>{doorDashTotal.toFixed(2)}</span></h5>
          <h5>UBEREATS: <span id='totalSpan'>{uberEatsTotal.toFixed(2)}</span></h5>
          <h5>POSTMATES: <span id='totalSpan'>{postmatesTotal.toFixed(2)}</span></h5>
          <h5>GRUBHUB: <span id='totalSpan'>{grubhubTotal.toFixed(2)}</span></h5>

      </div>
      </>
    )

}

export default FeesCommission
