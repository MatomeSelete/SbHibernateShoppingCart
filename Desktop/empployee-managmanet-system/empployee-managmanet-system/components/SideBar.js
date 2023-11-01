// import getConfig from 'next/config'
import { useState } from 'react'
// import { setCookie } from 'nookies'
import Router from 'next/router'
import styles from "/Users/da_m1_35/Desktop/empployee-managmanet-system/empployee-managmanet-system/styles/Home.module.css"


// const { publicRuntimeConfig } = getConfig();

function SideBar() {
   
    // className={`container ${style.multiStepForm}`}

    return (
        <div className={` ${styles.sideBarbtn}`} >
           {/* <h1>side component</h1> */}

            <h3>View employees</h3>
            <h3>Add Employee</h3>
            <h3>Add</h3>


        </div>
    );
}

export default SideBar; 
