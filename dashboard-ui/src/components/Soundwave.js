import React, { Component } from 'react'
import transforming from '../images/transforming.mp3'




class Soundwave extends Component {
  constructor(){
    super()
    this.state = {
      robot: true
    }
  }

    playSound= () => {
      const audioElement = document.getElementsByClassName('audio-element')[0]
      audioElement.play()
    }

    transform =(animation)=> {
      document.getElementById('soundwaveContainer').style.animation = animation
    }

    toggleFalse=()=> {
      this.setState({
        robot: false
      })
    }

    toggleTrue=()=> {
      this.setState({
        robot: true
      })
    }

  render(){
    const transformToTapeRecorder = 'transformToTapeRecorder 1.5s linear forwards'
    const transformToRobot = 'transformToRobot 1.5s linear forwards'


    return(
      <>
      <audio className='audio-element'>
        <source src={transforming}></source>
      </audio>

      {
        (this.state.robot)
        ? <div id='transformButton' onClick={()=> {
          this.playSound()
          this.transform(transformToTapeRecorder)
          this.toggleFalse()
        }}><div>TRANS</div><div>FORM</div></div>

        : <div id='transformButton' onClick={()=> {
          this.playSound()
          this.transform(transformToRobot)
          this.toggleTrue()
        }}><div>TRANS</div><div>FORM</div></div>

      }


      <div id='soundwaveContainer'></div>


      </>
      )
    }

  }

export default Soundwave
