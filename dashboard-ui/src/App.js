import React, { Component } from 'react'
import BarGraph from './components/BarGraph'
import RetailWholesaleBox from './components/RetailWholesaleBox'
import Uploader from './components/Uploader'
import Soundwave from './components/Soundwave'
import CalendarSearchBar from './components/CalendarSearchBar'
import FeesCommission from './components/FeesCommission'
import AverageTicket from './components/AverageTicket'
import Tips from './components/Tips'
import './App.css';


let baseURL = 'http://localhost:8000/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reports: []
    }

  }


// pass in date to search?
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

// console.log(this.state.reports)
    return (
      <div className='mainContainer'>
          <nav>
              <ul className='navUl'>
                  <li>Log In</li>
                  <li>Register</li>
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

                <CalendarSearchBar reports={this.state.reports} getReports={this.getReports}/>
                <Uploader getReports={this.getReports}/>
            </div>
          </div>

          <div id='content1'>
            <FeesCommission reports={this.state.reports} />
          </div>

          <div id='content2'>
            tips by vendor
          </div>

          <div id='content3'>
            <Tips reports={this.state.reports} />
          </div>

          <div id='content4'>
            <AverageTicket reports={this.state.reports} />
          </div>

          <footer></footer>
      </div>
    );
  }

}

export default App;
