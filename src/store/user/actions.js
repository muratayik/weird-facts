import jwtDecode from 'jwt-decode'

import { USER_FETCH_SUCCESS, USER_FETCH_RESET } from './reducer'
import { getToken } from 'util/token'

export const loadUser = (jwtToken) => dispatch => {

    const token = jwtToken || getToken()

    if (!token) return null

    const { email } = jwtDecode(token)
    dispatch({
        type: USER_FETCH_SUCCESS,
        payload: email
    })
}


export const resetUserFetchData = () => dispatch => {
    dispatch({ type: USER_FETCH_RESET })
}