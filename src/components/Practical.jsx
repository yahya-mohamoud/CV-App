import React from 'react'
import '../styles/experience.css'

function Practical({practicalState, setPracticalState}) {
  return (
    <section className='practical'>
        <h1>Practical experience</h1>
        <form action="" className="practicalForm">
            <label>
                Company Name: 
                <span><input type="text" name='company'/></span>
            </label>
            <br />
            <label>
                Position Title: 
                <span><input type="text" name='position'/></span>
            </label>
            <br />
            <label>
                Responsibility:  
                <span><input type="text" name='responsibility' placeholder='Job Responsibility'/></span>
            </label>
            <br />
            <label className='date'>
                  
                <span>Start date:<input type="date" name='start'/></span>
                <span>Finish date:<input type="date" name='finish'/></span>
            </label>
            <br />
            <button type="submit">Add</button>
        </form>
    </section>
  )
}

export default Practical