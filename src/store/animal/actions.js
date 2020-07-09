import { FETCH_FAILURE, FETCH_SUCCESS, START_FETCHING } from './reducer'
import { get } from 'util/modified-axios'


export const fetchAnimal = (animalType) => async dispatch => {

    dispatch({
        type: START_FETCHING
    })

    try {
        const response = await get(`animal/${animalType}`)
        dispatch({
            type: FETCH_SUCCESS,
            payload: {
                animalType,
                list: response
            }
        })
    } catch (e) {
        dispatch({
            type: FETCH_FAILURE,
            payload: e
        })
    }

}