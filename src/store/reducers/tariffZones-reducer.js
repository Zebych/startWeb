import instance from '../../api/login-api';

const initialState = [
    {
        id: '1',
        name: 'Snow',
        dateOfCreation: '2022-12-32',
        updateDate: '2022-13-25',
        description: 'Описание хардкор',
        coordinates: '50.2 20.1',
    }, {
        id: '2',
        name: 'Snow',
        dateOfCreation: '2022-12-32',
        updateDate: '2022-13-25',
        description: 'Описание хардкор',
        coordinates: '50.2 20.1',
    },

]

export const tariffZonesReducer = (state = initialState, action) => {
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