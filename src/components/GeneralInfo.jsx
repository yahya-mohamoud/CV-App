import '..//styles/genInfo.css'

function GeneralInfo({infoState, setInfoState}) {

    function handleForm (formData) {
        const firstName = formData.get("Fname")
        const lastName = formData.get("Lname")
        const email = formData.get("email")
        const tel = formData.get("tel")

        setInfoState([firstName, lastName, email, tel])
        console.log({infoState})
    }
  return (
    <div className='General-info'>
        <h1>Basic Info</h1>
        <form action={handleForm}>
            <label htmlFor="">
               <span>First Name: </span> <input type="text" name="Fname" placeholder='FirstName'/>
            </label>
            <br />
            <label htmlFor="">
               <span>Last Name: </span> <input type="text" name="Lname" placeholder='LastName'/>
            </label>
            <br />
            <label htmlFor="">
               <span>Email: </span> <input type="email" name="email" placeholder='example@gamil.com'/>
            </label>
            <br />
            <label htmlFor="">
               <span>Phone: </span> <input type="tel" name="tel" placeholder='123 451 6789'/>
            </label>
            <br />
            <button type='submit'>add</button>
        </form>

    </div>
  ) 
}

export default GeneralInfo