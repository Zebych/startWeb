import instance from '../../api/login-api';

const initialState = [
    {
        name: 'Москва',
        coordinates: '50.2 25.1',
        statuses: ['активен', 'неактивен'],
        activeStatus: 'активен',
        id: '1',
    }, {
        name: '$$$',
        coordinates: '50.2 25.1',
        statuses: ['активен', 'неактивен'],
        activeStatus: 'активен',
        id: '2',
    },
]

export const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return {...state, [action.id]: []}
        default :
            return state
    }
}

//action


export const getCarsTC = () => {
    return async (dispatch) => {
        debugger
        try {
            alert('запрос автомобили')
            /* const response = await instance.get(`/admin/courses-library/`);
             dispatch({type: GET_ALL_COURSES, payload: response.data});*/
        } catch (error) {
            console.log(error)
        }
    }
}
export const handleRemoveDataClickTC = () => {
    return async (dispatch) => {
        debugger
        try {
            alert('запрос автомобили')
            /* const response = await instance.get(`/admin/courses-library/`);
             dispatch({type: GET_ALL_COURSES, payload: response.data});*/
        } catch (error) {
            console.log(error)
        }
    }
}