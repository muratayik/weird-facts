import { post } from 'util/modified-axios'
import { clearTokens, setToken } from 'util/token'
import history from 'util/history'
import { SIGNIN_SUCCESS, SIGNIN_FAILURE } from './reducer'
import { loadUser, resetUserFetchData } from 'store/user/actions'

export const trySignIn = ({ email, password }) => async dispatch => {
    try {
        const authenticationRequestDto = { email, password }
        const response = await post('auth/authenticate', authenticationRequestDto)
        setToken(response.jwtToken)
        dispatch(loadUser(response.jwtToken))
        dispatch({
            type: SIGNIN_SUCCESS
        })
        history.push('/')
    } catch (e) {
        dispatch({
            type: SIGNIN_FAILURE,
            payload: e
        })
    }
}

export const signOut = () => dispatch => {
    clearTokens()
    dispatch(resetUserFetchData())
    history.push('/signIn')
}
