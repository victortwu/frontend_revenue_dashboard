import React from 'react'

const Backgrounds = () => {


  const blackBackground = () => {
      document.body.style.background = 'linear-gradient(#1b1b2f, black, #1f4068, #162447)'
  }

  const rainbowBackground = () => {
      document.body.style.background = "linear-gradient(10deg, var(--pink), var(--brightPink), var(--yellow), var(--brightYellow), var(--mint), var(--turquoise), var(--lightBlue), var(--purple), var(--purplePink))"
  }

  const planetBackground = () => {
      document.body.style.background = "url('./images/background.jpeg')"
  }

  return(
      <div className='backgroundsContainer'>
      <h5>CHOOSE BACKGROUND</h5>
        <div onClick={()=> blackBackground()} id='blackBackground'><p>Dark</p></div>
        <div onClick={()=> rainbowBackground()} id='rainbowBackground'><p>Rainbow</p></div>
        <div onClick={()=> planetBackground()} id='planetBackground'><p>Planet</p></div>
      </div>
  )
}

export default Backgrounds
