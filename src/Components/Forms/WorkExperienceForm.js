  // AcademicForm.js
  import React, { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { connect } from 'react-redux';
  import { addWorkForm, updateWorkForm, deleteWorkForm } from '../Redux/actions';

  import { GrAdd } from "react-icons/gr";
  import { FaTrash } from "react-icons/fa";

  const WorkExperienceForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const workForms = useSelector((state) => state.workForms.workForms);
    const [ ischecked, setIsChecked ] = useState(false);


    const addWorkColumn = () => {
      const newForm = { id: Date.now(), companyName: '', startDate: '', endDate: '', designation: '', noticePeriod: '', jobDescription: '' };
      dispatch(addWorkForm(newForm));
    };

    const deleteWorkColumn = (id) => {
      dispatch(deleteWorkForm(id));
    };

    const handleInputChange = (id, event) => {
      console.log(event.target)
      const { name, value } = event.target;
      const updatedForm = { id, [name]: value };
      dispatch(updateWorkForm(id, updatedForm));
    };

    const handleCheckbox = () => {
        setIsChecked(!ischecked);
    }

    const print = () => {
      // Use Redux action to update the global form data
      // e.g., updateFormData('AcademicForm', academicForms);
      console.log(workForms);
      navigate('/SkillsForm')
    };

    return (
      <div className='container'>
        <div className=' form-style'>
          <h2 className='p-3 mb-4 d-flex justify-content-center'>Work Experience</h2>
          {workForms.map((form, index) => (
            <div key={form.id}>
              <label className='label-style mt-5'>
                Company Name:
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={(e) => handleInputChange(form.id, e)}
                  className='input-style p-2'
                  placeholder='Google/Amazon/TCS/CTS'
                />
              </label>
              <br />
              <div className="input-group">
                <div className="input-group-item">
                  <label className='label-style mt-2 mb-2'>
                    Start Date:
                    <input
                      type="text"
                      name="startDate"
                      value={form.startDate}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      required
                      onFocus={(e) => e.target.type = "date"}
                      onBlur={(e) => e.target.type = "text"}
                      placeholder="dd/mm/yyyy"
                    />
                  </label>
                </div>
                <div className="input-group-item">
                  <label className='label-style mt-2 mb-2'>
                    End Date:
                    <input
                      type="text"
                      name="endDate"
                      value={form.endDate}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      onFocus={(e) => e.target.type = "date"}
                      onBlur={(e) => e.target.type = "text"}
                      placeholder="dd/mm/yyyy"
                      disabled={ischecked}
                    />
                  </label>
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={handleCheckbox}/>
                <label className="form-check-label d-flex justify-content-start" htmlFor="flexCheckDefault">
                    Currently working here
                </label>
              </div>
              <div className="input-group mt-3">
                <div className="input-group-item">
                  <label className='label-style mt-4 mb-2'>
                    Designation:
                    <input
                      type="text"
                      name="designation"
                      value={form.designation}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      placeholder='Software Developer'
                      required
                    />
                  </label>
                </div>
                <div className="input-group-item">
                  <label className='label-style mt-4 mb-2'>
                    Notice Period:
                    <input
                      type="text"
                      name="noticePeriod"
                      value={form.noticePeriod}
                      onChange={(e) => handleInputChange(form.id, e)}
                      className='input-style'
                      placeholder='In Days'
                    />
                  </label>
                </div>
              </div>
              <div className="mb-5">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start mt-4">Job Description</label>
                    <textarea className="form-control" name='jobDescription' id="exampleFormControlTextarea1" value={form.jobDescription} rows="3" placeholder='Describe your job...' onChange={(e) => handleInputChange(form.id, e)} required></textarea>
                </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center" role="group" aria-label="Basic outlined example">
                <button onClick={addWorkColumn} className='add-more-academics'><GrAdd /></button>
                {index > 0 && (
                  <button onClick={() => deleteWorkColumn(form.id)} className='remove-academics'><FaTrash /></button>
                )}
              </div>
              <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
            </div>
          ))}
          <div className="row">
            <div className="col-auto">
              <button className="btn description-button-style" onClick={() => navigate('/AcademicForm')}>Previous</button>
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
    workForms: state.workForms.workForms,
  });

  const mapDispatchToProps = {
    addWorkForm,
    updateWorkForm,
    deleteWorkForm,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(WorkExperienceForm);
