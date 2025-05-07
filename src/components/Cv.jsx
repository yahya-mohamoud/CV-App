import React, { useState } from 'react';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';
import Practical from './Practical';
import '../styles/cv.css';

function Cv() {
  const [formInfo, setFormInfo] = useState({
    fName: "",
    email: "", 
    social: "",
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
      <h1>CV Builder</h1>
      {isEditing ? (
        <div className="cv-Info">
         <div className="cv_components">
         <GeneralInfo formInfo={formInfo} setFormInfo={setFormInfo} />
          <Experience formInfo={formInfo} setFormInfo={setFormInfo} />
          <Practical formInfo={formInfo} setFormInfo={setFormInfo} />
         </div>
          <button onClick={handleEditToggle}>Preview</button>
        </div>
      ) : (
        <div className="cv_container">
          <div className="cvSubmit">

              <div className="basic">
                  <h1>{formInfo.fName}</h1>
                  <p><a href="">{formInfo.email}</a></p>
                  <p><a href={formInfo.social}>{formInfo.social}</a></p>
                  <p>{formInfo.tel}</p>
              </div>

            <hr /><hr />
              <div className="education">
                <h2>Educational experience</h2>
                <h3>{formInfo.school}</h3>
                <p>{formInfo.study}</p>
                <p>{formInfo.graduationYr}</p>
              </div>

            <hr /><hr />

            <div className="practExp">
                <h2>Practical Experience</h2>
                <p>{formInfo.company}</p>
                <p>{formInfo.position}</p>
                <p>{formInfo.responsibility}</p>
                <p>{formInfo.startDt} - {formInfo.finishDate}</p>
            </div>
          </div>
          <button className="edit" onClick={handleEditToggle}>{isEditing ? "Preview" : "Edit"}</button>
        </div>
      )}
    </div>
  );
}

export default Cv;
