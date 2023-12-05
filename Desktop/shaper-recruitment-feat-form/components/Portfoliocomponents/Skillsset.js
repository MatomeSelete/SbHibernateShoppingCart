import React from 'react';
import styles from "../../styles/Portfoli.module.css";

function Skillsset({ skills }) {

  var dec = "python"

  return (
    <div className={` ${styles.SkillsetComponent}`} >
      <div className={` ${styles.infoBlocks}`}>
        <div className={` ${styles.skillssetBlock}`}></div>
        &nbsp;
        <h2><strong>TOOLS & APPLICATIONS KNOWLEDGE </strong></h2>
      </div>


      <div className={` ${styles.SkillsetComponentUI}`}>
        <div className={` ${styles.SkillsetComponentLI}`}>  <img src={skills.skill1_icon} style={{with: "40px", height: "40px"}} alt="..." />{skills.skill1_name}</div>
        <div className={` ${styles.SkillsetComponentLI}`}>  <img src={skills.skill2_icon}  style={{with: "40px", height: "40px"}} alt="..." />{skills.skill2_name}</div>
        <div className={` ${styles.SkillsetComponentLI}`}>  <img src={skills.skill3_icon}  style={{with: "40px", height: "40px"}} alt="..." />{skills.skill3_name}</div>
        <div className={` ${styles.SkillsetComponentLI}`}>  <img src={skills.skill4_icon}  style={{with: "40px", height: "40px"}} alt="..." />{skills.skill4_name}</div>
        <div className={` ${styles.SkillsetComponentLI}`}>  <img src={skills.skill5_icon}  style={{with: "40px", height: "40px"}} alt="..." />{skills.skill5_name}</div>
      
      </div>
    </div>
  )
}

export default Skillsset