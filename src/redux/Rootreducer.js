const initialState = {
    formData: undefined
}

export default function rootReducer(state = initialState, action) {
    console.log("Action data : ", action);
    switch(action.type) {
        case "UPDATE_FORM_DATA":                         
            return {...state, formData: action.payload};            
        default:
            return state;
    }
}
