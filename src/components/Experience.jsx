import "../styles/forms.css"
function Experience({formInfo, setFormInfo}) {
    function getFormData(e) {
        e.preventDefault(); 

        const formData = new FormData(e.target)
        const school = formData.get('school')
        const title = formData.get('title')
        const date = formData.get('Year')

        setFormInfo((prev) => {
            return {...prev, school: school, study: title, graduationYr: date}
        })

        e.target.reset()
    }
  return (
    <section className='experience'>
        <h1>Educational Experience</h1>
        <form onSubmit={getFormData}>
            <label className="label">
                School Name:
                <span><input type="text" required 
                             value={formInfo.school}  
                             name="school" placeholder="School"
                             onChange={(e) =>
                                setFormInfo((prev) => ({ ...prev, school: e.target.value }))
                              }
                             /></span>
            </label>
            <br />
            <label className="label">
                Title of study:
                <span><input type="text"
                             required value={formInfo.study}  
                             name="title" placeholder="Title of study"
                             onChange={(e) =>
                                setFormInfo((prev) => ({ ...prev, study: e.target.value }))
                              }
                             /></span>
            </label>
            <br />
            <label className="label">
                Date of graduation:
                <span><input type="date"
                             required value={formInfo.graduationYr} 
                             name="Year" placeholder="graduation Year"
                             onChange={(e) =>
                                setFormInfo((prev) => ({ ...prev, graduationYr: e.target.value }))
                              }
                             /></span>
            </label>
            <br />

            <button type="submit">Add</button>
        </form>
    </section>
    
  )
}

export default Experience