import { combineReducers } from 'redux';

import academicFormsReducer from './AcademicReducer';
import genericReducer from './genericReducers';
import workFormsReducer from './workReducers';
import skillsReducer from './skillsReducers';

const rootReducer = combineReducers({
    academicForms: academicFormsReducer,
    genericForms: genericReducer,
    workForms: workFormsReducer,
    skillsForm: skillsReducer,
    // Add other reducers here
  });
  
  export default rootReducer;