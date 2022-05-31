import {PathSections} from '../puths/paths';

const {SectionsName} = require('./blockAndSectionsNaming');

export const handleActiveSection = (section) => {
    switch (section) {
        case SectionsName.CARS:
            return PathSections.CARS
        case SectionsName.INFO:
            return PathSections.INFO
        case SectionsName.CODES:
            return PathSections.CODES
        case SectionsName.ADDRESSES:
            return PathSections.ADDRESSES
        case SectionsName.LOCATIONS_USERS:
            return PathSections.LOCATIONS_USERS
        case SectionsName.LOCATIONS_DRIVERS:
            return PathSections.LOCATIONS_DRIVERS
        case SectionsName.LOG_BONUSES:
            return PathSections.LOG_BONUSES
        case SectionsName.PROMO_CODES:
            return PathSections.PROMO_CODES
        case SectionsName.FAQ:
            return PathSections.FAQ
        case SectionsName.DRIVERS:
            return PathSections.DRIVERS
        case SectionsName.CLIENTS:
            return PathSections.CLIENTS
        case SectionsName.USERS:
            return PathSections.USERS
        case SectionsName.GROUPS:
            return PathSections.GROUPS
        case SectionsName.CARS_FOR_RENT:
            return PathSections.CARS_FOR_RENT
        case SectionsName.APPLICATIONS_FOR_RENT:
            return PathSections.APPLICATIONS_FOR_RENT
        case SectionsName.RENTAL_PRICES:
            return PathSections.RENTAL_PRICES
        case SectionsName.TAXI_CARS:
            return PathSections.TAXI_CARS
        case SectionsName.TAXI_CANCELLATIONS:
            return PathSections.TAXI_CANCELLATIONS
        case SectionsName.TRAVEL:
            return PathSections.TRAVEL
        case SectionsName.CITIES:
            return PathSections.CITIES
        case SectionsName.TARIFF_OPTIONS:
            return PathSections.TARIFF_OPTIONS
        case SectionsName.TARIFF_ZONE:
            return PathSections.TARIFF_ZONE
        case SectionsName.TARIFF:
            return PathSections.TARIFF
        case SectionsName.CARD_USERS:
            return PathSections.CARD_USERS
        default:
            return null
    }
}
