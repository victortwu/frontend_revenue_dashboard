import React from 'react'

const GetBeer = (props) => {

const toggleClass = (props.showCoorsError) ? 'displayShow' : 'displayNone'

  return(
  <div className={toggleClass}>
      <div className='modalBackground'>
        <div className='errorDiv'>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <h3>--------------- ERROR: failed to fetch. COORS not allowed</h3>
          <p>-</p>
          <h3>--------------- Type Error: fetch is not a function of stupid</h3>
          <p>-</p>
          <p>-</p>
          <h3>--------------- Get your lazy ass up and get it yourself!</h3>
          <button onClick={()=> props.closeCoorsError()}>ESC</button>
        </div>
      </div>
  </div>
  )
}

export default GetBeer
