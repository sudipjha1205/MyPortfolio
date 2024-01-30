// actions.js
import { ADD_ACADEMIC_FORM, DELETE_ACADEMIC_FORM, UPDATE_ACADEMIC_FORM, UPDATE_FORM_FIELD, ADD_WORK_FORM, DELETE_WORK_FORM,UPDATE_WORK_FORM } from '../Redux/ActionTypes';

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
