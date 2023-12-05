import React from 'react';
import styles from "../../styles/Portfoli.module.css";

function FinalComments() {

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
      <div>
          <div className={` ${styles.infoBlocks}`}>
            <div className={` ${styles.ShaperReviewBlock}`}></div>
            &nbsp; 
            <h2>THE SHAPER REVIEW</h2>
          </div>
          <p>
            He is a well-spoken individual who enjoys taking on new
            challenges. He is not afraid to express his thoughts or
            to lend his support to others. His curiosity and eagerness
            to learn is shaping him into a talented developer.
          </p>
    </div>
  )
}

export default FinalComments