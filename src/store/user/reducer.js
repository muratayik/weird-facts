
export const USER_FETCH_SUCCESS = 'auth/USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'auth/USER_FETCH_FAILURE'
export const USER_FETCH_RESET = 'auth/USER_FETCH_RESET'

export const initialState = {
    isUserFetched: false,
    email: null,
    error: null
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                isUserFetched: true,
                email: payload,
                error: null
            }
        case USER_FETCH_FAILURE:
            return {
                ...state,
                isUserFetched: false,
                email: null,
                error: payload
            }
        case USER_FETCH_RESET:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }

}