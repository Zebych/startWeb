import instance from '../../api/login-api';

const initialState = [
    {
        cars: ['самокат', 'вертолет'],
        activeCar: 'самокат',
        statusesCar: ['активен', 'неактивен'],
        activeStatus: 'активен',
        tariffs: ['дорого', 'безумно дорого', 'бесплатно'],
        activeTariff: 'бесплатно',
        drivers: ['Ашот', 'Джамшут'],
        activeDriver: 'Ашот',
        id: '1',
        driversData: [
            {
                drivers: ['Ашот', 'Джамшут'],
                activeDriver: 'Ашот',
                travelAll: 10,
                lastTrip: '2022-10-12',
                created: '2022-10-12',
                remove: false,
            }, {
                drivers: ['Ашот', 'Джамшут'],
                activeDriver: 'Джамшут',
                travelAll: 10,
                lastTrip: '2022-10-12',
                created: '2022-10-12',
                remove: false,
            },
        ]
    },
    {
        cars: ['самокат', 'вертолет'],
        activeCar: 'самокат',
        statusesCar: ['активен', 'неактивен'],
        activeStatus: 'активен',
        tariffs: ['дорого', 'безумно дорого', 'бесплатно'],
        activeTariff: 'бесплатно',
        drivers: ['Ашот', 'Джамшут'],
        activeDriver: 'Ашот',
        id: '2',
        driversData: [
            {
                drivers: ['Ашот', 'Джамшут'],
                activeDriver: 'Ашот',
                travelAll: 10,
                lastTrip: '2022-10-12',
                created: '2022-10-12',
                remove: false,
                id:'1'
            }, {
                drivers: ['Ашот', 'Джамшут'],
                activeDriver: 'Джамшут',
                travelAll: 10,
                lastTrip: '2022-10-12',
                created: '2022-10-12',
                remove: false,
                id:'2',
            },
        ]
    },
]

export const carsTaxiReducer = (state = initialState, action) => {
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