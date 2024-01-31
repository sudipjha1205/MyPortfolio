import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { useNavigate } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";

import skillsList from '../../Static/Configurations/skillsListConf';
import { addProjects, deleteProjects, updateProjects } from '../Redux/actions';

//import './ProjectForm.css';

const ProjectForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const projects = useSelector((state) => state.projectsForm.projects);

    const [ projectLength, setProjectLength ] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        setProjectLength(projects.length);
    },[projects]);

    const addMoreColumn = () => {
        const newForm = {id: Date.now(), title: '', startDate: '', endDate: '', link: '', technologiesUsed: '', description: ''}
        dispatch(addProjects(newForm))
    }

    const deleteColumn = (id) => {
        dispatch(deleteProjects(id))
    }

    useEffect(() => {
        if (searchTerm.length >= 3) {
            const filteredList = skillsList.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()));
            const sortedOptions = filteredList.sort((a, b) => a.label.localeCompare(b.label));
            setOptions(sortedOptions);
        } else {
            setOptions([]);
        }
    }, [searchTerm]);

    const handleChange = (id,e) => {
        const { name, value } = e.target
        const form = { id, [name]: value}
        dispatch(updateProjects(form, id))
    }

    const handleInputChange = (newValue) => {
        setSearchTerm(newValue);
    };

    const handleSelectedValue = (e,id) => {
        console.log(e);
        const value = e;
        setSelectedOptions(value);
        const form = {id, technologiesUsed: e}
        dispatch(updateProjects(form, id))
    };

    const print = () => {
        console.log(projects);
        navigate('/LinksForm');
    }

    return(
        <div className='container'>
            <div className='outer-box p-5'>
                <h2 className='m-3 d-flex justify-content-center'>Projects Info</h2>
                <div>
                    {projectLength === 1 ? (
                        <div>
                            <label className='label-style mt-3 mb-3'>Projects</label>
                            <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
                            <label className='mb-5'>No Projects yet. Add Projects - </label>
                            <button onClick={() => addMoreColumn()} className='add-more-column'><GrAdd /></button>
                        </div>
                    ): (
                        <div>
                            {projects.slice(1).map((form,index) => 
                                <div key={form.id}>
                                    <label className='label-style mt-5'>
                                        Project Title:
                                        <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={(e) => handleChange(form.id, e)}
                                        className='input-style p-2 mt-1'
                                        placeholder='Project Title'
                                        required
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
                                            onChange={(e) => handleChange(form.id, e)}
                                            className='input-style mt-1'
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
                                            onChange={(e) => handleChange(form.id, e)}
                                            className='input-style mt-1'
                                            onFocus={(e) => e.target.type = "date"}
                                            onBlur={(e) => e.target.type = "text"}
                                            placeholder="dd/mm/yyyy"
                                            />
                                        </label>
                                        </div>
                                    </div>
                                    <label className='label-style mt-4 mb-5'>
                                        Project Link:
                                        <input
                                        type="text"
                                        name="link"
                                        value={form.link}
                                        onChange={(e) => handleChange(form.id, e)}
                                        className='input-style p-2 mt-1'
                                        placeholder='Github link / Project site'
                                        />
                                    </label>
                                    <div className='mb-5'>
                                        <label className='label-style mb-1'>Technologies Used:</label>
                                        <CreatableSelect
                                            isMulti
                                            isClearable
                                            options={options}
                                            onChange={(e) => handleSelectedValue(e,form.id)}
                                            onInputChange={handleInputChange}
                                            inputValue={searchTerm}
                                            className='select-skills mt-1'
                                            placeholder='Please type at least 3 letters'
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start mt-4">Project Description</label>
                                        <textarea className="form-control" name='description' id="exampleFormControlTextarea1" value={form.description} rows="3" placeholder='Describe your project, go wild...' onChange={(e) => handleChange(form.id, e)} required></textarea>
                                    </div>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-center" role="group" aria-label="Basic outlined example">
                                        <button onClick={addMoreColumn} className='add-more-academics'><GrAdd /></button>
                                        <button onClick={() => deleteColumn(form.id)} className='remove-academics'><FaTrash /></button>
                                    </div>
                                    <hr style={{ border: '1px solid #ccc', margin: '20px 0', marginTop: '50px' }} />
                                </div> 
                            )} 
                        </div>
                    )}
                </div>
                <div className="row mt-3">
                    <div className="col-auto">
                        <button className="btn description-button-style" onClick={() => navigate('/SkillsForm')}>Previous</button>
                    </div>
                    <div className="col text-end">
                        <button className="btn description-button-style" onClick={print}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectForm;
