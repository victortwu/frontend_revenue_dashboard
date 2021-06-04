import React from 'react'

const CompliantFilesInfo = (props) => {

const toggleClass = (props.showCompFilesInfo) ? 'displayShow' : 'displayNone'

  return(
  <div className={toggleClass}>
      <div className='modalBackground'>
          <div className='modalContainer'>
              <div className='infoDivFiles'>
                  <h3>INFO ABOUT FILES</h3>
                  <p>Upload correct .csv files from vendors only.</p>
                  <p>After providing merchant credentials...</p>
                  <p>For Doordash and Grubhub: download "transactions".</p>
                  <p>WARNING: Doordash is tricky, too many options for transactions reports.</p>
                  <p>For UberEats: select and download "PAYMENT DETAILS"</p>
                  <p>NOTE: do not download reports labeled as Postmates reports FROM UberEats portal.</p>
                  <p>Get Postmates files from Postmates portal. Select from orders, NOT PAYMENTS</p>
                  <button id='xCloseBtn' onClick={()=> props.closeCompFilesInfo()}>X</button>
              </div>
          </div>
      </div>
  </div>
  )
}

export default CompliantFilesInfo
