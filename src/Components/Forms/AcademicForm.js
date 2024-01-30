  // AcademicForm.js
  import React, { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { connect } from 'react-redux';
  import { addAcademicForm, updateAcademicForm, deleteAcademicForm } from '../Redux/actions';

  import { GrAdd } from "react-icons/gr";
  import { FaTrash } from "react-icons/fa";

  import './AcademicForm.css';

  const AcademicForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const academicForms = useSelector((state) => state.academicForms.academicForms);
    const genericForms = useSelector((state) => state.genericForms.forms);


    const addAcademicColumn = () => {
      const newForm = { id: Date.now(), degree: '', course: '', institution: '', startYear: '', endYear: '', gpaScored: '', gpaOutOf: '' };
      dispatch(addAcademicForm(newForm));
    };

    const deleteAcademicColumn = (id) => {
      dispatch(deleteAcademicForm(id));
    };

    const handleInputChange = (id, event) => {
      const { name, value } = event.target;
      const updatedForm = { id, [name]: value };
      dispatch(updateAcademicForm(id, updatedForm));
    };

    const print = () => {
      // Use Redux action to update the global form data
      // e.g., updateFormData('AcademicForm', academicForms);
      console.log(academicForms);
      console.log(genericForms);
      navigate('/WorkExperienceForm')
    };

    return (
      <div className='container'>
        <div className=' form-style'>
          <h2 className='p-3 mb-4 d-flex justify-content-center'>Academic Details</h2>
          {academicForms.map((form, index) => (
            <div key={form.id}>
              <label className='label-style mt-5'>
                Institution:
                <input
                  type="text"
                  name="institution"
                  value={form.institution}
                  onChange={(e) => handleInputChange(form.id, e)}
                  className='input-style p-2'
                  placeholder='College/University/School'
                />
              </label>
              <br />
              <div className="input-group">
                <div className="input-group-item">
                  <label className='label-style mt-2 mb-2'>
                    Degree:
                    <input
                      type="text"
                      name="degree"
                      value={form.degree}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      placeholder='Bachelors of Technology(B.TECH)'
                      required
                    />
                  </label>
                </div>
                <div className="input-group-item">
                  <label className='label-style mt-2 mb-2'>
                    Course:
                    <input
                      type="text"
                      name="course"
                      value={form.course}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      placeholder='Computer Science & Engineering(CSE)'
                    />
                  </label>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-item">
                  <label className='label-style mt-4 mb-2'>
                    Start Year:
                    <input
                      type="text"
                      name="startYear"
                      value={form.startYear}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      placeholder='2023'
                      required
                    />
                  </label>
                </div>
                <div className="input-group-item">
                  <label className='label-style mt-4 mb-2'>
                    End Year:
                    <input
                      type="text"
                      name="endYear"
                      value={form.endYear}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      placeholder='2027'
                    />
                  </label>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-item">
                  <label className='label-style mt-4 mb-4'>
                    GPA Scored:
                    <input
                      type="text"
                      name="gpaScored"
                      value={form.gpaScored}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      placeholder='7.0'
                      required
                    />
                  </label>
                </div>
                <div className="input-group-item">
                  <label className='label-style mt-4 mb-4'>
                    Out Of:
                    <input
                      type="text"
                      name="gpaOutOf"
                      value={form.gpaOutOf}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      placeholder='10'
                    />
                  </label>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center" role="group" aria-label="Basic outlined example">
                <button onClick={addAcademicColumn} className='add-more-academics'><GrAdd /></button>
                {index > 0 && (
                  <button onClick={() => deleteAcademicColumn(form.id)} className='remove-academics'><FaTrash /></button>
                )}
              </div>
              <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
            </div>
          ))}
          <div className="row">
            <div className="col-auto">
              <button className="btn description-button-style" onClick={() => navigate('/DescriptionInfo')}>Previous</button>
            </div>
            <div className="col text-end">
              <button className="btn description-button-style" onClick={print}>Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const mapStateToProps = (state) => ({
    academicForms: state.academicForms.academicForms,
  });

  const mapDispatchToProps = {
    addAcademicForm,
    updateAcademicForm,
    deleteAcademicForm,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(AcademicForm);
