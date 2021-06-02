import React, { Component } from 'react'
import BarGraph from './components/BarGraph'
import RetailWholesaleBox from './components/RetailWholesaleBox'
import Uploader from './components/Uploader'
import Soundwave from './components/Soundwave'
import CalendarSearchBar from './components/CalendarSearchBar'
import FeesCommission from './components/FeesCommission'
import AverageTicket from './components/AverageTicket'
import Tips from './components/Tips'
import Login from './components/Login'
import Register from './components/Register'
import CompliantFilesInfo from './components/CompliantFilesInfo'
import AppInfo from './components/AppInfo'
import GetBeer from './components/GetBeer'
import './App.css';


let baseURL = 'http://localhost:8000/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reports: [],
      showLogInForm: false,
      showRegisterForm: false,
      showCompFilesInfo: false,
      showAppInfo: false,
      showCoorsError: false,
      userId: -1,
      welcomeName: ''
    }

  }

  openLoginForm = () => {
    this.setState({
      showLogInForm: true
    })
  }

  closeLoginForm = () => {
    this.setState({
      showLogInForm: false
    })
  }

  openRegisterForm = () => {
    this.setState({
      showRegisterForm: true
    })
  }

  closeRegisterForm = () => {
    this.setState({
      showRegisterForm: false
    })
  }

  openCompFilesInfo = () => {
    this.setState({
      showCompFilesInfo: true
    })
  }

  closeCompFilesInfo = () => {
    this.setState({
      showCompFilesInfo: false
    })
  }

  openAppInfo = () => {
    this.setState({
      showAppInfo: true
    })
  }

  closeAppInfo = () => {
    this.setState({
      showAppInfo: false
    })
  }

  openCoorsError = () => {
    this.setState({
      showCoorsError: true
    })
  }

  closeCoorsError = () => {
    this.setState({
      showCoorsError: false
    })
  }

  setUserId = (data) => {
    console.log('setOwnerId() called: --> ', data)
    this.setState({
      userId: data.data.id,
      welcomeName: data.data.username
    })
  }

  logOut = () => {
    console.log('Log me out please!!')
    fetch(baseURL + 'api/v1/users/logout')
      .then(response => {
      return response.json()
    }).then(
      this.setState({
        userId: -1,
        reports: []
      })
    )
  }

  getReports = (dates) => {
    console.log('DATES: ', dates)

    fetch(baseURL + 'api/v1/reports/' + dates)//<----NEEDED A BACKSLASH!!!???
      .then(response => {
        console.log(response)
        return response.json()
      }).then(data=> {
        // console.log(data)
        this.setState({
          reports: data.data
        })
      })
    }


componentDidMount() {
  console.log('component mounting...')
}

render(){

const toggleClass =  (this.state.userId !== -1) ? 'displayShow' : 'displayNone'

console.log(this.state.userId)
    return (
      <div className='mainContainer'>

          <nav>
              <ul className='navUl'>
              {
                (this.state.userId !== -1)
                ? <>
                    <li onClick={()=> this.logOut()}>LOG OUT</li>
                    <li>HI <span id='welcomeName'>{this.state.welcomeName}!</span></li>
                  </>

                : <>
                    <li onClick={() => this.openLoginForm()}>LOG IN</li>
                    <li onClick={() => this.openRegisterForm()}>REGISTER</li>
                  </>
              }

                  <li onClick={() => this.openAppInfo()}>ABOUT THIS APP</li>
                  <li>Change Theme</li>
              </ul>
          </nav>


          <main className='main1'>

            <RetailWholesaleBox reports={this.state.reports}/>
            <Soundwave/>

          </main>

          <main className='main2'>

                <BarGraph reports={this.state.reports}/>

          </main>

          <div id='sideBar'>
            <div class='sideBarContent'>
              <div className={toggleClass}>
                <CalendarSearchBar reports={this.state.reports} getReports={this.getReports}/>
                <Uploader openCompFilesInfo={this.openCompFilesInfo} getReports={this.getReports}/>
              </div>
            </div>
          </div>

          <div id='content1'>
            <FeesCommission reports={this.state.reports} />
          </div>

          <div id='content2'>
            <button onClick={this.openCoorsError}>fetch( beer )</button>
          </div>

          <div id='content3'>
            <Tips reports={this.state.reports} />
          </div>

          <div id='content4'>
            <AverageTicket reports={this.state.reports} />
          </div>

          <footer>
            <h5>BUILT BY VICTOR TWU -- JUNE, 2021</h5>
          </footer>
          <Login
              logOut={this.logOut}
              closeLoginForm={this.closeLoginForm}
              showLogInForm={this.state.showLogInForm}
              baseURL={baseURL}
              setUserId={this.setUserId}
          />
          <Register
              closeRegisterForm={this.closeRegisterForm}
              showRegisterForm={this.state.showRegisterForm}
              baseURL={baseURL}
          />
          <CompliantFilesInfo
              showCompFilesInfo={this.state.showCompFilesInfo}
              closeCompFilesInfo={this.closeCompFilesInfo}
          />
          <AppInfo
              showAppInfo={this.state.showAppInfo}
              closeAppInfo={this.closeAppInfo}
          />
          <GetBeer
              showCoorsError={this.state.showCoorsError}
              closeCoorsError={this.closeCoorsError}
          />
      </div>
    );
  }

}

export default App;
