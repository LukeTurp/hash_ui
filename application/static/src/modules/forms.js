export const LOGIN = 'forms/LOGIN'


const initialState = {
    credentials: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                credentials: state
            }
        default: 
            return state
    }
}

export const login = () => {
    return dispatch => {
        dispatch({
            type: LOGIN
        })
    }
}
