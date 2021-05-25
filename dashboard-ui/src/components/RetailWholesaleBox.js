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


  return(
    <>

        <div id='retailSales'>Total Net Retail Sales:
            <h2>${totalRetail}</h2>
        </div>
        <div id='wholesale'>Total Net Wholesale:
            <h2>${totalWholesale}</h2>
        </div>
    </>
  )
}

export default RetailWholesaleBox
