import "../styles/experience.css"
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
            <label>
                School Name:
                <span><input type="text" required value={formInfo.school} name="school" placeholder="School"/></span>
            </label>
            <br />
            <label>
                Title of study:
                <span><input type="text" required value={formInfo.study} name="title" placeholder="Title of study"/></span>
            </label>
            <br />
            <label>
                Date of graduation:
                <span><input type="date" required value={formInfo.graduationYr} name="Year" placeholder="graduation Year"/></span>
            </label>
            <br />

            <button type="submit">Add</button>
        </form>
    </section>
    
  )
}

export default Experience