import React, { useState } from 'react'
import Experience from './Experience'
import GeneralInfo from './GeneralInfo'
import "../styles/cv.css"
function Cv() {
    const [infoState, setInfoState] = useState(["Guled", "Mohamoud", "example@gamil.com", 90099090])
    const [expState, setExpState] = useState(["calischools","SoftwareEng", "02/20/1990", "03/22/1991"])

  return (
    <div className="cv">
        <div className='cv-Info'>
        <GeneralInfo infoState={infoState} setInfoState={setInfoState}/>
        <Experience expState={expState} setExpState={setExpState}/>
        </div>
        <div className="cvSubmit">
            <h1>General information</h1>
            <h3>{infoState[0]} {infoState[1]}</h3>
            <p><a href="">{infoState[2]}</a></p>
            <p>{infoState[3]}</p>
            <hr />
            <hr />
            <h2>Educational experience</h2>
            <h3>{expState[0]}</h3>
            <p>{expState[1]}</p>
            <p>{expState[2]} -  {expState[3]}</p>
            <hr />
            <hr />
        </div>
    </div>
  )
}

export default Cv