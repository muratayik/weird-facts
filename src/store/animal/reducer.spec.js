import animalReducer,
{
    initialState,
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from './reducer'

let state

beforeEach(() => {
    state = { ...initialState }
})

describe('Animal reducer', () => {
    it('Start fetching', () => {
        const expectedState = {
            ...initialState,
            fetchStatus: 'fetching'
        }
        const actualState = animalReducer(state, {
            type: START_FETCHING
        })
        expect(actualState).toEqual(expectedState)

    });

    it('Fetch success cat', () => {
        const listOfCats = ['cat 1', 'cat 2', 'cat 3']

        const expectedState = {
            ...initialState,
            cat: [...listOfCats],
            fetchStatus: 'completed'
        }

        const actualState = animalReducer(state, {
            type: FETCH_SUCCESS,
            payload: { animalType: 'cat', list: [...listOfCats] }
        })

        expect(actualState).toEqual(expectedState)
    })

    it('Fetch Success dog', () => {
        const listOfDogs = ['dog 1', 'dog 2', 'dog 3']

        const expectedState = {
            ...initialState,
            dog: [...listOfDogs],
            fetchStatus: 'completed'
        }

        const actualState = animalReducer(state, {
            type: FETCH_SUCCESS,
            payload: { animalType: 'dog', list: [...listOfDogs] }
        })

        expect(actualState).toEqual(expectedState)
    })

    it('Fetch Success horse', () => {
        const listOfHorses = ['horse 1', 'horse 2', 'horse 3']

        const expectedState = {
            ...initialState,
            horse: [...listOfHorses],
            fetchStatus: 'completed'
        }

        const actualState = animalReducer(state, {
            type: FETCH_SUCCESS,
            payload: { animalType: 'horse', list: [...listOfHorses] }
        })

        expect(actualState).toEqual(expectedState)
    })

    it('Fetch Success snail', () => {
        const listOfSnails = ['snail 1', 'snail 2', 'snail 3']

        const expectedState = {
            ...initialState,
            snail: [...listOfSnails],
            fetchStatus: 'completed'
        }

        const actualState = animalReducer(state, {
            type: FETCH_SUCCESS,
            payload: { animalType: 'snail', list: [...listOfSnails] }
        })

        expect(actualState).toEqual(expectedState)
    })

    it('Fetch failure', () => {
        const errorObject = { statusCode: 401, message: 'Some Error' }

        const expectedState = {
            ...initialState,
            fetchStatus: 'completed',
            fetchError: { ...errorObject }
        }

        const actualState = animalReducer(state, {
            type: FETCH_FAILURE,
            payload: errorObject
        })
        expect(actualState).toEqual(expectedState)
    })
});