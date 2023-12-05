import githubIcon from '@iconify/icons-logos/github';
import { Icon } from '@iconify/react';
import React from 'react';
import styles from "../../styles/Portfoli.module.css";

function ProfilePic({ profile }) {

  const age = new Date(profile.dob).getFullYear();
  const currentYear = new Date().getFullYear();
  return (
   
      <div className={`card mb-3 ${styles.card}`} style={{ maxWidth: "540px" }}>
        <img src={profile.imageurl} className="card-img-top" alt="Profile" />
        <div className="">
          <div className={` ${styles.profileBtns}`}>
            <div className={` ${styles.gitLinkBtns}`}>
              <a href={profile.githublink} className={`btn ${styles.gitBtns}`}>
               
                
                <Icon icon="devicon:github" />&nbsp;<Icon icon={githubIcon} />
              </a>
              <a href={profile.linkedinlink} className={`btn ${styles.LinkBtns}`}>
                {/* Linked */}
                <Icon  icon="logos:linkedin" />
                
              </a>
            </div>
            <a href="#" className={`btn ${styles.downloadBtns}`}>DOWNLOAD FULL PORTFOLIO</a>
          </div>
          <br />
          <br />
          <div className={` ${styles.infoBlocks}`}>
            <div className={` ${styles.infoBlock}`}></div>
            &nbsp;
            <p className="card-text">  <strong>Age:</strong> {currentYear-age}</p>
          </div>
          <br />
          <div className={` ${styles.infoBlocks}`}>
            <div className={` ${styles.infoBlock}`}></div>
            &nbsp;
            <p className="card-text"> <strong>Location:</strong>  {profile.city} </p>
          </div>
          <br />
          <div className={` ${styles.infoBlocks}`}>
            <div className={` ${styles.infoBlock}`}></div>
            &nbsp;
            <p className="card-text"> <strong>Education:</strong> {profile.highestqualification} </p>
          </div>
          
        </div>
      </div>
  )
}

export default ProfilePic