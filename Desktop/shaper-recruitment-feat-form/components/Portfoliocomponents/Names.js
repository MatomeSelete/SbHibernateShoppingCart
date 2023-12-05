import React from 'react';
import styles from "../../styles/Portfoli.module.css";

function Names({ detail }) {

  const getStaticProps = async () => {
    try {
      const res = await fetch("http://localhost:1337/api/applicants");
      const data = await res.json();
      return {
        props: { learnerList: data.data }, // Access the "data" array
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: { learnerList: [] },
      };
    }
  };

  return (
    <div className={` ${styles.namesComponents}`} >
      <h1><strong>{detail[0].firstname} {detail[0].lastname}</strong></h1>
      <p>Junior Full Stack Developer</p>


      <div className={` ${styles.infoBlocks}`}>
        <div className={` ${styles.infoBlock}`}></div>
        &nbsp;
        <p>INTRODUCTION</p>
      </div>
      <p>
        During the 6 month period of the IT: Systems Support Learnership programme at
        Shaper {detail[0].firstname} and his team created a mobile application called {detail[1].projectname}.
      </p>
      <p>
      {detail[0].firstname}&apos;s main responsibilities on the project were to possess comprehensive
        proficiency in frontend development to craft dynamic and user-friendly web interfaces
        using HTML, Angular 2+(15), and Bootstrap.
      </p>
    </div>
  )
}

export default Names