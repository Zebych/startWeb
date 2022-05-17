import React from 'react';
// import app from './app.less'
import {AppBar, Button, IconButton, Menu, Toolbar, Typography} from '@material-ui/core';
import SidebarMenu from './sidebarMenu/SidebarMenu.jsx';

const App = () => {
    return (
        <div className="app">
            <SidebarMenu/>
        </div>
    );
};

export default App;