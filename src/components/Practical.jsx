import React from 'react'
import '../styles/experience.css'

function Practical({ formInfo, setFormInfo}) {

    function handleClick (e) {
        e.preventDefault(); 

        const formData = new FormData(e.target)
        const company = formData.get('company')
        const position = formData.get('position')
        const responsiblity = formData.get('responsiblity')
        const start = formData.get('start')
        const finish = formData.get('finish')

        setFormInfo((prev) => ({
            ...prev, 
            company: company,
            position: position,
            responsiblity: responsiblity,
            startDt: start,
            finishDt: finish
        }))

        e.target.reset()
    }
  return (
    <section className='practical'>
        <h1>Practical experience</h1>
        <form onSubmit={handleClick} className="practicalForm">
            <label>
                Company Name: 
                <span><input type="text" required value={formInfo.company} name='company'/></span>
            </label>
            <br />
            <label>
                Position Title: 
                <span><input type="text" required value={formInfo.position} name='position'/></span>
            </label>
            <br />
            <label>
                Responsibility:  
                <span><input type="text" required value={formInfo.responsiblity} name='responsibility' placeholder='Job Responsibility'/></span>
            </label>
            <br />
            <label className='date'>
                  
                <span>From date:<input type="date" required value={formInfo.startDt} name='start'/></span>
                <span>To date:<input type="date" required value={formInfo.finishDt} name='finish'/></span>
            </label>
            <br />
            <button type="submit">Add</button>
        </form>
    </section>
  )
}

export default Practical