import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListValue from './sectionsMenu/listValue.jsx';
import {
    addresses,
    authorization,
    Blocks, bonuses,
    cars,
    faqs,
    groups, payments,
    rents,
    tariffs,
    taxi,
    users
} from '../../navigateRoute/namingSectionsAndBlocks/blockAndSectionsNaming';
import {useState} from 'react';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {logoutTC} from '../../store/reducers/auth-reducer';
import ProtectedContent from '../../permissions/ProtectedContent.jsx';
import {selectPerms} from '../../store/selectors/permissions/selectPerms';

const drawerWidth = 340;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        // width: `calc(${theme.spacing(8)} + 1px)`,
        width: '0px',
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SidebarMenu({component}) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const perms = useSelector(selectPerms)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onExitClick = () => {
        dispatch(logoutTC())
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex'}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            AllianceRental
                        </Typography>
                    </div>
                    <Button variant="contained" onClick={onExitClick}
                            style={{backgroundColor: 'red'}}>Выйти</Button>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> :
                            <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>

                <ProtectedContent
                                  perms={["ml.can_create_experiments"]}>
                    <ListValue block={Blocks.CARS} sections={cars}/>
                    <Divider/>
                </ProtectedContent>
                <ListValue block={Blocks.AUTHORIZATION} sections={authorization}/>
                <Divider/>
                <ListValue block={Blocks.ADDRESSES_AND_LOCATIONS} sections={addresses}/>
                <Divider/>
                <ListValue block={Blocks.BONUSES} sections={bonuses}/>
                <Divider/>
                <ListValue block={Blocks.GENERAL_INFORMATION} sections={faqs}/>
                <Divider/>
                <ListValue block={Blocks.PAYMENTS} sections={payments}/>
                <Divider/>
                <ListValue block={Blocks.USERS} sections={users}/>
                <Divider/>
                <ListValue block={Blocks.USERS_AND_GROUPS} sections={groups}/>
                <Divider/>
                <ListValue block={Blocks.CARS_FOR_RENT} sections={rents}/>
                <Divider/>
                <ListValue block={Blocks.TAXI} sections={taxi}/>
                <Divider/>
                <ListValue block={Blocks.TARIFFS} sections={tariffs}/>
                <Divider/>


                {/*            <List>
                       {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                                <ListItemButton
                                                    sx={{
                                                            minHeight: 48,
                                                            justifyContent: open ? 'initial' : 'center',
                                                            px: 2.5,
                                                    }}
                                                >
                                                        <ListItemIcon
                                                            sx={{
                                                                    minWidth: 0,
                                                                    mr: open ? 3 : 'auto',
                                                                    justifyContent: 'center',
                                                            }}
                                                        >
                                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                                        </ListItemIcon>
                                                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                                </ListItemButton>
                                        </ListItem>
                                    ))}
                </List>*/}
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3,}}>
                <DrawerHeader/>
                {component}
            </Box>
        </Box>
    );
}
