// reducerGeneric.js
import { UPDATE_FORM_FIELD } from '../ActionTypes';

const initialState = {
  forms: {
    DescriptionForm: {introduction: "", unique: "", profession: ""},
    PersonalInfoForm: { firstName: "", lastName: "", photo: null, email: "", confirmEmail: "", street: "", city: "", state: "", pin: "", country: "Select Country" },
    LinksForm: { github: '', linkedin: '', coding: '', instagram: '', facebook: '', blogs: ''}
  },
};

const genericReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      const { formName, fieldName, value } = action.payload;
      return {
        ...state,
        forms: {
          ...state.forms,
          [formName]: {
            ...state.forms[formName],
            [fieldName]: value,
          },
        },
      };
    default:
      return state;
  }
};

export default genericReducer;
