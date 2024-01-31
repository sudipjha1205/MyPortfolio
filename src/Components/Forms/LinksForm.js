import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updateFormField } from '../Redux/actions';
//import './LinksForm.css';

const LinksForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const linkForm = useSelector((state) => state.genericForms.forms.LinksForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormField('LinksForm', name, value))
    }

    const print = () => {
        console.log(linkForm);
    }

    return (
        <div className='container'>
            <div className='outer-box p-4'>
                <h2 className='p-2 mt-4 mb-4 d-flex justify-content-center'>Links</h2>
                <div>
                    <label className='label-style mt-5 mb-3 fs-4'>Professional</label>
                    <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
                    <div className='m-3 mt-5'>
                        <label className='label-style'>
                            Github:
                            <input
                            type="text"
                            name="github"
                            value={linkForm.github}
                            onChange={handleChange}
                            className='input-style mb-3'
                            placeholder='Github Profile Link'
                            />
                        </label>
                        <label className='label-style'>
                            LinkedIn:
                            <input
                            type="text"
                            name="linkedin"
                            value={linkForm.linkedin}
                            onChange={handleChange}
                            className='input-style mb-3'
                            placeholder='LinkedIn Profile Link'
                            />
                        </label>
                        <label className='label-style'>
                            Coding:
                            <input
                            type="text"
                            name="coding"
                            value={linkForm.coding}
                            onChange={handleChange}
                            className='input-style mb-3'
                            placeholder='HackerRank/Codechef/Leetcode Profile Link'
                            />
                        </label>
                    </div>
                </div>
                <div className='mb-3 pb-2'>
                    <label className='label-style mt-5 mb-3 fs-4'>Social</label>
                    <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
                    <div className='m-3 mt-5'>
                        <label className='label-style'>
                            Instagram:
                            <input
                            type="text"
                            name="instagram"
                            value={linkForm.instagram}
                            onChange={handleChange}
                            className='input-style mb-3'
                            placeholder='Insta Profile Link'
                            />
                        </label>
                        <label className='label-style'>
                            Facebook:
                            <input
                            type="text"
                            name="facebook"
                            value={linkForm.facebook}
                            onChange={handleChange}
                            className='input-style mb-3'
                            placeholder='Facebook Profile Link'
                            />
                        </label>
                        <label className='label-style'>
                            Blogs:
                            <input
                            type="text"
                            name="blogs"
                            value={linkForm.blogs}
                            onChange={handleChange}
                            className='input-style mb-3'
                            placeholder='Any Blogs or webiste link'
                            />
                        </label>
                    </div>
                </div>
                <hr style={{ border: '1px solid #ccc', margin: '10px 0', marginBottom: '25px'}} />
                <div className="row">
                    <div className="col-auto">
                        <button className="btn description-button-style" onClick={() => navigate('/ProjectsForm')}>Previous</button>
                    </div>
                    <div className="col text-end">
                        <button className="btn description-button-style" onClick={print}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinksForm;