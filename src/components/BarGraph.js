import React from 'react'

const BarGraph =(props)=> {

  // ---- SEPARATE BY VENDOR -----
  const doorDash = props.reports.filter(report=> report.vendor === 'Doordash')

  const uberEats = props.reports.filter(report=> report.vendor === 'UberEats')
  
  const postmates = props.reports.filter(report=> report.vendor === 'Postmates')

  const grubhub = props.reports.filter(report=> report.vendor === 'Grubhub')

  //----- EACH VENDOR'S SUBTOTAL -----
  const doorDashTotal = doorDash.map(item=> {
    return item.subtotal
  }).reduce((acc, curr) => acc + curr, 0)

  const uberEatsTotal = uberEats.map(item=> {
    return item.subtotal
  }).reduce((acc, curr) => acc + curr, 0)
  console.log(uberEatsTotal)
  const postmatesTotal = postmates.map(item=> {
    return item.subtotal
  }).reduce((acc, curr) => acc + curr, 0)

  const grubhubTotal = grubhub.map(item=> {
    return item.subtotal
  }).reduce((acc, curr) => acc + curr, 0)


  //----- CONVERT SUBTOTALS TO VALUES FOR SVG HEIGHT VALUES ------
  let doorDashHeight = Math.floor(((doorDashTotal / 100) * 3.75) + 1)
  let uberEatsHeight = Math.floor(((uberEatsTotal / 100) * 3.75) + 1)
  let postmatesHeight = Math.floor(((postmatesTotal / 100) * 3.75) + 1)
  let grubhubHeight = Math.floor(((grubhubTotal / 100) * 3.75) + 1)

    if ( doorDashHeight > 100 ) {
      doorDashHeight = 100
    }

    if ( uberEatsHeight > 100 ) {
      uberEatsHeight = 100
    }

    if ( postmatesHeight > 100 ) {
      postmatesHeight = 100
    }

    if ( grubhubHeight > 100 ) {
      grubhubHeight = 100
    }

  const ddY = 100 - doorDashHeight
  const ueY = 100 - uberEatsHeight
  const pmY = 100 - postmatesHeight
  const ghY = 100 - grubhubHeight

  return(
  <>
    <div className='svgWrapper'>
      <svg
        viewBox='0 0 100 100'
        width='100%'
        height='100%'
        preserveAspectRatio='xMidYMax meet'
        >
          <rect fill='#ff44cc' fill-opacity='.7' x='15%' y={ddY} width='8%' height={doorDashHeight}/>
          <rect fill='#fff300' fill-opacity='.7' x='35%' y={ueY} width='8%' height={uberEatsHeight}/>
          <rect fill='#39FF14' fill-opacity='.7' x='55%' y={pmY} width='8%' height={postmatesHeight}/>
          <rect fill='#15f4ee' fill-opacity='.7' x='75%' y={ghY} width='8%' height={grubhubHeight}/>
      </svg>
    </div>

    <div className='legendWrapper'>
        <div id='ddLegend'><h6>DOORDASH SALES:</h6><p>${doorDashTotal.toFixed(2)}</p></div>
        <div id='ueLegend'><h6>UBEREATS SALES:</h6><p>${uberEatsTotal.toFixed(2)}</p></div>
        <div id='pmLegend'><h6>POSTMATES SALES:</h6><p>${postmatesTotal.toFixed(2)}</p></div>
        <div id='ghLegend'><h6>GRUBHUB SALES:</h6><p>${grubhubTotal.toFixed(2)}</p></div>
    </div>
  </>

  )
}

export default BarGraph
