import instance from '../../api/login-api';

const initialState = [
    {
        profiles: ['9999', '888', '777'],
        activeProfile: '777',
        cars: ['самокат', 'вертолет'],
        activeCar: 'самокат',
        startDate: '2015-08-18',
        expirationDate: '2022-10-18',
        price: '1000',
        securityDeposit: '10000',
        statuses: ['9999', '888', '777'],
        activeStatus: '777',
        id: '1',
    },
    {
        profiles: ['9999', '888', '777'],
        activeProfile: '777',
        cars: ['самокат', 'вертолет'],
        activeCar: 'самокат',
        startDate: '2015-08-18',
        expirationDate: '2022-10-18',
        price: '1000',
        securityDeposit: '10000',
        statuses: ['9999', '888', '777'],
        activeStatus: '777',
        id: '2',
    },
]

export const applicationRentsReducer = (state = initialState, action) => {
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