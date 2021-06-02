import React from 'react'

const RetailWholesaleBox = (props) => {

const retailSales = props.reports.filter(item=> item.wholesale === 'false')

const wholesale = props.reports.filter(item=> item.wholesale === 'true')


const totalRetail = retailSales.map(report=> {
  return report.subtotal
}).reduce((acc, curr)=> acc + curr, 0)

const totalWholesale = wholesale.map(report=> {
  return report.subtotal
}).reduce((acc, curr)=> acc + curr, 0)

const commission = wholesale.map(report=> {
  return report.commission
}).reduce((acc, curr)=> acc + curr, 0)

const wholesaleToReport = totalWholesale + commission


  return(
    <div className='salesToReportDiv'>

        <div className='finalTotalDiv'>
            <h5>Retail Sales To Report:</h5>
            <h2>${totalRetail.toFixed(2)}</h2>
        </div>
        <div className='finalTotalDiv'>
            <h5>Wholesale Sales To Report:</h5>
            <h2>${wholesaleToReport.toFixed(2)}</h2>
        </div>
    </div>
  )
}

export default RetailWholesaleBox
