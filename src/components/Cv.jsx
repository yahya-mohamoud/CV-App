import React, { useState } from 'react';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';
import Practical from './Practical';
import '../styles/cv.css';
import address from '../assets/address.png'
import email from '../assets/email.png'
import phone from '../assets/phone.png'
import Skill from './Skill';

function Cv() {
  const [formInfo, setFormInfo] = useState({
    fName: "",
    email: "", 
    address: "",
    tel: "", 
    about: "",
    school: "",
    study: "", 
    graduationYr: "",
    company: "",
    position: "",
    responsibility: "",
    startDt: "",
    finishDt: "",
    skills: []
    
  });

  const [isEditing, setIsEditing] = useState(true); 

  function handleEditToggle() {
    setIsEditing(prev => !prev); 
  }

   const handleRemoveSkill = (skillToRemove) => {
    setFormInfo(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };



  return (
    <div className="cv">
      <h1>CV Builder</h1>
      {isEditing ? (
        <div className="cv-Info">
         <div className="cv_components">
         <GeneralInfo formInfo={formInfo} setFormInfo={setFormInfo} />
          <Experience formInfo={formInfo} setFormInfo={setFormInfo} />
          <Practical formInfo={formInfo} setFormInfo={setFormInfo} />
          <Skill  formInfo={formInfo} setFormInfo={setFormInfo}/>
         </div>
          <button className='preview' onClick={handleEditToggle}>Preview</button>
        </div>
      ) : (
        <div className="cv_container">
          <div className="cvSubmit">

              <div className="basic">
                  <h1>{formInfo.fName}</h1>
                  <div className="paras">
                  <p><img src={email} alt="" /><a href="">{formInfo.email}</a></p>
                  <p><img src={phone} alt="" />{formInfo.tel}</p>
                  <p><img src={address} alt="" />{formInfo.address}</p>
                  </div>
                  <hr />
                  <div className="about">
                  <h3>About me:</h3>
                  <p>{formInfo.about}</p>
                  </div>
              </div>

            <hr />
              <div className="education">
                <h2>Education: </h2>
               <div className="eduInfo">
               <h3><b>Graduated school:</b> {formInfo.school}</h3>
                <p><b>Field of Study: </b>{formInfo.study}</p>
                <p><b>graduation year: </b> {formInfo.graduationYr}</p>
               </div>
              </div>

            <hr />

            <div className="practExp">
                <h2><b>Practical Experience</b></h2>
                <p><b>Company: </b>{formInfo.company}</p>
                <p><b>Position: </b> {formInfo.position}</p>
                <p><b>Responsibility:</b> {formInfo.responsibility}</p>
                <p><b>From:</b> {formInfo.startDt} -  {formInfo.finishDt}</p>
                <hr />
            </div>

            <div className="skill">
              <h2>Skill:</h2>
              <div className="skills-list">
        {formInfo.skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
            <button 
              type="button" 
              onClick={() => handleRemoveSkill(skill)}
              className="remove-skill"
              aria-label={`Remove ${skill}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
            </div>
          </div>
          <button className="edit" onClick={handleEditToggle}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Cv;
