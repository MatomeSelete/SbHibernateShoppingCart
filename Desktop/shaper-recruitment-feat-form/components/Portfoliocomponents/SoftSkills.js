import React from 'react';
import styles from "../../styles/Portfoli.module.css";


function SoftSkills({ soft }) {

  //   const LearnerList = ({ learnerList }) => {
  //     console.log("learnerList", learnerList);

  var skilly = ["problemsolving", "communication", "teamwork", "interpersonal", "leadership"]
  var skillz = ["Problem Solving", "Communication", "Teamwork", "Interpersonal", "Leadership"]

  var check = 5

  return (
    <div className={` ${styles.softSkillsComponents}`}>
      <div className={` ${styles.techSkillsComponents}`}>

        <div className={` ${styles.tablesHead}`}>
          <div className={` ${styles.softSkillsHead}`} >
            <h2 className={` ${styles.softHead}`} >Soft Skills </h2>
          </div>
          <div className={` ${styles.ScoreHead}`}  >
            <h4>Score</h4>
          </div>
          <div className={` ${styles.DetailsHead}`}  >
            <h4>Details </h4>
          </div>
          <div className={` ${styles.DetailsHead}`}  >
            <h4>Improved </h4>
          </div>

        </div>
        <div className={` ${styles.tbody}`}>
          {skilly && skilly.map((skillyx, index) => (
            <div className={` ${styles.tables}`} key={skillyx}>
              <div className={` ${styles.softSkills}`}>
                <br />
                <p>{skillz[index]}</p>
              </div>

              <div className={` ${styles.Score}`}>
                <br />
                <div className={` ${styles.barz}`}>
                  {soft[skillyx] > 0 ? <div className={` ${styles.ten}`}>
                    <p></p>
                  </div> : <div className={` ${styles.tenx}`}>
                    <p></p>
                  </div>}

                  {soft[skillyx] > 1 ? <div className={` ${styles.twenty}`}>
                    <p></p>
                  </div> : <div className={` ${styles.twentyx}`}>
                    <p></p>
                  </div>}

                  {soft[skillyx] > 2 ? <div className={` ${styles.thirthy}`}>
                    <p></p>
                  </div> : <div className={` ${styles.thirthyx}`}>
                    <p></p>
                  </div>}

                  {soft[skillyx] > 3 ? <div className={` ${styles.fourty}`}>
                    <p></p>
                  </div> : <div className={` ${styles.fourtyx}`}>
                    <p></p>
                  </div>}

                  {soft[skillyx] > 4 ? <div className={` ${styles.fifty}`}>
                    <p></p>
                  </div> : <div className={` ${styles.fiftyx}`}>
                    <p></p>
                  </div>}
                </div>

              </div>
              <div className={` ${styles.Details}`} >
                <br />
                <div className={` ${styles.view}`}>
                  View &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
              <div className={` ${styles.Details}`} >
                <br />
                {soft[skillyx] > 4 ? <span className={` ${styles.mostimproved}`}>Most Improved </span> : null}
              </div>
            </div>))}
        </div>

      </div>
    </div>
  )
}

export default SoftSkills

