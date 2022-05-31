import instance from '../../api/login-api';

const initialState = [
    {
        cars: ['самокат', 'вертолет'],
        activeCar: 'самокат',
        statusesCar: ['активен', 'неактивен'],
        activeStatusCar: 'активен',
        prices: ['дорого', 'еще дороже'],
        activePrice: 'дорого',
        id: '1',
    },
    {
        cars: ['самокат', 'вертолет'],
        activeCar: 'самокат',
        statusesCar: ['активен', 'неактивен'],
        activeStatusCar: 'активен',
        prices: ['дорого', 'еще дороже'],
        activePrice: 'дорого',
        id: '2',
    },
]

export const carsRentalReducer = (state = initialState, action) => {
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