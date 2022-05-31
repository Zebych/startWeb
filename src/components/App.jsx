import React, {useEffect} from 'react';
// import app from './app.less'
import {useNavigate} from 'react-router-dom';
import {NavigateRoute} from '../navigateRoute/NavigateRoute.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {checkAuth} from '../store/reducers/auth-reducer';

const App = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isLoggedIn)

    useEffect(() => {
        const isToken = localStorage.getItem('token')
        if (isToken) {
            dispatch(checkAuth())
        }
        if (!isAuth) navigate('/login')
    }, [])

    return (
        <NavigateRoute/>
    );
};

export default App;