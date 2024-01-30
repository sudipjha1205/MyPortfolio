import { ADD_INTO_LIST, DELETE_FROM_LIST, UPDATE_THE_LIST, ADD_SKILLS } from "../ActionTypes";

const initialState = {
    forms: {
        skillsList: [],
        publications: [{id: 0, link:''}],
        awards: [{id: 0, link: ''}]
    }
};

const skillsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_SKILLS:
            return {
                ...state,
                forms: {
                    ...state.forms,
                    [action.payload.formName]: action.payload.form,
                }
            }
        case ADD_INTO_LIST:
            return {
                ...state,
                forms: {
                    ...state.forms,
                    [action.payload.formName]: [...state.forms[action.payload.formName],action.payload.form],
                }
            }
        case DELETE_FROM_LIST:
            return{
                ...state,
                forms: {
                    ...state.forms,
                    [action.payload.formName]: state.forms[action.payload.formName].filter((form) => form.id !== action.payload.id)
                }
            }
        case UPDATE_THE_LIST:
            return{
                ...state,
                forms: {
                    ...state.forms,
                    [action.payload.formName]: state.forms[action.payload.formName].map(form => 
                        form.id === action.payload.id ? {...form, ...action.payload.form} : form
                        ),
                }
            }
        default:
            return state;
    }
}

export default skillsReducer;
