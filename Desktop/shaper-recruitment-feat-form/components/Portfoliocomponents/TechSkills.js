import React from 'react';
import styles from "../../styles/Portfoli.module.css";


function TechSkills({ tech }) {

  console.log(tech)
  var skilly = ["skill1", "skill2", "skill3", "skill4", "skill5"]
  var skillz = ["skill1_name", "skill2_name", "skill3_name", "skill4_name", "skill5_name"]

  var check = 3

  return (
    <div className={` ${styles.techSkillsComponents}`}>

      {/* <table className={`table table-borderless  ${styles.tables} `}>
        <thead className={` ${styles.thead}`} >
          <tr>
            <th className={` ${styles.techead}`} scope="col">Technical Skills</th>
            <th scope="col">Score</th>
            <th scope="col">Details</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className={` ${styles.tbody}`} >
          {check && skilly.map((skillyx,index) => (
            <tr key={skillyx}>
              <th >
                <p>{tech[skillz[index]]}</p>
              </th>
              <td>
                <div className={` ${styles.barz}`}>

                  {tech[skillyx] > 0 ? <div className={` ${styles.ten}`}>
                    <p></p>
                  </div> : <div className={` ${styles.tenx}`}>
                    <p></p>
                  </div>}

                  {tech[skillyx] > 1 ? <div className={` ${styles.twenty}`}>
                    <p></p>
                  </div> : <div className={` ${styles.twentyx}`}>
                    <p></p>
                  </div>}

                  {tech[skillyx] > 2 ? <div className={` ${styles.thirthy}`}>
                    <p></p>
                  </div> : <div className={` ${styles.thirthyx}`}>
                    <p></p>
                  </div>}

                  {tech[skillyx] > 3 ? <div className={` ${styles.fourty}`}>
                    <p></p>
                  </div> : <div className={` ${styles.fourtyx}`}>
                    <p></p>
                  </div>}

                  {tech[skillyx] > 4 ? <div className={` ${styles.fifty}`}>
                    <p></p>
                  </div> : <div className={` ${styles.fiftyx}`}>
                    <p></p>
                  </div>}

                </div>
              </td>
              <td>
                <div className={` ${styles.view}`}>
                  View &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </td>
              <td>
                {tech[skillyx] > 3 ? <span className={` ${styles.mostimproved}`}>Most Improved </span> : null}
              </td>

            </tr>))


            


          }
        </tbody>
      </table> */}




      <div className={` ${styles.tablesHead}`}>
        <div className={` ${styles.softSkillsHead}`} >
          <h2 className={` ${styles.tecHead}`} >Technical Skills </h2>
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
        {check && skilly.map((skillyx, index) => (
          <div className={` ${styles.tables}`} key={skillyx}>
            <div className={` ${styles.softSkills}`}>
              <br />
              <p>{tech[skillz[index]]}</p>
            </div>

            <div className={` ${styles.Score}`}>
              <br />
              <div className={` ${styles.barz}`}>
                {tech[skillyx] > 0 ? <div className={` ${styles.ten}`}>
                  <p></p>
                </div> : <div className={` ${styles.tenx}`}>
                  <p></p>
                </div>}

                {tech[skillyx] > 1 ? <div className={` ${styles.twenty}`}>
                  <p></p>
                </div> : <div className={` ${styles.twentyx}`}>
                  <p></p>
                </div>}

                {tech[skillyx] > 2 ? <div className={` ${styles.thirthy}`}>
                  <p></p>
                </div> : <div className={` ${styles.thirthyx}`}>
                  <p></p>
                </div>}

                {tech[skillyx] > 3 ? <div className={` ${styles.fourty}`}>
                  <p></p>
                </div> : <div className={` ${styles.fourtyx}`}>
                  <p></p>
                </div>}

                {tech[skillyx] > 4 ? <div className={` ${styles.fifty}`}>
                  <p></p>
                </div> : <div className={` ${styles.fiftyx}`}>
                  <p></p>
                </div>}

                {/* {tech[skillyx] > 4 ? <div className={` ${styles.fifty}`}>
                  <p></p>
                </div> : <div className={` ${styles.fiftyx}`}>
                  <p></p>
                </div>} */}
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
              {tech[skillyx] > 3 ? <span className={` ${styles.mostimproved}`}>Most Improved </span> : null}
            </div>
          </div>))}
      </div>

    </div>
  )
}

export default TechSkills;