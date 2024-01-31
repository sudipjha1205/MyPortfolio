// actions.js
import { ADD_ACADEMIC_FORM, DELETE_ACADEMIC_FORM, UPDATE_ACADEMIC_FORM, UPDATE_FORM_FIELD, ADD_WORK_FORM, DELETE_WORK_FORM,UPDATE_WORK_FORM, ADD_INTO_LIST, DELETE_FROM_LIST, UPDATE_THE_LIST, ADD_SKILLS } from '../Redux/ActionTypes';
import { ADD_PROJECTS, DELETE_PROJECTS, UPDATE_PROJECTS } from '../Redux/ActionTypes';

export const addAcademicForm = (form) => ({
  type: ADD_ACADEMIC_FORM,
  payload: form,
});

export const updateAcademicForm = (id, updatedForm) => ({
  type: UPDATE_ACADEMIC_FORM,
  payload: { id, updatedForm },
});

export const deleteAcademicForm = (id) => ({
  type: DELETE_ACADEMIC_FORM,
  payload: id,
});

export const updateFormField = (formName, fieldName, value) => ({
  type: UPDATE_FORM_FIELD,
  payload: { formName, fieldName, value },
});

export const addWorkForm = (form) => ({
  type: ADD_WORK_FORM,
  payload: form
});

export const updateWorkForm = (id, updatedForm) => ({
  type: UPDATE_WORK_FORM,
  payload: { id, updatedForm },
});

export const deleteWorkForm = (id) => ({
  type: DELETE_WORK_FORM,
  payload: id,
});

export const addSkills = (form,formName) => ({
  type: ADD_SKILLS,
  payload: { form, formName }
})

export const addIntoList = (form,formName) => ({
  type: ADD_INTO_LIST,
  payload: { form, formName }
})

export const deleteFromList = (id,formName) => ({
  type: DELETE_FROM_LIST,
  payload: { id,formName }
})

export const updateTheList = (form,id,formName) => ({
  type: UPDATE_THE_LIST,
  payload: { form, id,formName }
})

export const addProjects = (form) => ({
  type: ADD_PROJECTS,
  payload: form,
})

export const deleteProjects = (id) => ({
  type: DELETE_PROJECTS,
  payload: id,
})

export const updateProjects = (form,id) => ({
  type: UPDATE_PROJECTS,
  payload: { form, id }
})