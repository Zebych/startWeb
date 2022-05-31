import instance from '../../api/login-api';

const initialState = [
    {
        description: '$$описание хардкор',
        power: '$мощьность хардкор',
        engine: '$двигатель хардкор',
        acceleration: '$разгон хардкор',
        maxSpeed: '$максимальная скорость хардкор',
        driveUnit: '$привод хардкор',
        transmission: '$коробка передачь хардкор',
        id: '1',
    },
    {
        description: 'описание хардкор',
        power: 'мощьность хардкор',
        engine: 'двигатель хардкор',
        acceleration: 'разгон хардкор',
        maxSpeed: 'максимальная скорость хардкор',
        driveUnit: 'привод хардкор',
        transmission: 'коробка передачь хардкор',
        id: '2',
    },
]

export const infoCarsReducer = (state = initialState, action) => {
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