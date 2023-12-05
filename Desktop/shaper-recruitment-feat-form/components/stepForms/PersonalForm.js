
import React, { useEffect, useState } from "react";
import style from '../../styles/forms.module.css';
import { useMultistepForm } from "../../components/stepForms/useMultistepForm";




export function PersonalForm({ firstName, lastName, Id, age, race, gender, updateFields, next }) {

  const [idValidationMessage, setIdValidationMessage] = useState('');
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(1);
  const [idIsValid, setIdIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');


  const handleNextStep = () => {
    if (step < 5) {
      if (step === 1) {
        // Check if the email field is empty before proceeding
        if (!firstName, !lastName) {
          return;
        }
      } else if (step === 2) {
        // Check if the town field is empty before proceeding
        if (!Id) {
          return;
        }
      }  else if (step === 3) {
        // Check if the province field is empty before proceeding
        if (!race) {
          return;
        }
      } else if (step === 4) {
        // Check if the province field is empty before proceeding
        if (!gender) {
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



  const validateID = (id) => {
    const regex = /^[0-9]{13}$/;
  
    if (regex.test(id)) {
      const year = parseInt(id.substring(0, 2), 10);
      const currentYear = new Date().getFullYear() % 100;
      const century = year <= currentYear ? '20' : '19';
  
      const birthdate = `${century}${id.substring(0, 6)}`;
      if (isValidDate(birthdate)) {
        setIdValidationMessage('');
        setIdIsValid(true);
  
        // Log the age when available
        if (age) {
          console.log(`Age: ${age}`);
        }
      } else {
        setIdValidationMessage('Invalid birthdate in ID number');
        setIdIsValid(false);
        setErrorMessage('Invalid birthdate in ID number');
      }
    } else {
      setIdValidationMessage('Please supply a valid 13-digit ID number');
      setIdIsValid(false);
      setErrorMessage('Please supply a valid 13-digit ID number');
    }
  };
  
  
  

  const isValidDate = (dateString) => {
    const regex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return regex.test(dateString);
  };






  useEffect(() => {
    fetch("http://localhost:1337/api/personal-questions/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("API data:", data['data'][0]['attributes']['question3']);

        const serverData = data?.data ? data?.data : []
        // console.log(serverData);
        setQuestions(serverData);

        // Log the data to the console
        // if (Array.isArray(data)) {

        // }
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);


  console.log(questions);



  return (
    <div className="container">
      <div className="col-md-6"  >
        <h2>Personal Info {step} </h2>


        {/* ${style.transform} */}

        {step === 1 && (
          <div className={`${style.transform}  ${style.labelFont} `} >

            {questions.length > 0 &&
              <div className="">
                {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question1}</label>)} {/* {question.id} */}
              </div>}


            <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup} ${style.transform}`}>
              <label htmlFor="firstName" className={`${style.labelFont}`}>First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                autoFocus
                value={firstName}
                onChange={(e) => updateFields({ firstName: e.target.value })} />
            </div>

            <div className={`form-group mb-3 col-sm-4-md-10 ${style.formGroup}`}>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={lastName}
                onChange={(e) => updateFields({ lastName: e.target.value })} />
            </div>
          </div>
        )}
        {step === 2 && (
          <>
            <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup} `}>
              {questions.length > 0 && <ul>
                {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question2}</label>)}
              </ul>}
              <input
                type="text"
                className={`form-control ${idIsValid ? '' : style.invalidInput}`}
                id="Id"
                required
                pattern="[0-9]{13}"
                value={Id}
                onChange={(e) => {
                  const newValue = e.target.value;
                  updateFields({ Id: newValue });
                  validateID(newValue);
                }} />
              <p className={`validation-message ${style.invalidMessage}`}>{idValidationMessage}</p>
            </div>

            <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
              {questions.length > 0 && <ul>
                {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question3}</label>)}
              </ul>}
              {/* {age !== '' && <p>Your age is: {age}</p>}
              {errorMessage !== '' && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
            </div>
          </>
        )}
        {step === 3 && (
          <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
            {questions.length > 0 && <ul>
              {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question4}</label>)}
            </ul>}

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="Black"
                name="race"
                value="Black"
                checked={race === "Black"}
                onChange={(e) => updateFields({ race: e.target.value })} />
              <label htmlFor="Black">Black </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="Coloured"
                name="race"
                value="Coloured"
                checked={race === "Coloured"}
                onChange={(e) => updateFields({ race: e.target.value })} />
              <label htmlFor="Coloured">Coloured </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="Indian"
                name="race"
                value="Indian"
                checked={race === "Indian"}
                onChange={(e) => updateFields({ race: e.target.value })} />
              <label htmlFor="Indian">Indian </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="White"
                name="race"
                value="White"
                checked={race === "White"}
                onChange={(e) => updateFields({ race: e.target.value })} />
              <label htmlFor="White"> White </label>
            </div>
          </div>

        )}

        {step === 4 && (
          <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
            {questions.length > 0 && <ul>
              {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question5}</label>)}
            </ul>}

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => updateFields({ gender: e.target.value })} />
              <label htmlFor="Male">Male</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => updateFields({ gender: e.target.value })} />
              <label htmlFor="female">female</label>
            </div>

          </div>
        )}
        <div className={`btns ${style.btns} `}>
          <br />
          {step > 1 && (
            <button className={`btn btn-secondary ${style.Backbtn} `} onClick={handlePrevStep}>
              Back
            </button>
          )}
          {step < 5 ? (
            <button className={`nextbtn btn btn-secondary ${style.Nextbtn} `} onClick={handleNextStep}>
              Next
            </button>
          ) : (
            <button className={`nextbtn btn btn-secondary ${style.Nextbtn} `} >Submit</button>
          )}
        </div>


      </div>

    </div>

  );
}