// reducer.js
import { ADD_ACADEMIC_FORM, DELETE_ACADEMIC_FORM, UPDATE_ACADEMIC_FORM } from '../ActionTypes';

const initialState = {
  academicForms: [{ id: 1, degree: '', course: '', institution: '', startYear: '', endYear: '', gpaScored: '', gpaOutOf: '' }],
};

const academicFormsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACADEMIC_FORM:
      return {
        ...state,
        academicForms: [...state.academicForms, action.payload],
      };
    case UPDATE_ACADEMIC_FORM:
      return {
        ...state,
        academicForms: state.academicForms.map(form =>
          form.id === action.payload.id ? { ...form, ...action.payload.updatedForm } : form
        ),
      };
    case DELETE_ACADEMIC_FORM:
      return {
        ...state,
        academicForms: state.academicForms.filter((form) => form.id !== action.payload),
      };
    default:
      return state;
  }
};

export default academicFormsReducer;
