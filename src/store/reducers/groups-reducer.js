import instance from '../../api/login-api';

const initialState = [
    {
        group:'admin',
        name: 'admin',
        rights: ['ковырять в носу', 'танцевать лёжа', 'гулять по воде'],
        activeRights: ['гулять по воде', 'танцевать лёжа'],
        id: '1',
    },
    {
        group:'manager',
        name: 'admin',
        rights: ['ковырять в носу', 'танцевать лёжа', 'гулять по воде'],
        activeRights: ['гулять по воде', 'танцевать лёжа'],
        id: '2',
    },
]

export const groupsReducer = (state = initialState, action) => {
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