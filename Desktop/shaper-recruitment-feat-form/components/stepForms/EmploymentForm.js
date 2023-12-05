import React, { useState } from "react";   //useEffect
import style from '../../styles/forms.module.css';



export function EmploymentForm({ workHistory, updateFields, isLastStep }) {
  const [workHistoryItem, setWorkHistoryItem] = useState({
    company: "",
    position: "",
    term: "",
    responsibilities: "",
  });

  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState([]);

  const handleNextStep = () => {
    if (step < 4) {
      if (step === 1) {
        // Check if the email field is empty before proceeding
        if (!workHistory) {
          return;
        }
      }

      // If all fields are non-empty, proceed to the next step
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };



  function updateWorkHistoryField(index, field, value) {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index][field] = value;
    updateFields({ workHistory: updatedWorkHistory });
  }

  function addWorkHistoryItem() {
    updateFields({
      workHistory: [...workHistory, workHistoryItem],
    });
    setWorkHistoryItem({
      company: "",
      position: "",
      term: "",
      responsibilities: "",
    });

    // useEffect(() => {
    //   fetch("http://localhost:1337//api/work-history-questions/", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // console.log("API data:", data['data'][0]['attributes']['question3']);

    //       const serverData = data?.data ? data?.data : []
    //       // console.log(serverData);
    //       setQuestions(serverData);

    //       // Log the data to the console
    //       // if (Array.isArray(data)) {

    //       // }
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching questions:", error);
    //     });
    // }, []);


    console.log(questions);


  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8" >
          <h2>Employment history  </h2>  {/* {step} */}
          <label className={`${style.formLabel}`} >Please provide your employment history details:</label>
          {workHistory.map((workHistoryItem, index) => (
            <div key={index}>
              {step === 1 && (
                <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                  <label className={`${style.formLabel}`} htmlFor={`company-${index}`}> Enter the name of the company or organization where you worked.</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`company-${index}`}
                    autoFocus
                    required
                    value={workHistoryItem.company}
                    onChange={(e) =>
                      updateWorkHistoryField(index, "company", e.target.value)
                    }
                  />
                </div>
              )}
              {step === 2 && (
                <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                  <label className={`${style.formLabel}`} htmlFor={`position-${index}`}>Specify your job title or position at the company.</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`position-${index}`}
                    required
                    value={workHistoryItem.position}
                    onChange={(e) =>
                      updateWorkHistoryField(index, "position", e.target.value)
                    }
                  />
                </div>
              )}
              {step === 3 && (
                <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                  <label className={`${style.formLabel}`} htmlFor={`term-${index}`}>Provide the date you started working at the company.</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`term-${index}`}
                    required
                    value={workHistoryItem.term}
                    onChange={(e) =>
                      updateWorkHistoryField(index, "term", e.target.value)
                    }
                  />
                </div>
              )}
              {step === 4 && (
                <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                  <label className={`${style.formLabel}`} htmlFor={`responsibilities-${index}`}>
                    Describe your key responsibilities and accomplishments in this role. This helps us understand your work experience.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`responsibilities-${index}`}
                    required
                    value={workHistoryItem.responsibilities}
                    onChange={(e) =>
                      updateWorkHistoryField(
                        index,
                        "responsibilities",
                        e.target.value
                      )}
                  />
                </div>
              )}

              <div className={`btns ${style.btns} `}>
                <br />
                {step > 1 && (
                  <button className={`btn btn-secondary ${style.Backbtn} `} onClick={handlePrevStep}>
                    Back
                  </button>
                )}
                {step <= 4 ? (
                  <button className={`nextbtn btn btn-secondary ${style.Nextbtn} `} onClick={handleNextStep}>
                    Next
                  </button>
                ) : (
                  <button className={`nextbtn btn btn-secondary ${style.Nextbtn} `} >Submit</button>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default EmploymentForm;


{/* <button className={`btn btn-secondary ${style.Nextbtn} `} onClick={addWorkHistoryItem}>
            Add Work History
          </button> */}