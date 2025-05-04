import "../styles/experience.css"
function Experience({expState, setExpState}) {
    function getFormData(formData) {
        const school = formData.get('school')
        const title = formData.get('title')
        const startDate = formData.get('startDate')
        const finishedDate = formData.get('finishedDate')

        setExpState([school, title,startDate, finishedDate])
        console.log({expState})
    }
  return (
    <section className='experience'>
        <h1>Experience</h1>
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
              <h3>Date of study</h3>  
                <span className="date">start date: <input type="date" name='startDate'/></span>
                <br />
                <span className="date">finished date: <input type="date" name="finishedDate"/></span>
            </label>
            <br />
            <button type="submit">Add</button>
        </form>
    </section>
    
  )
}

export default Experience