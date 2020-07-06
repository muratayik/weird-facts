
export const SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS'
export const SIGNIN_FAILURE = 'user/SIGNIN_FAILURE'

const initialState = {
    signInError: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                signInError: null
            }
        case SIGNIN_FAILURE:
            return {
                ...state,
                signInError: payload
            }
        default:
            return state
    }
}