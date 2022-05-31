import instance from '../../api/login-api';

const initialState = [
    {
        title: 'бонусные рубли',
        description: '20 бонусных рублей',
        bonusCode: 'ываыв',
        statuses: ['активен', 'неактивен'],
        activeStatus: 'активен',
        types: ['одноразовый', 'многоразовый'],
        activeType: 'одноразовый',
        bonus: 10,
        initialAmount: 200,
        left: 100,
        startAction: '2022-05-25',
        endAction: '2022-05-30',
        created: '2022-05-25',
        update: '2022-05-25',
        id: '1',
    },
    {
        title: '$$бонусные рубли',
        description: '$$20 бонусных рублей',
        bonusCode: '$$ываыв',
        statuses: ['$$активен', 'неактивен'],
        activeStatus: '$$активен',
        types: ['одноразовый', 'многоразовый'],
        activeType: 'одноразовый',
        bonus: 10,
        initialAmount: 200,
        left: 100,
        startAction: '2022-05-25',
        endAction: '2022-05-30',
        created: '2022-05-25',
        update: '2022-05-25',
        id: '2',
    },
]

export const promoCodesReducer = (state = initialState, action) => {
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