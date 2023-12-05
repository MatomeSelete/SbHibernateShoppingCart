
import React, { useState, useEffect } from "react";
import style from '../../styles/forms.module.css';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";

export function ContactsForm({ email, phone, town, province, updateFields, next, isLastStep, isFirstStep, back  }) {

  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  

  const handleNextStep = () => {
    if (step < 4) {
      if (step === 1) {
        // Check if the email field is empty before proceeding
        if (!email) {
          return;
        }
      } else if (step === 2) {
        // Check if the phone field is empty before proceeding
        if (!phone) {
          return;
        }
      } else if (step === 3) {
        // Check if the town field is empty before proceeding
        if (!town) {
          return;
        }
      } else if (step === 4) {
        // Check if the province field is empty before proceeding
        if (!province) {
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
  

  




  useEffect(() => {
    fetch("http://localhost:1337/api/contacts-questions/", {
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

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Info  </h2> {/* {step} */}
          <label className={`${style.formLabel}`} >We would love to hear from you. Please complete the form below:</label>

          {step === 1 && (
            <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
              <label className={`${style.formLabel}`} htmlFor="email">Excellent, We&apos;ll need to get in touch with you. What&apos;s your email address?</label>
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
          {step === 2 && (
            <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
              <label className={`${style.formLabel}`} htmlFor="phone"> Excellent. We&apos;ll need to get in touch with you via call. What&apos;s your Phone Number</label>
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
          {step === 3 && (
            <div className={`form-group mb-3 col-sm-4-md-10 ${style.transform} ${style.formGroup}`}>
              <label className={`${style.formLabel}`} htmlFor="town">Excellent. We&apos;ll need to know your location. Which town are you from?</label>
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

export default ContactsForm;