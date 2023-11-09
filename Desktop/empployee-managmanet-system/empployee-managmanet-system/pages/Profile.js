import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Profile = () => {
  // Define initial profile data
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@company.com',
    phone: '123-456-7890',
    jobTitle: 'Marketing Manager',
    department: 'Marketing',
    skills: [
      'Organization',
      'Creativity',
      'Leadership',
      'Team Building',
      'SEO',
      'Social Media',
      'Content Management',
      'Data Analysis',
    ],
  });

  // Simulate fetching the profile data from an API or database
  useEffect(() => {
    // You can fetch the data from an API or database here and update the profileData state.
  }, []);

  return (
    <div className={`${styles.card}`}>
      <div className={`card w-50 mb-3 ${styles.crdProfile}`}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
          className={`card-img-top ${styles.Profileimg}`}
          alt="Profile Picture"
        />
        <h5 className="card-title">Employee name: {profileData.name}</h5>
        <div className="card-body">
          <div>
            <label>Basic Information:</label>
            <p className="card-text">Employee name: {profileData.name}</p>
          </div>
          <div>
            <label>Contact Information:</label>
            <p className="card-text">Email address: {profileData.email}</p>
            <p className="card-text">Phone number: {profileData.phone}</p>
          </div>
          <div>
            <label>Job Title and Department:</label>
            <p className="card-text">Job Title: {profileData.jobTitle}</p>
            <p className="card-text">Department: {profileData.department}</p>
          </div>
          <div>
            <label>Professional skills:</label>
            <ul>
              {profileData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
