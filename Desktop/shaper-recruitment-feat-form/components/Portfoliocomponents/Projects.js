import React from 'react';
import styles from "../../styles/Portfoli.module.css";

function Projects({ project }) {
  return (
    <div className={` ${styles.projectsComponents}`}>
      <h2 className={` ${styles.projectshead}`}><strong>Project</strong></h2>
      <div className={` ${styles.projectdisplay}`} >
        <div className={` ${styles.Screens}`}>

          <div className={` ${styles.bigScreen}`}>
          <div class="card" style={{width: "18rem"}}>
  <img src={project.imageurl} class="card-img-top" alt="..." />
  
</div>
          </div>

          <div className={` ${styles.smallScreen}`}>
          </div>
        </div>
        <div className={` ${styles.aboutProject}`}>
          <h2>{project.projectname}</h2>
          <p>
            {project.problemstatement}
          </p>
          <p>
            {project.solution}
          </p>

          <button className={`btn ${styles.viewbts}`} > View Full Project </button>
        </div>
      </div>
    </div>
  )
}

export default Projects