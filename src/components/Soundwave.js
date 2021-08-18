import { useState, useRef } from 'react'
import transforming from '../images/transforming.mp3'


const Soundwave = () => {

  const soundwaveContainerRef = useRef()
  const transformMP3ref = useRef()
  const [robot, setRobot] = useState(true)

    const playSound = () => {
      const audioElement = transformMP3ref.current
      audioElement.play()
    }

    const transform = (animation) => {
      soundwaveContainerRef.current.style.animation = animation
    }

  const transformToTapeRecorder = 'transformToTapeRecorder 1.5s linear forwards'
  const transformToRobot = 'transformToRobot 1.5s linear forwards'

  return(
        <>
          <audio ref={transformMP3ref} className='audio-element'>
            <source src={transforming}></source>
          </audio>

          <div ref={soundwaveContainerRef} id='soundwaveContainer'>

              {
                (robot)
                ? <div id='transformButton' onClick={()=> {
                  playSound()
                  transform(transformToTapeRecorder)
                  setRobot(false)
                }}><span>TRANSFORM</span></div>

                : <div id='transformButton' onClick={()=> {
                  playSound()
                  transform(transformToRobot)
                  setRobot(true)
                }}><span>TRANSFORM</span></div>
              }

          </div>
        </>
      )
}

export default Soundwave
