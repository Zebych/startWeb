import instance from '../../api/login-api';

const initialState = [
    {
        firstName: 'МопедСова',
        status: 'активен',
        ava: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        statuses: ['активен', 'неактивен'],
        activeStatus: 'активен',
        brandCar: 'мопед',
        modelCar: 'сова',
        description: 'мопед сова',
        carNumber: '123',
        specifications: 'техническая характеристика',
        id: '1',
    },
    {
        firstName: 'Мопед$$$Сова',
        status: 'активен',
        ava: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        statuses: ['активен', 'неактивен'],
        activeStatus: 'активен',
        brandCar: 'мопед$$$',
        modelCar: 'сова',
        description: 'мопед сова',
        carNumber: '123',
        specifications: 'техническая характеристика',
        id: '2',
    },
]

export const carsReducer = (state = initialState, action) => {
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