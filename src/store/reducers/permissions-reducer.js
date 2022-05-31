import instance from '../../api/login-api';

const initialState ={
    user: {
        id: 1233,
        is_superuser: false,
        username: "SDali",
        email: "sdali@somwehere.com",
        is_staff: true,
        is_active: true,
        groups: [
            {
                id: 3,
                name: "Classifiers",
            },
            {
                id: 4,
                name: "Testers",
            },
        ],
        user_permissions: [
            "ml.can_create_experiments",
            "ml.can_run_experiments",
            "ml.can_delete_experiments",
            "core.can_run_classifiers",
            "core.can_create_classifiers",
        ],
    },
}
export const permissionsReducer = (state = initialState, action) => {
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