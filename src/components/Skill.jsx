import React from 'react'
import { useState } from 'react'
import "../styles/cv.css"

function Skill({formInfo, setFormInfo}) {
 const [skillInput, setSkillInput] = useState('')

 const handleAddSkill = (e) => {
  e.preventDefault();
  if (skillInput.trim() && !formInfo.skills.includes(skillInput)) {
    setFormInfo(prev => ({
      ...prev,
      skills: [...prev.skills, skillInput.trim()]
    }));
    setSkillInput('');
  }
};

const handleRemoveSkill = (skillToRemove) => {
  setFormInfo(prev => ({
    ...prev,
    skills: prev.skills.filter(skill => skill !== skillToRemove)
  }));
};

  return (
    <div className="skills-section">
    <form onSubmit={handleAddSkill}>
      <input
        type="text"
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
        placeholder="Add a skill"
      />
      <button type="submit">Add Skill</button>
    </form>
    
    
  </div>
);
}

export default Skill