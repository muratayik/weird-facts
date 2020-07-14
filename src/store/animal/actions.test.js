import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { fetchAnimal } from './actions'
import { initialState, FETCH_FAILURE, FETCH_SUCCESS, START_FETCHING } from './reducer'

let mockStore = configureMockStore([thunk])
let mock

describe('Animal actions', () => {

    beforeEach(() => {
        mock = new MockAdapter(axios);
    })

    it('Fetch Success cat', () => {
        mock.onGet('animal/cat').reply(200, catMockData)

        const expectedActions = [
            { type: START_FETCHING },
            { type: FETCH_SUCCESS, payload: { animalType: 'cat', list: [...catMockData] } }
        ]

        const store = mockStore({ ...initialState })

        return store.dispatch(fetchAnimal('cat')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('Fetch Success dog', () => {

        mock.onGet('animal/dog').reply(200, dogMockData);

        const expectedActions = [
            { type: START_FETCHING },
            { type: FETCH_SUCCESS, payload: { animalType: 'dog', list: [...dogMockData] } }
        ]

        const store = mockStore({ ...initialState })

        return store.dispatch(fetchAnimal('dog')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })

    it('Fetch Success horse', () => {

        mock.onGet('animal/horse').reply(200, horseMockData);

        const expectedActions = [
            { type: START_FETCHING },
            { type: FETCH_SUCCESS, payload: { animalType: 'horse', list: [...horseMockData] } }
        ]

        const store = mockStore({ ...initialState })

        return store.dispatch(fetchAnimal('horse')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })

    it('Fetch Success snail', () => {

        mock.onGet('animal/snail').reply(200, snailMockData);

        const expectedActions = [
            { type: START_FETCHING },
            { type: FETCH_SUCCESS, payload: { animalType: 'snail', list: [...snailMockData] } }
        ]

        const store = mockStore({ ...initialState })

        return store.dispatch(fetchAnimal('snail')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })

    it('Fetch Failure cat', () => {

        const error = {
            'statusCode': 400,
            'message': 'Animal type can be cat,dog,horse,snail',
            'error': 'Bad Request'
        }

        mock.onGet('animal/unicorn').reply(400, { ...error })

        const expectedActions = [
            { type: START_FETCHING },
            { type: FETCH_FAILURE, payload: { ...error } }
        ]

        const store = mockStore({ ...initialState })

        return store.dispatch(fetchAnimal('unicorn')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

})

const catMockData = [
    {
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kamal_chaneman/128.jpg',
        postingDate: 'Tue Nov 05 2019',
        text: 'A group of cats is called a clowder.',
        type: 'cat',
        userName: 'Mr. Mohammed Zboncak',
        _id: '58e007f50aac31001185ecf8'
    },
    {
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kianoshp/128.jpg',
        postingDate: 'Thu Aug 15 2019',
        text: 'Adult cats only meow to communicate with humans.',
        type: 'cat',
        userName: 'Sophie Sauer',
        _id: '58e008b80aac31001185ed0d'
    }
]

const dogMockData = [
    {
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brenmurrell/128.jpg',
        postingDate: 'Fri Jun 12 2020',
        text: 'Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranians and one Pekingese.',
        type: 'dog',
        userName: 'Elisabeth Kuhn',
        _id: '5c871d9985c8b40e7ed683e6'
    },
    {
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/drewbyreese/128.jpg',
        postingDate: 'Tue Jun 02 2020',
        text: 'Your pup can pick up on subtle changes in your scent, which can help him figure out how you are feeling — such as by smelling your perspiration when you become nervous or fearful.',
        type: 'dog',
        userName: 'Delaney Jones',
        _id: '5c8422e9731a60001540a191'
    }
]

const horseMockData = [
    {
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg',
        postingDate: 'Fri Aug 30 2019',
        text: 'Horses cannot vomit.',
        type: 'horse',
        userName: 'Isaac Ruecker',
        _id: '5b7a07272048fd0014e9d8aa'
    },
    {
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mhudobivnik/128.jpg',
        postingDate: 'Tue Dec 03 2019',
        text: 'Ponies are small horses.',
        type: 'horse',
        userName: 'Reggie Kertzmann',
        _id: '5b12d729cf4b960d5eb02eba'
    }
]

const snailMockData = [
    {
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mekal/128.jpg',
        postingDate: 'Fri Oct 25 2019',
        text: 'Snail is a common name for gastropod molluscs that can be split into three groups, land snails, sea snails and freshwater snails.',
        type: 'snail',
        userName: 'Rosalee Borer IV',
        _id: '5b12d68ecf4b960d5eb02ea7'
    },
    {
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/cloudstudio/128.jpg',
        postingDate: 'Sun Oct 20 2019',
        text: 'Snails can have lungs or gills depending on the species and their habitat. Some marine snails actually can have lungs and some land based snails can have gills.',
        type: 'snail',
        userName: 'Cheyenne Walsh',
        _id: '5b12d75acf4b960d5eb02ebb'
    }
]
