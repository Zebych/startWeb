import instance from '../../api/login-api';

const initialState = [
    {
        question:'Вопрос хардкод',
        answer:'Ответ хард',
        statuses:['активен','неактивен'],
        activeStatus:'активен',
        created:'2022-10-02',
        updated:'2022-10-02',
        id: '1',
    },
    {
        question:'$$$Вопрос хардкод',
        answer:'$$$Ответ хард',
        statuses:['активен','неактивен'],
        activeStatus:'активен',
        created:'2022-10-02',
        updated:'2022-10-02',
        id: '2',
    },
]

export const generalInfoReducer = (state = initialState, action) => {
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