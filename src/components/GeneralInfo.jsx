import '..//styles/forms.css'

function GeneralInfo({ formInfo, setFormInfo}) {
   function handleForm(e) {
      e.preventDefault(); 
    
      const formData = new FormData(e.target);
      const firstName = formData.get("Fname");
      const email = formData.get("email");
      const social = formData.get("social");
      const tel = formData.get("tel");
    
      setFormInfo(prev => ({
        ...prev,
        fName: firstName,
        email: email,
        social: social,
        tel: tel
      }));

      e.target.reset()
    }

  return (
    <div className='General-info'>
        <h1>Basic Info</h1>
        <form onSubmit={handleForm}>
            <label className='label' htmlFor="">
               <span>Full Name: </span> <input type="text" 
                                               value={formInfo.fName} 
                                               required name="Fname" 
                                               placeholder='Full name'
                                               onChange={(e) =>
                                                setFormInfo((prev) => ({ ...prev, fName: e.target.value }))
                                              }
                                               />
            </label>
            <br />
            
            <br />
            <label className='label' htmlFor="">
               <span>Email: </span> <input type="email" 
                                           value={formInfo.email} 
                                           required name="email" 
                                           placeholder='example@gamil.com'
                                           onChange={(e) =>
                                             setFormInfo((prev) => ({ ...prev, email: e.target.value }))
                                           }
                                           />
            </label>
            <br />
            <label className='label' htmlFor="">
               <span>Social: </span> <input type="email" 
                                           value={formInfo.social} 
                                           required name="social" 
                                           placeholder='www.google.com'
                                           onChange={(e) =>
                                             setFormInfo((prev) => ({ ...prev, social: e.target.value }))
                                           }
                                           />
            </label>
            <br />
            <label className='label' htmlFor="">
               <span>Phone: </span> <input type="tel" value={formInfo.tel} 
                                           required name="tel" placeholder='123 451 6789'
                                           onChange={(e) =>
                                             setFormInfo((prev) => ({ ...prev, tel: e.target.value }))
                                           }
                                           />
            </label>
            <br />
            <button type='submit'>add</button>
        </form>

    </div>
  ) 
}

export default GeneralInfo