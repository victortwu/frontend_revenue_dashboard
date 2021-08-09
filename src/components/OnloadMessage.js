import '../App.css'

const OnloadMessage =(props)=> {

const toggleClass = props.showOnloadModal ? 'displayShow' : 'displayNone'

  return(
    <div className={toggleClass}>
        <div className='modalBackground'>
            <div className='modalContainer'>
              <div className='infoDivFiles'>
                  <h1>Loading dummy data for this demo...</h1>
              </div>
            </div>
        </div>

    </div>
  )
}

export default OnloadMessage
