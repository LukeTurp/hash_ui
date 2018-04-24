import axios from 'axios'

export const LOGIN = 'forms/LOGIN'
export const LOGIN_REQUESTED = 'forms/LOGIN_REQUESTED'
export const LOGIN_SUCCESS = 'forms/LOGIN_SUCCESS'
export const LOGIN_FAILED = 'forms/LOGIN_FAILED'


const initialState = {
    loginAttempting: false,
    username: undefined,
    access_token: undefined,
    refresh_token: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
                username: action.payload,
                loginAttempting: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginAttempting: !state.loginAttempting,
                access_token: action.payload.data.access_token,
                refresh_token: action.payload.data.refresh_token
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const login = credentials => {
    return dispatch => {
      debugger;
        dispatch({ type: LOGIN_REQUESTED, payload: credentials.username })

          const request = axios.post('http://127.0.0.1:8000/api/v1/user/auth', credentials)

        request.then(
                resp => dispatch({ type: LOGIN_SUCCESS, payload: resp }),
                err => dispatch({ type: LOGIN_FAILED, error: err })
            )
    }
}
