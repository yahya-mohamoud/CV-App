import React, { useState } from 'react';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';
import Practical from './Practical';
import '../styles/cv.css';

function Cv() {
  const [formInfo, setFormInfo] = useState({
    fName: "",
    lName: "", 
    email: "", 
    tel: "", 
    school: "",
    study: "", 
    graduationYr: "",
    company: "",
    position: "",
    responsibility: "",
    startDt: "",
    finishDate: ""
  });

  const [isEditing, setIsEditing] = useState(true); 

  function handleEditToggle() {
    setIsEditing(prev => !prev); 
  }

  return (
    <div className="cv">
      {isEditing ? (
        <div className="cv-Info">
          <GeneralInfo formInfo={formInfo} setFormInfo={setFormInfo} />
          <Experience formInfo={formInfo} setFormInfo={setFormInfo} />
          <Practical formInfo={formInfo} setFormInfo={setFormInfo} />
          <button onClick={handleEditToggle}>Preview</button>
        </div>
      ) : (
        <div className="cv_container">
          <div className="cvSubmit">
            <h1>General information</h1>
            <h3>{formInfo.fName} {formInfo.lName}</h3>
            <p><a href="mailto:{formInfo.email}">{formInfo.email}</a></p>
            <p>{formInfo.tel}</p>

            <hr /><hr />

            <h2>Educational experience</h2>
            <h3>{formInfo.school}</h3>
            <p>{formInfo.study}</p>
            <p>{formInfo.graduationYr}</p>

            <hr /><hr />

            <h2>Practical Experience</h2>
            <p>{formInfo.company}</p>
            <p>{formInfo.position}</p>
            <p>{formInfo.responsibility}</p>
            <p>{formInfo.startDt} - {formInfo.finishDate}</p>
          </div>
          <button className="edit" onClick={handleEditToggle}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Cv;
