import authReducer,
{
    initialState,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE
} from './reducer'

let state

beforeEach(() => {
    state = { ...initialState }
})

describe('Auth Reducer', () => {
    it('Signin Success', () => {
        const expectedState = {
            ...initialState
        }

        const actualState = authReducer(state, {
            type: SIGNIN_SUCCESS
        })

        expect(actualState).toEqual(expectedState)
    })

    it('Signin Failure', () => {

        const errorObject = { statusCode: 401, message: 'Some Error' }

        const expectedState = {
            ...initialState,
            signInError: errorObject
        }

        const actualState = authReducer(state, {
            type: SIGNIN_FAILURE,
            payload: { ...errorObject }
        })

        expect(actualState).toEqual(expectedState)
    })
})