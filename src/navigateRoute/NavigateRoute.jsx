import React, {memo} from 'react';
import SidebarMenu from '../components/sidebarMenu/SidebarMenu.jsx';
import {Login} from '../components/login/Login.jsx';
import {Outlet, Route, Routes} from 'react-router-dom';
import {PathSections} from './puths/paths';
import Cars from '../components/sectionsComponents/cars/cars/Cars.jsx';
import Info from '../components/sectionsComponents/cars/carsInformation/Info.jsx';
import EditCar from '../components/sectionsComponents/cars/cars/EditCar.jsx';
import EditInfo from '../components/sectionsComponents/cars/carsInformation/EditInfo.jsx';
import Codes from '../components/sectionsComponents/authorization/Codes.jsx';
import EditCode from '../components/sectionsComponents/authorization/EditCode.jsx';
import Addresses
    from '../components/sectionsComponents/addressesAndLocations/addresses/Addresses.jsx';
import EditAddress
    from '../components/sectionsComponents/addressesAndLocations/addresses/EditAddress.jsx';
import Drivers
    from '../components/sectionsComponents/users/drivers/Drivers.jsx';
import EditDriver
    from '../components/sectionsComponents/users/drivers/EditDriver.jsx';
import Clients from '../components/sectionsComponents/users/clients/Clients.jsx';
import Users from '../components/sectionsComponents/users/users/Users.jsx';
import EditUser from '../components/sectionsComponents/users/users/editUser/EditUser.jsx';
import Groups from '../components/sectionsComponents/usersAndGroups/Groups.jsx';
import EditGroup from '../components/sectionsComponents/usersAndGroups/EditGroup.jsx';
import RentalCars from '../components/sectionsComponents/rental/cars/carsRental.jsx';
import EditRentalCar
    from '../components/sectionsComponents/rental/cars/EditRentalCar.jsx';
import ApplicationRents
    from '../components/sectionsComponents/rental/applicationsForRent/ApplicationRents.jsx';
import EditApplicationRent
    from '../components/sectionsComponents/rental/applicationsForRent/EditApplicationRent.jsx';
import PriceRental
    from '../components/sectionsComponents/rental/priceRental/PriceRental.jsx';
import EditPriceRental
    from '../components/sectionsComponents/rental/priceRental/EditPriceRental.jsx';
import EditCarTaxi from '../components/sectionsComponents/taxi/editCarTaxi/EditCarTaxi.jsx';
import Cities from '../components/sectionsComponents/tariffs/cities/Cities.jsx';
import EditCiti from '../components/sectionsComponents/tariffs/cities/EditCiti.jsx';
import TariffZones
    from '../components/sectionsComponents/tariffs/tariffZones/TariffZones.jsx';
import EditTariffZone
    from '../components/sectionsComponents/tariffs/tariffZones/EditTariffZone.jsx';
import Rates from '../components/sectionsComponents/tariffs/rates/Rates.jsx';
import EditRates from '../components/sectionsComponents/tariffs/rates/EditRates.jsx';
import TripCancellations from '../components/sectionsComponents/taxi/TripCancellations.jsx';
import Travels from '../components/sectionsComponents/taxi/Travels.jsx';
import GeneralInfo from '../components/sectionsComponents/FAQ/GeneralInfo.jsx';
import EditGeneralInfo from '../components/sectionsComponents/FAQ/EditGeneralInfo.jsx';
import Payments from '../components/sectionsComponents/payments/Payments.jsx';
import EditPayments from '../components/sectionsComponents/payments/EditPayment.jsx';
import LogsBonuses
    from '../components/sectionsComponents/bonuses/logsBonuses/LogsBonuses.jsx';
import PromoCodes from '../components/sectionsComponents/bonuses/promoCodes/PromoCodes.jsx';
import EditPromoCode
    from '../components/sectionsComponents/bonuses/promoCodes/EditPromoCode.jsx';
import UserLocations
    from '../components/sectionsComponents/addressesAndLocations/userLocations/UserLocations.jsx';
import DriverLocations
    from '../components/sectionsComponents/addressesAndLocations/driverLocations/DriverLocations.jsx';
import TaxiCars from '../components/sectionsComponents/taxi/carsTaxi.jsx';
import EditClient from '../components/sectionsComponents/users/clients/EditClient.jsx';
import TariffOptions
    from '../components/sectionsComponents/tariffs/tariffOptions/TariffOptions.jsx';
import EditTariffOption
    from '../components/sectionsComponents/tariffs/tariffOptions/EditTariffOption.jsx';

export const NavigateRoute = memo(
    () => {
        return (
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                {/*<Route path={'/'} element={<EditPromoCode/>}/>*/}
                <Route path={'/'} element={(
                    <SidebarMenu component={<Outlet/>}/>
                )}>
                    <Route path={PathSections.CARS} element={<Cars/>}/>
                    <Route path={`${PathSections.CARS}:add`} element={<EditCar/>}/>
                    <Route path={`${PathSections.CARS}:id/change`} element={<EditCar/>}/>


                    <Route path={PathSections.INFO} element={<Info/>}/>
                    <Route path={`${PathSections.INFO}:add`} element={<EditInfo/>}/>
                    <Route path={`${PathSections.INFO}:id/change`} element={<EditInfo/>}/>

                    <Route path={PathSections.CODES} element={<Codes/>}/>
                    <Route path={`${PathSections.CODES}:id/change`}
                           element={<EditCode/>}/>

                    <Route path={PathSections.ADDRESSES} element={<Addresses/>}/>
                    <Route path={`${PathSections.ADDRESSES}:id/change`}
                           element={<EditAddress/>}/>

                    <Route path={PathSections.LOCATIONS_USERS} element={<UserLocations/>}/>
                    <Route path={PathSections.LOCATIONS_DRIVERS} element={<DriverLocations/>}/>

                    <Route path={PathSections.LOG_BONUSES} element={<LogsBonuses/>}/>

                    <Route path={PathSections.PROMO_CODES} element={<PromoCodes/>}/>
                    <Route path={`${PathSections.PROMO_CODES}:id/change`}
                           element={<EditPromoCode/>}/>

                    <Route path={PathSections.FAQ} element={<GeneralInfo/>}/>
                    <Route path={`${PathSections.FAQ}:id/change`}
                           element={<EditGeneralInfo/>}/>

                    <Route path={PathSections.CARD_USERS} element={<Payments/>}/>
                    <Route path={`${PathSections.CARD_USERS}:id/change`}
                           element={<EditPayments/>}/>

                    <Route path={PathSections.DRIVERS} element={<Drivers/>}/>
                    <Route path={`${PathSections.DRIVERS}:id/change`}
                           element={<EditDriver/>}/>

                    <Route path={PathSections.CLIENTS} element={<Clients/>}/>
                    <Route path={`${PathSections.CLIENTS}:id/change`}
                           element={<EditClient/>}/>

                    <Route path={PathSections.USERS} element={<Users/>}/>
                    <Route path={`${PathSections.USERS}:id/change`}
                           element={<EditUser/>}/>

                    <Route path={PathSections.GROUPS} element={<Groups/>}/>
                    <Route path={`${PathSections.GROUPS}:id/change`}
                           element={<EditGroup/>}/>

                    <Route path={PathSections.CARS_FOR_RENT} element={<RentalCars/>}/>
                    <Route path={`${PathSections.CARS_FOR_RENT}:id/change`}
                           element={<EditRentalCar/>}/>

                    <Route path={PathSections.APPLICATIONS_FOR_RENT}
                           element={<ApplicationRents/>}/>
                    <Route path={`${PathSections.APPLICATIONS_FOR_RENT}:id/change`}
                           element={<EditApplicationRent/>}/>

                    <Route path={PathSections.RENTAL_PRICES} element={<PriceRental/>}/>
                    <Route path={`${PathSections.RENTAL_PRICES}:id/change`}
                           element={<EditPriceRental/>}/>

                    <Route path={PathSections.TAXI_CARS} element={<TaxiCars/>}/>
                    <Route path={`${PathSections.TAXI_CARS}:id/change`}
                           element={<EditCarTaxi/>}/>

                    <Route path={PathSections.TAXI_CANCELLATIONS} element={<TripCancellations/>}/>

                    <Route path={PathSections.TRAVEL} element={<Travels/>}/>

                    <Route path={PathSections.CITIES} element={<Cities/>}/>
                    <Route path={`${PathSections.CITIES}:id/change`}
                           element={<EditCiti/>}/>

                    <Route path={PathSections.TARIFF_OPTIONS} element={<TariffOptions/>}/>
                    <Route path={`${PathSections.TARIFF_OPTIONS}:id/change`}
                           element={<EditTariffOption/>}/>

                    <Route path={PathSections.TARIFF_ZONE} element={<TariffZones/>}/>
                    <Route path={`${PathSections.TARIFF_ZONE}:id/change`}
                           element={<EditTariffZone/>}/>

                    <Route path={PathSections.TARIFF} element={<Rates/>}/>
                    <Route path={`${PathSections.TARIFF}:id/change`}
                           element={<EditRates/>}/>
                </Route>
                <Route path={'/*'} element={<h1>404: PAGE NOT FOUND</h1>}/>
            </Routes>
        )
    }
);
