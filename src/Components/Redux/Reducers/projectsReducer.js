import { ADD_PROJECTS, DELETE_PROJECTS, UPDATE_PROJECTS } from "../ActionTypes";

const initialState = {
    projects: [{id:0, title: '', startDate: '', endDate: '', link: '', technologiesUsed: [], description: ''}]
}

const projectsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PROJECTS:
            return {
                ...state,
                projects: [...state.projects, action.payload],
            };
        case DELETE_PROJECTS:
            return {
                ...state,
                projects: state.projects.filter((form) => form.id !== action.payload),
            };
        case UPDATE_PROJECTS:
            return {
                ...state,
                projects: state.projects.map(form =>
                    form.id === action.payload.id ? {...form, ...action.payload.form } : form
                ),
            };
        default:
            return state;
    }
};

export default projectsReducer;