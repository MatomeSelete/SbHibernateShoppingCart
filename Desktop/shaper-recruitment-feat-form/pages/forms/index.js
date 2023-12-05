import React, { useState, useRef } from 'react';
import style from '../../styles/forms.module.css';
import { ContactsForm } from '../../components/stepForms/ContactForm';
import { EmploymentForm } from '../../components/stepForms/EmploymentForm';
import { PersonalForm } from '../../components/stepForms/PersonalForm';
import { QualificationForm } from '../../components/stepForms/Qualification';
import Multisteps from '../../components/stepForms/steps';
import { useMultistepForm } from '../../components/stepForms/useMultistepForm';

const INITIAL_DATA = {
    firstName: '',
    lastName: '',
    Id: '',
    age: '',
    gender: '',
    race: '',
    email: '',
    phone: '',
    town: '',
    province: '',
    qualification: '',
    linkedin: '',
    github: '',
    workHistory: [],
};

function App() {
    const [data, setData] = useState(INITIAL_DATA);
    const [currentFieldIndex, setCurrentFieldIndex] = useState(0);

    const [race, setRace] = useState('');
    const [gender, setGender] = useState('');



    function updateFields(fields) {
        setData((prev) => ({
            ...prev,
            ...fields,
        }));
        setRace(fields.race || race);
        setGender(fields.gender || gender);
    }

    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        back,
        next,
        isLastStep,
    } = useMultistepForm([
        // <PersonalForm key="personal" {...data} updateFields={updateFields} />,
        // <ContactsForm key="contacts" {...data} updateFields={updateFields} />,
        // <QualificationForm key="qualification" {...data} updateFields={updateFields} />,
        // <EmploymentForm key="employment" {...data} updateFields={updateFields} />,
         <Multisteps key="employment" {...data} updateFields={updateFields} />
    ]);

    console.log('steps:', steps);
    console.log('currentStepIndex:', currentStepIndex);
    console.log('step:', step);



    const handleFormSubmit = (e) => {
        // e.preventDefault(); // Prevent the default form submission behavior

        e.preventDefault();
        if (!isLastStep) return next();
        alert("Successful account Creation");
        console.log(data);

        // fetch('http://localhost:1337/api/applicants', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     data: {
        //       firstname: data.firstName,
        //       lastname: data.lastName,
        //       idnumber: data.Id,
        //       age: data.age,
        //       gender: data.gender,
        //       race: data.selectedRace,
        //       email: data.email,
        //       phonenumber: data.phone,
        //       city: data.town,
        //       province: data.province,
        //       highestqualification: data.qualification,
        //       linkedinlink: data.linkedin,
        //       githublink: data.github,
        //       // previouscompany1: data.workHistory,
        //     },
        //   }),
        // })
        // .then(response => {
        //   if (!response.ok) {
        //     throw new Error(`Network response was not ok: ${response.status}`);
        //   }
        //   return response.json();
        // })

        //   .then(response => response.json())
        //   .then(data => console.log(data));

        console.log(data);
        alert('Successful account Creation');
    }


    // const progress = ((currentStepIndex + 1) / steps.length) * 100; // Calculate progress percentage

    const progress = ((currentStepIndex + 1) / steps.length) * 100;

    console.log('currentStepIndex:', currentStepIndex);
    console.log('steps.length:', steps.length);
    console.log('progress:', progress);

    return (
        <div className={`container ${style.multiStepForm}`}>
            <div className={`row justify-content-center ${style.mainForms}`}>
                <div className={style.leftSquare}></div>
                <div className="col-md-8">
                    <h1 className={`${style.programes}`}>Apply for Full-stack Learnership</h1>
                    <form className={`col-sm-4-md-10${style.form}`} onSubmit={(e) => e.preventDefault()}>
                    {/* <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${progress}%` }}
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div> */}

                        <div className={`${style.froms}`}>{step}</div>

                        {/* <div className={`${style.froms}`}>{step}</div>
                        <div className={`${style.froms}`}>{step}</div> */}

                        <div className={`${style.froms}`}>
                            {/* {step} */}
                            {/* <Multisteps
                                {...data}
                                updateFields={updateFields}
                                currentStepIndex={currentStepIndex} // Pass the current step index
                                totalNumberOfSteps={steps.length} // Pass the total number of steps
                            /> */}
                        </div>



                    </form>
                </div>
                <div className={`float-md-end d-none d-md-block d-lg-block ${style.rightSquare}`}></div>
            </div>
        </div>
    );
}

export default App;
