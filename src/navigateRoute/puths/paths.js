export const PathBlock = {
    CARS: '/cars/',
    ADDRESSES: '/addresses/',
    USERS: '/users/',
    RENTS: '/rents/',
    RIDES: '/rides/',
    TARIFFS: '/rates/',
    AUTH_APP: '/auth_app/',
    INFO: '/info/',
    AUTH: '/auth/',
    PAYMENTS: '/payment/',
    BONUSES: '/points/',
}

export const PathSections = {
    CARS: PathBlock.CARS + 'car/',
    INFO: PathBlock.CARS + 'carinfo/',

    CODES: PathBlock.AUTH_APP + 'confirmcode/',

    ADDRESSES: PathBlock.ADDRESSES + 'address/',
    LOCATIONS_DRIVERS: PathBlock.ADDRESSES + 'orderlocation/',
    LOCATIONS_USERS: PathBlock.ADDRESSES + 'userlocation/',

    LOG_BONUSES: PathBlock.BONUSES + 'userpointhistory/',
    PROMO_CODES: PathBlock.BONUSES + 'promocode/',

    FAQ: PathBlock.INFO + 'faq/',

    CARD_USERS: PathBlock.PAYMENTS + 'card/',

    DRIVERS: PathBlock.USERS + 'driverproxy/',
    CLIENTS: PathBlock.USERS + 'customerproxy/',
    USERS: PathBlock.USERS + 'user/',

    GROUPS: PathBlock.AUTH + 'group/',

    CARS_FOR_RENT: PathBlock.RENTS + 'carforrent/',
    APPLICATIONS_FOR_RENT: PathBlock.RENTS + 'rentapplication/',
    RENTAL_PRICES: PathBlock.RENTS + 'carforrentprice/',

    TAXI_CARS: PathBlock.RIDES + 'carforride/',
    TAXI_CANCELLATIONS: PathBlock.RIDES + 'cancelorder/',
    TRAVEL: PathBlock.RIDES + 'order/',

    CITIES: PathBlock.TARIFFS + 'city/',
    TARIFF_OPTIONS: PathBlock.TARIFFS + 'tariffoption/',
    TARIFF_ZONE: PathBlock.TARIFFS + 'tariffzone/',
    TARIFF: PathBlock.TARIFFS + 'tariff/',
}
