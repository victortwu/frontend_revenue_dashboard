import React from 'react'

const BarGraph =(props)=> {

const doorDash = props.reports.filter(report=> report.vendor === 'Doordash')

const uberEats = props.reports.filter(report=> report.vendor === 'UberEats')

const postmates = props.reports.filter(report=> report.vendor === 'Postmates')

const grubhub = props.reports.filter(report=> report.vendor === 'Grubhub')

const doorDashTotal = doorDash.map(item=> {
  return item.subtotal
}).reduce((acc, curr) => acc + curr, 0)
console.log(doorDashTotal)

const uberEatsTotal = uberEats.map(item=> {
  return item.subtotal
}).reduce((acc, curr) => acc + curr, 0)
console.log(uberEatsTotal)

const postmatesTotal = postmates.map(item=> {
  return item.subtotal
}).reduce((acc, curr) => acc + curr, 0)
console.log(postmatesTotal)

const grubhubTotal = grubhub.map(item=> {
  return item.subtotal
}).reduce((acc, curr) => acc + curr, 0)
console.log(grubhubTotal)


  return(
    <>
      <ul>
        <li>DOORDASH SALES: ${doorDashTotal}</li>
        <li>UBEREATS SALES: ${uberEatsTotal}</li>
        <li>POSTMATES SALES: ${postmatesTotal}</li>
        <li>GRUBHUB SALES: ${grubhubTotal}</li>
      </ul>
    </>
  )
}

export default BarGraph
