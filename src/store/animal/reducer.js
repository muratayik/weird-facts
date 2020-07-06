
export const START_FETCHING = 'animal/START_FETCHING'
export const FETCH_SUCCESS = 'animal/FETCH_SUCCESS'
export const FETCH_FAILURE = 'animal/FETCH_FAILURE'

const initialState = {
    cat: null,
    dog: null,
    horse: null,
    snail: null,
    fetchStatus: '',
    fetchError: null
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case START_FETCHING:
            return {
                ...state,
                fetchStatus: 'fetching'
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                [payload.animalType]: payload.list,
                fetchStatus: 'completed',
                fetchError: null
            }
        case FETCH_FAILURE:
            return {
                ...state,
                fetchStatus: 'completed',
                fetchError: payload
            }
        default:
            return state
    }

}

