

// import getConfig from 'next/config'
import { useState } from 'react'
// import { setCookie } from 'nookies'
import Router from 'next/router'
import styles from "/Users/da_m1_35/Desktop/empployee-managmanet-system/empployee-managmanet-system/styles/Home.module.css"

function Profile() {
    return (
        <div className={`${styles.card}`}>

            <div class={`card  w-50 mb-3 ${styles.crdProfile}`}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg" class= {`card-img-top ${styles.Profileimg}`} alt="..." />
                <h5 class="card-title">Employee name: John Doe</h5>
                <div class="card-body">
                    <div>
                        <label> Basic Information:</label>
                        <p class="card-title">Employee name: John Doe</p>
                    </div>
                    <div>
                        <label>Contact Information:</label>
                        <p class="card-text"> Email address: johndoe@company.com </p>
                        <p class="card-text"> Phone number: 123-456-7890. </p>
                    </div>
                    <div>
                        <label>Job Title and Department:</label>
                        <p class="card-text"> Job Title (e.g., Software Engineer, Marketing Manager) </p>
                        <p class="card-text"> Department or Team (e.g., Engineering, Sales) </p>
                    </div>
                    <div>
                    <label>Job Description:</label>
                        <p class="card-text"> Job Title (e.g., Software Engineer, Marketing Manager) </p>
                        <p class="card-text"> Department or Team (e.g., Engineering, Sales) </p>
                    </div>
                    

                    <div>
                        <p class="card-text"> Professional skills: </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;

// Employee name: John Doe.
// Location: Chicago office.
// Email address: johndoe@company.com.
// Phone number: 123-456-7890.
// Job title: Marketing manager.
// Professional skills: Organization, creativity, leadership, team building, SEO, social media, content management, data analysis.