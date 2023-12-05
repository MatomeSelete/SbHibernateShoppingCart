
import React, { useState } from "react";
import style from '../../styles/forms.module.css';

export function QualificationForm({ qualification, linkedin, github, updateFields, next, isLastStep, isFirstStep, back }) {

  const [step, setStep] = useState(1);


  // /api/qualification-questions
  // useEffect(() => {
  //   fetch("http://localhost:1337/api/qualification-questions", {
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


  const handleNextStep = () => {
    if (step < 3) {
      if (step === 1) {
        // Check if the email field is empty before proceeding
        if (!qualification) {
          return;
        }
      } else if (step === 2) {
        // Check if the phone field is empty before proceeding
        if (!linkedin) {
          return;
        }
      } else if (step === 3) {
        // Check if the town field is empty before proceeding
        if (!github) {
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

  const githubUrlRegex = /^(https?:\/\/)?(www\.)?github\.com\/.+/i;
  const linkedinUrlRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/.+/i;

  // Validation functions
  const isGitHubUrlValid = (url) => githubUrlRegex.test(url);
  const isLinkedInUrlValid = (url) => linkedinUrlRegex.test(url);


  




  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Qualification and Portfolio  </h2> {/*  {step} */}
          <label className={`${style.formLabel}`} >We&apos;d like to learn more about you. Please provide the following details:</label>
          {step === 1 && (
            <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform } ${style.formGroup}`}>
              <label className={`${style.formLabel}`} htmlFor="qualification">
              Share your qualifications, degrees, or certifications. This information <br />
               helps us understand your expertise and interests better.
              </label>
              <input
                type="text"
                className="form-control"
                id="qualification"
                autoFocus
                required
                value={qualification}
                onChange={(e) => updateFields({ qualification: e.target.value })}
              />
            </div>
          )}
          {step === 2 && (
            <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform } ${style.formGroup}`}>
              <label className={`${style.formLabel}`} htmlFor="linkedin">
              Share your LinkedIn URL. This information helps us to get to know you via your social media.
              </label>
              <input
                type="url"
                className="form-control"
                id="linkedin"
                required
                value={linkedin}
                onChange={(e) => updateFields({ linkedin: e.target.value })}
              />
            </div>
          )}
          {step === 3 && (
            <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform } ${style.formGroup}`}>
              <label className={`${style.formLabel}`} htmlFor="github">
              Share your GitHub URL. This information helps us to see how much work you&apos;ve been doing.
              
              
              </label>
              <input
                type="url"
                className="form-control"
                id="github"
                required
                value={github}
                onChange={(e) => updateFields({ github: e.target.value })}
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
          {step <= 3 ? (
            <button className={`nextbtn btn btn-secondary ${style.Nextbtn} `} onClick={handleNextStep}>
              Next
            </button>
          ) : (
            <button className={`nextbtn btn btn-secondary ${style.Nextbtn} `} >Submit</button>
          )}
        </div>

        </div>
      </div>
    </div>
  );
}

// export default QualificationForm;

