import instance from '../../api/login-api';

const initialState = [
    {
        address: 'адрес хардкор',
        latitude: '50.2 хардкор',
        longitude: '20.5 хардкор',
        tariffZone: 'франкфурд хардкор',
        created: '20 апреля 2022г.',
        lastUse: '20 апреля 2022г. хардкор',
        id: '1',
    },
    {
        address: '$$адрес хардкор',
        latitude: '50.2 хардкор',
        longitude: '20.5 хардкор',
        tariffZone: 'франкфурд хардкор',
        created: '20 апреля 2022г.',
        lastUse: '20 апреля 2022г. хардкор',
        id: '2',
    },
]

export const addressesReducer = (state = initialState, action) => {
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