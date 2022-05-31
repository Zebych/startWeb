import instance from '../../api/login-api';

const initialState = [
    {
        id: '1',
        name: 'Snow',
        activeStatus: 'активен',
        cities: ['Москва', 'Алупка'],
        city: 'Москва',
        priority: '1',
        description: 'Описание тарифа хардкод',
        statuses: ['активен', 'неактивен'],
        photoCar: 'https://quto.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2020/10/20/22/4220221/4d2216c9327eee565042000c3b372cc99259e2e0.jpg',
        photoLogo: 'https://papik.pro/uploads/posts/2022-01/1643633638_1-papik-pro-p-smeshnie-logotipi-1.png',
        machinesOnLine: true,
        costOrder: 100,
        minCost: 200,
        costPerMinute: 10,
        costKm: 11,
        time: 12,
        freeTime: 3,
        costOneMinute: 5,
        bonus: 15,
        tariffZones: ['колхоз', 'мичурино'],
        activeTariffZone: 'мичурино',
        cost: 500,
        freeTravelTime: 5,
        deleteZone: false,
        dataTariffZones: [
            {
                statuses: ['Юрьевец', 'Ляхи'],
                status: 'Юрьевец',
                price: 1000,
                feedTime: 5,
                remove: false,
                id: '1',
            },
            {
                statuses: ['Ковров', 'Владимир'],
                status: 'Владимир',
                price: 1000,
                feedTime: 5,
                remove: false,
                id: '2',
            },
        ],
        tariffOptionsData: [
            {
                tariffOptions: ['Опция 1', 'Опция 2'],
                activeOption: 'Опция 1',
                value: 'тратата',
                statuses: ['активен', 'неактивен'],
                activeStatus: 'активен',
                remove: false,
                id: '1',
            },
            {
                tariffOptions: ['Опция 1', 'Опция 2'],
                activeOption: 'Опция 1',
                value: 'тратата',
                statuses: ['активен', 'неактивен'],
                activeStatus: 'активен',
                remove: false,
                id: '2',
            },
        ],
        taxiCars: [
            {
                cars: ['Т-34', 'электричка'],
                activeCar: 'Т-34',
                statuses: ['активен', 'неактивен'],
                activeStatus: 'активен',
                drivers: ['Ашот', 'Олыбей'],
                activeDriver: 'Ашот',
                remove: false,
                id: '1',
            },
            {
                cars: ['Т-34', 'электричка'],
                activeCar: 'электричка',
                statuses: ['активен', 'неактивен'],
                activeStatus: 'активен',
                drivers: ['Ашот', 'Олыбей'],
                activeDriver: 'Олыбей',
                remove: false,
                id: '2',
            },
        ]
    },

]

export const ratesReducer = (state = initialState, action) => {
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