
import React, { useState, useEffect } from "react";
import style from '../../styles/forms.module.css';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";



function Multisteps({
    firstName,
    lastName,
    Id,
    age,
    race,
    gender,
    email,
    phone,
    town,
    province,
    workHistory,
    qualification,
    linkedin,
    github,
    updateFields,
  }) {
    const [idValidationMessage, setIdValidationMessage] = useState('');
    const [questions, setQuestions] = useState([]);
    const [step, setStep] = useState(1);
    const [idIsValid, setIdIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const totalNumberOfSteps = 10;
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [workHistoryItem, setWorkHistoryItem] = useState({
      company: "",
      position: "",
      term: "",
      responsibilities: "",
    });
  
    const handleNextStep = () => {
      if (step < totalNumberOfSteps) {
        setStep(step + 1);
      }
    };
  
    const handlePrevStep = () => {
      if (step > 1) {
        setStep(step - 1);
      }
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
      // Fetch questions and set them in the state
      const fetchQuestions = async (url) => {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          const serverData = data?.data ? data?.data : [];
          setQuestions(serverData);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };
  
      fetchQuestions("http://localhost:1337/api/personal-questions/");
      fetchQuestions("http://localhost:1337/api/contacts-questions/");
      fetchQuestions("http://localhost:1337//api/work-history-questions/");
      fetchQuestions("http://localhost:1337/api/qualification-questions");
    }, []);



    return (
        <div className="container">
            <div className="col-md-6">
                {/* Progress Bar */}
                <div className="progress mb-3">
                    <div
                        className={`progress-bar ${style.progressBar}`}
                        role="progressbar"
                        style={{ width: `${(step / totalNumberOfSteps) * 100}%` }}
                        aria-valuenow={(step / totalNumberOfSteps) * 100}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {step} of {totalNumberOfSteps} Steps
                    </div>
                </div>

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
                            <label htmlFor="firstName" className={`${style.labelFont}`}>Please enter your ID</label>
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
                        <label htmlFor="firstName" className={`${style.labelFont}`}>Please enter your Race</label>

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
                        <label htmlFor="firstName" className={`${style.labelFont}`}>Please enter your Gender</label>
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
                {step === 5 && (
                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                        {questions.length > 0 && <ul>
                            {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question5}</label>)}
                        </ul>}
                        <label htmlFor="firstName" className={`${style.labelFont}`}>Please enter your Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            autoFocus
                            required
                            value={email}
                            onChange={(e) => updateFields({ email: e.target.value })}
                        />
                    </div>
                )}
                {step === 6 && (
                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                        {questions.length > 0 && <ul>
                            {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question5}</label>)}
                        </ul>}
                        <label htmlFor="firstName" className={`${style.labelFont}`}>Please enter your Phone number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            required
                            pattern="[+]{1}[0-9]{11,14}"
                            value={phone}
                            onChange={(e) => updateFields({ phone: e.target.value })}
                        />
                    </div>
                )}
                {step === 7 && (
                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                        {questions.length > 0 && <ul>
                            {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question5}</label>)}
                        </ul>}
                        <label htmlFor="firstName" className={`${style.labelFont}`}>Please enter your Location</label>
                        <h6>Country</h6>
                        <CountrySelect
                            onChange={(e) => {
                                setCountryid(e.id);
                            }}
                            placeHolder="Select Country"
                        />
                        <h6>State</h6>
                        <StateSelect
                            countryid={countryid}
                            onChange={(e) => {
                                setstateid(e.id);
                            }}
                            placeHolder="Select State"
                        />
                        <h6>City</h6>
                        <CitySelect
                            countryid={countryid}
                            stateid={stateid}
                            onChange={(e) => {
                                console.log(e);
                            }}
                            placeHolder="Select City"
                        />
                    </div>
                )}
                {step === 8 && (
                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                        {questions.length > 0 && <ul>
                            {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question5}</label>)}
                        </ul>}
                        <label htmlFor="firstName" className={`${style.labelFont}`}>Please enter your Education</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="Certificates"
                                name="race"
                                value="Certificates"
                                checked={race === "Certificates"}
                                onChange={(e) => updateFields({ race: e.target.value })} />
                            <label htmlFor="Certificates">Higher Certificates</label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="Diplomas"
                                name="race"
                                value="Diplomas"
                                checked={race === "Diplomas"}
                                onChange={(e) => updateFields({ race: e.target.value })} />
                            <label htmlFor="Diplomas"> Diplomas</label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="Advanced"
                                name="race"
                                value="Advanced"
                                checked={race === "Advanced"}
                                onChange={(e) => updateFields({ race: e.target.value })} />
                            <label htmlFor="Advanced">Advanced Diplomas </label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="degrees"
                                name="race"
                                value="degrees"
                                checked={race === "degrees"}
                                onChange={(e) => updateFields({ race: e.target.value })} />
                            <label htmlFor="degrees"> Bachelor&apos;s degrees  </label>
                        </div>
                    </div>
                )}
                {step === 9 && (
                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                        {questions.length > 0 && <ul>
                            {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question5}</label>)}
                        </ul>}
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
                {step === 10 && (
                    <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
                        {questions.length > 0 && <ul>
                            {questions.map(question => <label className={`${style.formLabel} ${style.labelFont} `} key={question.id}> {question.attributes.question5}</label>)}
                        </ul>}
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

                {step > 1 && (
                    <button className={`btn btn-secondary ${style.Backbtn} `} onClick={handlePrevStep}>
                        Back
                    </button>
                )}
                {step < totalNumberOfSteps ? (
                    <button className={`nextbtn btn btn-secondary ${style.Nextbtn} `} onClick={handleNextStep}>
                        Next
                    </button>
                ) : (
                    <button className={`nextbtn btn btn-secondary ${style.Nextbtn} `} >Submit</button>
                )}


            </div>

        </div>
    )
}
export default Multisteps;