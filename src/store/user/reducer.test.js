import userReducer,
{
    initialState,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILURE,
    USER_FETCH_RESET
} from './reducer'

let state

beforeEach(() => {
    state = { ...initialState }
})

describe('User Reducer', () => {
    it('Fetch Success', () => {
        const email = 'muayi@dfds.com'
        const expected = {
            ...initialState,
            isUserFetched: true,
            email
        }
        const actual = userReducer(state, {
            type: USER_FETCH_SUCCESS,
            payload: email
        })
        expect(actual).toEqual(expected)
    })

    it('Fetch Failure', () => {
        const errorObject = { statusCode: 401, message: 'Some Error' }
        const expected = {
            ...initialState,
            error: { ...errorObject }
        }
        const actual = userReducer(state, {
            type: USER_FETCH_FAILURE,
            payload: { ...errorObject }
        })
        expect(actual).toEqual(expected)
    })

    it('Fetch Reset', () => {

        const expected = { ...initialState }
        const email = 'muayi@dfds.com'
        const errorObject = { statusCode: 401, message: 'Some Error' }

        state = userReducer(state, {
            type: USER_FETCH_SUCCESS,
            payload: email
        })

        state = userReducer(state, {
            type: USER_FETCH_FAILURE,
            payload: { ...errorObject }
        })

        const actual = userReducer(state, {
            type: USER_FETCH_RESET
        })

        expect(actual).toEqual(expected)

    })
})