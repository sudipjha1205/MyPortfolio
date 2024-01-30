import React,{ useState, useEffect } from 'react';
import Select from "react-select";
import CreatableSelect from 'react-select/creatable';

import './SkillsForm.css';
import skillsList from '../../Static/Configurations/skillsListConf';

const SkillsForm = () => {
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ options, setOptions ] = useState([])
    const [ selectedOptions, setSelectedOptions] = useState([]);
    

    useEffect(() => {
        if (searchTerm.length >= 3){
            const filteredList = skillsList.filter(item => item.label.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
            const sortedOptions = filteredList.sort((a, b) => a.label.localeCompare(b.label));
            setOptions(sortedOptions);
        } else{
            setOptions([]);
        }
    },[searchTerm])

    const handleInputChange = (newValue) => {
        setSearchTerm(newValue);
    }

    const handleSelectedValue = (e) => {
        const value = e;
        setSelectedOptions(value)
    }

    return(
        <div className='container'>
            <div className='outer-box'>
                <h2 className='p-3 m-3 mb-5 d-flex justify-content-center'>Technical Info</h2>
                <div className='p-3 m-3'>
                    <div>
                        <label className='label-style mb-0 ms-1'>Technical skills:</label>
                        <CreatableSelect
                            isMulti 
                            isClearable 
                            options={options} 
                            onChange={handleSelectedValue} 
                            onInputChange={handleInputChange} 
                            inputValue={searchTerm} 
                            className='select-skills'
                            placeholder='Please type atleast 3 letters' 
                        />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsForm;