import React from 'react'

const AverageTicket = (props) => {

  const thirdPartyVendors = props.reports.filter(report => report.vendor !== 'KioskBuddy')

  const thirdPartySubtotal = thirdPartyVendors.map(vendor=> {
    return vendor.subtotal
  }).reduce((acc, curr)=> acc + curr, 0)

  const totalFees = thirdPartyVendors.map(report=> {
    if (report.vendor === 'Doordash' || report.vendor === 'Grubhub') {
      return report.fee + report.commission
    } else {
      return report.commission
    }
  }).reduce((acc, curr) => acc + curr, 0)

  const avgTicket = (thirdPartySubtotal + totalFees) / thirdPartyVendors.length

return(
    <div className='content3and4Container'>
          <h4>NET</h4>
          <h4>3rd Party Average Ticket:</h4>
          {
            (isNaN(avgTicket) === false)
            ? <h1 id='avgTicketH1'>${avgTicket.toFixed(2)}</h1>
            : ''
          }

    </div>
  )
}

export default AverageTicket
