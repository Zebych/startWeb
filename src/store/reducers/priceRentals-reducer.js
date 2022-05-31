import instance from '../../api/login-api';

const initialState = [
    {
        description: 'описание хардкор',
        rental_1_7: 130000,
        rental_7_14: 25000,
        rental_14_30: 22000,
        rentalMore_30: 19000,
        security_deposit: 10000,
        id: '1',
    },
    {
        description: 'описание хардкор',
        rental_1_7: 30000,
        rental_7_14: 25000,
        rental_14_30: 22000,
        rentalMore_30: 19000,
        security_deposit: 10000,
        id: '2',
    },
]

export const priceRentalsReducer = (state = initialState, action) => {
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