import "../styles/experience.css"
function Experience({expState, setExpState}) {
    function getFormData(formData) {
        const school = formData.get('school')
        const title = formData.get('title')
        const date = formData.get('startDate')

        setExpState([school, title, date])
        console.log({expState})
    }
  return (
    <section className='experience'>
        <h1>Educational Experience</h1>
        <form action={getFormData}>
            <label>
                School Name:
                <span><input type="text" name="school" placeholder="School"/></span>
            </label>
            <br />
            <label>
                Title of study:
                <span><input type="text" name="title" placeholder="Title of study"/></span>
            </label>
            <br />
            <label>
                Date of graduation:
                <span><input type="date" name="title" placeholder="date"/></span>
            </label>
            <br />

            <button type="submit">Add</button>
        </form>
    </section>
    
  )
}

export default Experience