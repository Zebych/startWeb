import instance from '../../api/login-api';

const initialState = [
    {
        lastUsed:'2022-05-10',
        registered:'2022-05-10',
        userModel:'слон',
        user_name: 'Саша_1987',
        name: 'Alex',
        patronymic: 'Александрович',
        surname: '$$$$$$$',
        activityStatus: 'активен',
        ava: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        bonus: 10,
        notifyBonuses: true,
        activeUserAddresses: ['Oliver Hansen', 'Van Henry'],
        userType: 'Водитель',
        passwordFile: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        passportChecked: true,
        selfieFile: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        selfieChecked: true,
        driversLicense: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        driversLicenseChecked: true,
        removeCarTaxi: false,
        totalTrips: 5,
        lastTrip:'2022-05-25',
        created:'2022-10-25',
        userAddresses: [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
        ],
        userTypes: ['Водитель', 'Клиент'],
        taxiCars: ['метла', 'ведро'],
        taxiCar: 'метла',
        statuses: ['активен', 'неактивен'],
        id: '1',
    },
    {
        lastUsed:'2022-05-10',
        registered:'2022-05-10',
        userModel:'слон',
        user_name: 'Саша_1987',
        name: 'Alex',
        patronymic: 'Александрович',
        surname: '$$$$',
        activityStatus: 'активен',
        ava: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        bonus: 10,
        notifyBonuses: true,
        activeUserAddresses: ['Oliver Hansen', 'Van Henry'],
        userType: 'Водитель',
        passwordFile: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        passportChecked: true,
        selfieFile: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        selfieChecked: true,
        driversLicense: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        driversLicenseChecked: true,
        removeCarTaxi: false,
        totalTrips: 5,
        lastTrip:'2022-05-25',
        created:'2022-10-25',
        userAddresses: [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
        ],
        userTypes: ['Водитель', 'Клиент'],
        taxiCars: ['метла', 'ведро'],
        taxiCar: 'метла',
        statuses: ['активен', 'неактивен'],
        id: '2',
    },
]

export const driversReducer = (state = initialState, action) => {
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