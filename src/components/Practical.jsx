import React from 'react'
import '../styles/experience.css'

function Practical({practicalState, setPracticalState}) {

    function handleClick (formDate) {
        const company = formDate.get('company')
        const position = formDate.get('position')
        const responsiblity = formDate.get('responsiblity')
        const start = formDate.get('start')
        const finish = formDate.get('finish')
        setPracticalState([company, position, responsiblity, start, finish])
    }
  return (
    <section className='practical'>
        <h1>Practical experience</h1>
        <form action={handleClick} className="practicalForm">
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
                  
                <span>From date:<input type="date" name='start'/></span>
                <span>To date:<input type="date" name='finish'/></span>
            </label>
            <br />
            <button type="submit">Add</button>
        </form>
    </section>
  )
}

export default Practical