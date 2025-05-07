import '..//styles/genInfo.css'

function GeneralInfo({ formInfo, setFormInfo}) {
   function handleForm(e) {
      e.preventDefault(); 
    
      const formData = new FormData(e.target);
      const firstName = formData.get("Fname");
      const lastName = formData.get("Lname");
      const email = formData.get("email");
      const tel = formData.get("tel");
    
      setFormInfo(prev => ({
        ...prev,
        fName: firstName,
        lName: lastName,
        email: email,
        tel: tel
      }));

      e.target.reset()
    }

  return (
    <div className='General-info'>
        <h1>Basic Info</h1>
        <form onSubmit={handleForm}>
            <label htmlFor="">
               <span>First Name: </span> <input type="text" value={formInfo.fName} required name="Fname" placeholder='FirstName'/>
            </label>
            <br />
            <label htmlFor="">
               <span>Last Name: </span> <input type="text" value={formInfo.lName} required name="Lname" placeholder='LastName'/>
            </label>
            <br />
            <label htmlFor="">
               <span>Email: </span> <input type="email" value={formInfo.email} required name="email" placeholder='example@gamil.com'/>
            </label>
            <br />
            <label htmlFor="">
               <span>Phone: </span> <input type="tel" value={formInfo.tel} required name="tel" placeholder='123 451 6789'/>
            </label>
            <br />
            <button type='submit'>add</button>
        </form>

    </div>
  ) 
}

export default GeneralInfo