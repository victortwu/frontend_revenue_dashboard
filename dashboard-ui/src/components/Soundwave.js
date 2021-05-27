import React, { Component } from 'react'
import soundwaveStanding from '../images/soundwave-standing.png'
import transforming from '../images/transforming.mp3'

class Soundwave extends Component {

playSound() {
  console.log('playSound() clicked...')
  const audioElement = document.getElementsByClassName('audio-element')[0]
  audioElement.play()
}

render(){
  return(
    <div className='soundwaveContainer'>
      <img onClick={this.playSound} src={soundwaveStanding}/>
      <audio className='audio-element'>
        <source src={transforming}></source>
      </audio>
    </div>
    )
  }

}

export default Soundwave
