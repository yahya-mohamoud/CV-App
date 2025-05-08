import React from 'react'
import { useState } from 'react';
import '../styles/forms.css'

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
            <label className='label'>
                Company Name: 
                <span><input type="text" 
                             required value={formInfo.company} 
                             name='company'
                             onChange={(e) =>
                                setFormInfo((prev) => ({ ...prev, company: e.target.value }))
                              }
                             /></span>
            </label>
            <br />
            <label className='label'>
                Position Title: 
                <span><input type="text"
                             required value={formInfo.position} 
                             name='position'
                             onChange={(e) =>
                                setFormInfo((prev) => ({ ...prev, position: e.target.value }))
                              }
                             /></span>
            </label>
            <br />
            <label className='label'>
                Responsibility:  
                <span><input type="text"
                             required value={formInfo.responsibility} 
                             name='responsibility' 
                             placeholder='Job Responsibility'
                             onChange={(e) =>
                              setFormInfo((prev) => ({ ...prev, responsibility: e.target.value }))
                              }
                             /></span>
            </label>
            <br />
            
            <label  className='date label'>
                  
                <span>From date:<input type="date" 
                                        required value={formInfo.startDt} 
                                        name='start'
                                        onChange={(e) =>
                                            setFormInfo((prev) => ({ ...prev, startDt: e.target.value }))
                                          }
                                        /></span>
                <span>To date:<input type="date"
                        required value={formInfo.finishDt} 
                        name='finish'
                        onChange={(e) =>
                            setFormInfo((prev) => ({ ...prev, finishDt: e.target.value }))
                          }
                        /></span>
            </label>
            <br />
            
            <button type="submit">Add</button>
        </form>

       
    </section>
    

  )
}

export default Practical