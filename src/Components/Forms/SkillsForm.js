import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import './SkillsForm.css';
import skillsList from '../../Static/Configurations/skillsListConf';
import { addIntoList, deleteFromList, updateTheList, addSkills } from '../Redux/actions';

import { GrAdd } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";

const SkillsForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [publicationLength, setPublicationsLength] = useState(0);
    const [awardsLength, setAwardsLength] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allSkills = useSelector((state) => state.skillsForm.forms.skillsList);
    const publications = useSelector((state) => state.skillsForm.forms.publications);
    const awards = useSelector((state) => state.skillsForm.forms.awards);

    const addColumn = (formName) => {
        const newForm = {id: Date.now(), link: ''}
        dispatch(addIntoList(newForm,formName));
    }

    const deleteColumn = (id, formName) => {
        dispatch(deleteFromList(id,formName))
    }

    const handleChange = (id,link,formName) => {
        const form = {id: id, link: link}
        dispatch(updateTheList(form,id,formName));
    }


    const handleInputChange = (newValue) => {
        setSearchTerm(newValue);
    };

    const handleSelectedValue = (e) => {
        const value = e;
        setSelectedOptions(value);
        dispatch(addSkills(value,'skillsList'));
    };

    useEffect(() => {
        setPublicationsLength(publications.length);
    },[publications]);

    useEffect(() => {
        setAwardsLength(awards.length);
    },[awards]);

    
    useEffect(() => {
        if (searchTerm.length >= 3) {
            const filteredList = skillsList.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()));
            const sortedOptions = filteredList.sort((a, b) => a.label.localeCompare(b.label));
            setOptions(sortedOptions);
        } else {
            setOptions([]);
        }
    }, [searchTerm]);

    const print = () => {
        console.log(allSkills);
        console.log(publications);
        console.log(awards);
        navigate('/ProjectsForm');
    }

    return (
        <div className='container'>
            <div className='outer-box'>
                <h2 className='p-3 m-3 mb-5 d-flex justify-content-center'>Technical Info</h2>
                <div className='p-3 m-3'>
                    <div>
                        <label className='label-style mb-1'>Technical skills:</label>
                        <CreatableSelect
                            isMulti
                            isClearable
                            options={options}
                            onChange={handleSelectedValue}
                            onInputChange={handleInputChange}
                            inputValue={searchTerm}
                            className='select-skills'
                            placeholder='Please type at least 3 letters'
                        />
                    </div>
                    <div>
                        <label className='label-style mt-5 mb-3'>Publications</label>
                        <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
                        {publicationLength === 1 ? (
                            <div>
                                <label>No Publications yet. Add Publications - </label>
                                <button onClick={() => addColumn('publications')} className='add-more-column'><GrAdd /></button>
                            </div>
                        ) : (
                            publications.slice(1).map((form,index) => (
                                <div key={form.id}>
                                    <label>{index+1}. </label>
                                    <input
                                        key={form.id}
                                        type="text"
                                        name="link"
                                        value={form.link}
                                        onChange={(e) => handleChange(form.id,e.target.value,'publications')}
                                        className='publication-input p-2'
                                        placeholder='Provide your publication link here...'
                                        required
                                    />
                                    <button onClick={() => addColumn('publications')} className='add-more-column'><GrAdd /></button>
                                    <button onClick={() => deleteColumn(form.id,'publications')} className='remove-column'><FaTrash /></button>
                                </div>
                            ))
                        )}
                    </div>
                    <div>
                        <label className='label-style mt-5 mb-3'>Awards</label>
                        <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
                        {awardsLength === 1 ? (
                            <div>
                                <label>No Awards yet. Add Awards - </label>
                                <button onClick={() => addColumn('awards')} className='add-more-column'><GrAdd /></button>
                            </div>
                        ) : (
                            awards.slice(1).map((form,index) => (
                                <div key={form.id}>
                                    <label>{index+1}. </label>
                                    <input
                                        key={form.id}
                                        type="text"
                                        name="link"
                                        value={form.link}
                                        onChange={(e) => handleChange(form.id,e.target.value,'awards')}
                                        className='publication-input p-2'
                                        placeholder='Provide your awards link here...'
                                        required
                                    />
                                    <button onClick={() => addColumn('awards')} className='add-more-column'><GrAdd /></button>
                                    <button onClick={() => deleteColumn(form.id,'awards')} className='remove-column'><FaTrash /></button>
                                </div>
                            ))
                        )}
                    </div>
                    <hr style={{ border: '1px solid #ccc', margin: '20px 0', marginTop: '75px' }} />
                    <div className="row">
                        <div className="col-auto">
                        <button className="btn description-button-style" onClick={() => navigate('/WorkExperienceForm')}>Previous</button>
                        </div>
                        <div className="col text-end">
                        <button className="btn description-button-style" onClick={print}>Next</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsForm;
