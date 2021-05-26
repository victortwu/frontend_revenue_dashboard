import React from 'react'

const RetailWholesaleBox = (props) => {

const retailSales = props.reports.filter(item=> item.wholesale === 'false')
console.log(retailSales)

const wholesale = props.reports.filter(item=> item.wholesale === 'true')
console.log(wholesale)

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
    <>

        <div id='retailSales'>Total Net Retail Sales To Report:
            <h2>${totalRetail.toFixed(2)}</h2>
        </div>
        <div id='wholesale'>Total Net Wholesale to Report:
            <h2>${wholesaleToReport.toFixed(2)}</h2>
        </div>
    </>
  )
}

export default RetailWholesaleBox
