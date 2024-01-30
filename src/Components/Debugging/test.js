import React from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addAcademicForm, updateAcademicForm, deleteAcademicForm } from '../Redux/actions';

const Test = () => {
    const academicForms = useSelector((state) => state.genericForms.forms.PersonalInfoForm)
    return(
        <div>
            {console.log(academicForms)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    academicForms: state.academicForms.academicForms,
  });

  const mapDispatchToProps = {
    addAcademicForm,
    updateAcademicForm,
    deleteAcademicForm,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Test);