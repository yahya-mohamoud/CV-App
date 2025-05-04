import React, { use, useState } from 'react'
import Experience from './Experience'
import GeneralInfo from './GeneralInfo'
import "../styles/cv.css"
import Practical from './Practical'
function Cv() {
    const [infoState, setInfoState] = useState(["Guled", "Mohamoud", "example@gamil.com", 90099090])
    const [expState, setExpState] = useState(["calischools","SoftwareEng", "02/20/1990", "03/22/1991"])
    const [practicalState, setPracticalState] = useState([])
  return (
    <div className="cv">
        <div className='cv-Info'>
        <GeneralInfo infoState={infoState} setInfoState={setInfoState}/>
        <Experience expState={expState} setExpState={setExpState}/>
        <Practical practicalState={practicalState} setPracticalState={setPracticalState}/>
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

            <h2>Practical Experience</h2>
                <p>{practicalState[0]}</p>
                <p>{practicalState[1]}</p>
                <p>{practicalState[2]}</p>
                <p>{practicalState[3]}</p>
                <p>{practicalState[4]}</p>

        </div>
    </div>
  )
}

export default Cv