import { ADD_WORK_FORM, DELETE_WORK_FORM, UPDATE_WORK_FORM } from '../ActionTypes';

const initialState = {
  workForms: [{ id: 1, companyName: '', startDate: '', endDate: '', designation: '', noticePeriod: '', jobDescription: ''}],
};

const workFormsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORK_FORM:
      return {
        ...state,
        workForms: [...state.workForms, action.payload],
      };
    case UPDATE_WORK_FORM:
      return {
        ...state,
        workForms: state.workForms.map(form =>
          form.id === action.payload.id ? { ...form, ...action.payload.updatedForm } : form
        ),
      };
    case DELETE_WORK_FORM:
      return {
        ...state,
        workForms: state.workForms.filter((form) => form.id !== action.payload),
      };
    default:
      return state;
  }
};

export default workFormsReducer;
