import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { initialState, USER_FETCH_SUCCESS, USER_FETCH_RESET } from './reducer'
import { resetUserFetchData, loadUser } from './actions'

let mockStore = configureMockStore([thunk])

jest.mock('jwt-decode', () => () => ({ email: "muratayik@gmail.com" }))

describe('User Actions', () => {
    it('Load user data', () => {

        const expectedActions = [
            { type: USER_FETCH_SUCCESS, payload: 'muratayik@gmail.com' }
        ]

        const store = mockStore({ ...initialState })

        store.dispatch(loadUser(idToken))

        expect(store.getActions()).toEqual(expectedActions)

    })

    it('Reset User Fetch', () => {

        const expectedActions = [
            { type: USER_FETCH_RESET }
        ]

        const store = mockStore({ ...initialState })

        store.dispatch(resetUserFetchData())

        expect(store.getActions()).toEqual(expectedActions)
    })
})

const idToken = 'eyJraWQiOiJSRXU2VjJhZlByK0szaEhqMWtjcWxhVEkyREZKajBieGdyWWtTbzJRY000PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2ZjFkYjU0MC1lNmNjLTRmZDktYjgzZC1kZmEwMGY1MWY3MmYiLCJhdWQiOiI0OGR2YmpvbnE3cjYwaThiMGExYWlxdXJsdCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjcyMzgxNTg0LTE1OTItNDFhNS05MDZiLTljNDgxNDk3NWJiOSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTk0NjY4NDY1LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9vSlkwakZCZ28iLCJjb2duaXRvOnVzZXJuYW1lIjoiNmYxZGI1NDAtZTZjYy00ZmQ5LWI4M2QtZGZhMDBmNTFmNzJmIiwiZXhwIjoxNTk0NjcyMDY1LCJpYXQiOjE1OTQ2Njg0NjUsImVtYWlsIjoibXVyYXRheWlrQGdtYWlsLmNvbSJ9.firSB-GU5QTb9KC3HtaOdI6aMWVULVy2ymnc1MquXsVuQ9-FBE6hw5nSZ2Y2e_aEC8wGvzn2-bZmRUw_7kzZGcZnISp6CkZIoMQkxhKmTa_tCw5arnt7btwler-GYkMSv5jvyYVGrM9UfMWjkNRPf7D2xAsdHGIf037nmo69ptEK7qn8ESO3Hjz7KU252JW33IAElDP1-ASWwtVGYqqmQ3IrSvsjM2zd3ks3gw_vO5X3eUGFbXKRCFvUSE58ykXKgzWM_2wGwmznEwDINaFQX6JwOKTiV1uosU6Aokma3T2Kr6R4vnAlROxbC1ilkqdKXn4CtsLrmpI9L0hQmQgvMw'
