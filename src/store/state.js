import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {carsReducer} from './reducers/cars-reducer';
import {infoCarsReducer} from './reducers/infoCars-reducer';
import {codesReducer} from './reducers/codes-reducer';
import {addressesReducer} from './reducers/adresses-reducer';
import {promoCodesReducer} from './reducers/promoCodes-reducer';
import {generalInfoReducer} from './reducers/generalInfo-reducer';
import {driversReducer} from './reducers/drivers-reducer';
import {groupsReducer} from './reducers/groups-reducer';
import {carsRentalReducer} from './reducers/carsRental-reducer';
import {applicationRentsReducer} from './reducers/applicationRents-reducer';
import {priceRentalsReducer} from './reducers/priceRentals-reducer';
import {carsTaxiReducer} from './reducers/carsTaxi-reducer';
import {clientsReducer} from './reducers/clients-reduсer';
import {citiesReducer} from './reducers/cities-reducer';
import {ratesReducer} from './reducers/rates-reducer';
import {tariffZonesReducer} from './reducers/tariffZones-reducer';
import {tariffOptionsReducer} from './reducers/tariffOptions-reducer';
import {authReducer} from './reducers/auth-reducer';
import {permissionsReducer} from './reducers/permissions-reducer';


const rootReducer = combineReducers({
    permissions:permissionsReducer,
    auth:authReducer,
    cars: carsReducer,
    infoCars: infoCarsReducer,
    codes: codesReducer,
    addresses:addressesReducer,
    promoCodes:promoCodesReducer,
    generalInfo:generalInfoReducer,
    drivers:driversReducer,
    clients:clientsReducer,
    groups:groupsReducer,
    carsRental:carsRentalReducer,
    applicationRents:applicationRentsReducer,
    priceRentals:priceRentalsReducer,
    carsTaxi:carsTaxiReducer,
    cities:citiesReducer,
    rates:ratesReducer,
    tariffZones:tariffZonesReducer,
    tariffOptions:tariffOptionsReducer,
})
// непосредственно создаём state
export const state = createStore(rootReducer, applyMiddleware(thunkMiddleware));

