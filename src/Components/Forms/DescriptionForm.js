import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import "./DescriptionForm.css";
import { useDispatch, useSelector } from 'react-redux';
import { updateFormField } from '../Redux/actions';

import salaried from "../../Static/salary.png";
import selfEmployed from "../../Static/computer-worker.png";
import student from "../../Static/graduated.png";
import freelancer from "../../Static/freelance.png";


const DescriptionForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const descriptionFormData = useSelector((state) => state.genericForms.forms.DescriptionForm);

    const [ card, setCard] = useState('');

    const lines = [
        'I bring positivity wherever I go...',
        'I can take responsibilities for a task...',
        'I am batman...',
        'I am dead inside..',

        // Add more lines as needed
      ];
    
      const [currentLineIndex, setCurrentLineIndex] = useState(0);
      const [currentText, setCurrentText] = useState('');
    
      useEffect(() => {
        let lineIndex = 0;
        let textIndex = 0;
    
        const typeEffect = setInterval(() => {
          setCurrentText((prevText) => {
            const currentLine = lines[lineIndex];
            const updatedText = currentLine.substring(0, textIndex + 1);
    
            if (textIndex === currentLine.length) {
              // If the entire line is typed, move to the next line
              lineIndex = (lineIndex + 1) % lines.length;
              textIndex = 0;
            } else {
              textIndex += 1;
            }
    
            return updatedText;
          });
        }, 150); // Adjust the typing speed as needed
    
        return () => clearInterval(typeEffect);
      }, []);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        
        dispatch(updateFormField('DescriptionForm', name, value));
    };

    const handleCardClick = (profession) => {
        setCard(profession);
        dispatch(updateFormField('DescriptionForm', 'profession', profession ));
    };

    const onSubmit = () => {
        console.log(descriptionFormData);
        navigate('/AcademicForm');
    }

    return(
        <div className='container text-center description-box'>
            <h2 className='p-3 mb-4 d-flex justify-content-center'>Description</h2>
            <div className='row justify-content-md-start'>
                <div className="mb-5">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-center">Tell us briefly about yourself</label>
                    <textarea className="form-control" name='introduction' id="exampleFormControlTextarea1" value={descriptionFormData.introduction} rows="3" placeholder='Introduce yourself...' onChange={handleChange} required></textarea>
                </div>
                <div className="mb-5">
                    <label htmlFor="exampleFormControlInput1" className="form-label d-flex justify-content-center">One characteristic which makes you special.</label>
                    <input type="text" className="form-control" name='unique' id="exampleFormControlInput1" value={descriptionFormData.unique} placeholder={currentText} onChange={handleChange} required/>
                </div>
            </div>
            <div>
                <label className='d-flex justify-content-center'>Are you salaried, self-employed or a student?</label>
                <div className='row row-cols-sm-2 row-cols-md-4 ms-3 me-3 mb-5'>
                    <div className='col p-5'>
                        <div className={`${(descriptionFormData.profession === 'salaried')?'description-card-highlight':'description-card'}`} name='salaried' onClick={() => handleCardClick('salaried')}>
                            <img src={salaried} alt="salaried" className="img-fluid mx-auto d-block p-2" style={{height:'84px',width:'84px'}}/>
                            <label className='d-flex justify-content-center'>Salaried</label>
                        </div>
                    </div>
                    <div className='col p-5'>
                        <div className={`${(descriptionFormData.profession === 'selfEmployed')?'description-card-highlight':'description-card'}`} name='selfEmployed' onClick={() => handleCardClick('selfEmployed')}>
                            <img src={selfEmployed} alt="salaried" className="img-fluid mx-auto d-block p-2" style={{height:'84px',width:'84px'}}/>
                            <label className='d-flex justify-content-center'>Self-Employed</label>
                        </div>
                    </div>
                    <div className='col p-5'>
                        <div className={`${(descriptionFormData.profession === 'freelancer')?'description-card-highlight':'description-card'}`} name='freelancer' onClick={() => handleCardClick('freelancer')}>
                            <img src={freelancer} alt="salaried" className="img-fluid mx-auto d-block p-2" style={{height:'84px',width:'84px'}}/>
                            <label className='d-flex justify-content-center'>Freelancer</label>
                        </div>
                    </div>
                    <div className='col p-5'>
                        <div className={`${(descriptionFormData.profession === 'student')?'description-card-highlight':'description-card'}`} name='student' onClick={() => handleCardClick('student')}>
                            <img src={student} alt="salaried" className="img-fluid mx-auto d-block p-2" style={{height:'84px',width:'84px'}}/>
                            <label className='d-flex justify-content-center'>Student</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <button className="btn description-button-style" onClick={() => navigate('/')}>Previous</button>
                </div>
                <div className="col text-end">
                    <button className="btn description-button-style" onClick={onSubmit}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default DescriptionForm;