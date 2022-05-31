import {API_URL, authAPI} from '../../api/login-api';
import axios from 'axios';

const initialState = {
    isLoggedIn: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value) =>
    ({type: 'login/SET-IS-LOGGED-IN', value})// as const

// thunks
export const loginTC = (data) => async (dispatch) => {
    try {
        const res = await authAPI.login(data)
        localStorage.setItem('token', res.data.accessToken)
        dispatch(setIsLoggedInAC(res))
    } catch (err) {
        console.log(err)
    }
}

export const logoutTC = () => async (dispatch) => {
    try {
        await authAPI.logout()
        localStorage.removeItem('token')
        dispatch(setIsLoggedInAC(false))
    } catch (err) {
        console.log(err)
    }
}

export const checkAuth = (data) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/refresh`,{withCredentials: true})
        localStorage.setItem('token', res.data.accessToken)
        dispatch(setIsLoggedInAC(res))
    } catch (err) {
        console.log(err)
    }
}