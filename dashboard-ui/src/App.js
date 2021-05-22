import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor() {
    super()

  }


// pass in date to search?
getReports = (date) => {
  console.log('getSales called...')
  console.log('Date param passed in: ', date)
}


componentDidMount() {
  console.log('component mounting...')
}

render(){
    return (
      <div className='mainContainer'>
          <nav>

          </nav>

          <main className='main1'>
            <h2>TOTAL:</h2>
            <div id='retailSales'>Net Retail Sales:</div>
            <div id='wholesale'>Net Wholesale:</div>
          </main>

          <main className='main2'>
            <h2>BAR GRAPH HERE...</h2>
          </main>

          <div id='sideBar'>
            <div id='searchBar' onClick={()=> {this.getReports('HOT DATE!')}}>search bar here</div>
          </div>

          <div id='content1'>
            fees/commission
          </div>

          <div id='content2'>
            tips by vendor
          </div>

          <div id='content3'>
            something here
          </div>

          <div id='content4'>
            something here
          </div>

          <footer></footer>
      </div>
    );
  }

}

export default App;
