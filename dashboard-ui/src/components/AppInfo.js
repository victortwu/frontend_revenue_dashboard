import React from 'react'

const AppInfo = (props) => {

const toggleClass = (props.showAppInfo) ? 'displayShow' : 'displayNone'

  return(
  <div className={toggleClass}>
      <div className='modalBackground'>
          <div className='modalContainer'>
              <div className='infoDivFiles'>
                  <h3>3rd PARTY ORDER APP DASHBOARD</h3>
                  <h3>FOR THE RESTAURANT OWNER</h3>
                  <p>Problem: third party vendors like UberEats and Doordash all have DIFFERENT sets of reporting data.</p>
                  <p>In order to file tax returns or create other types of reports, a restaurant owner/manager must log in to each vendor's portal and perform calculations one by one.</p>
                  <p>This can be up to several vendors!</p>
                  <p>This dashboard app parses Doordash, UberEats, Postmates, Grubhub and Kiosk Buddy's data</p>
                  <p>and provides the client with the MOST useful information in ONE dashboard.</p>
                  <p>In fact, this iteration is set to provide instant Department of Revenue reporting information for restaurants in the Seattle, King County, Washington State area.</p>
                  <p>.....it also has SOUNDWAVE</p>
                  <button id='xCloseBtn' onClick={()=> props.closeAppInfo()}>X</button>
              </div>
          </div>
      </div>
  </div>
  )
}

export default AppInfo
