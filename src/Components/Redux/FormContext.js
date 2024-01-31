// FormContext.js
import React, { createContext, useContext, useReducer } from 'react';

const FormContext = createContext();

export const useForm = () => {
  return useContext(FormContext);
};

// FormContext.js
export const FormProvider = ({ children }) => {
  const initialState = {
    // Initialize with default form values
    PersonalInfoForm: { firstName: "", lastName: "", photo: null, email: "", confirmEmail: "", street: "", city: "", state: "", pin: "", country: "Select Country" },
    DescriptionForm: { introduction: "", unique: "", profession: ""},
    AcademicForm: [],
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_PAGE':
        return {
          ...state,
          [action.page]: { ...state[action.page], ...action.data },
        };
      case 'DELETE_ACADEMIC_ITEM':
        if (Array.isArray(state.AcademicForm)) {
          return {
            ...state,
            AcademicForm: state.AcademicForm.filter((item, index) => index !== action.index),
          };
        } else {
          console.error("AcademicForm is not an array:", state.AcademicForm);
          return state;
        }
      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer(formReducer, initialState);

  const updateFormData = (page, data) => {
    dispatch({ type: 'UPDATE_PAGE', page, data });
  };

  const deleteAcademicItem = (index) => {
    dispatch({ type: 'DELETE_ACADEMIC_ITEM', index });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, deleteAcademicItem }}>
      {children}
    </FormContext.Provider>
  );
};
