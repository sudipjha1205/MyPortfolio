import { combineReducers } from 'redux';

import academicFormsReducer from './AcademicReducer';
import genericReducer from './genericReducers';
import workFormsReducer from './workReducers';

const rootReducer = combineReducers({
    academicForms: academicFormsReducer,
    genericForms: genericReducer,
    workForms: workFormsReducer,
    // Add other reducers here
  });
  
  export default rootReducer;