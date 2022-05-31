export const SectionsName = {
    CARS: 'автомобили',
    INFO: 'информация',
    CODES: 'коды подтверждения',
    ADDRESSES: 'адреса',
    LOCATIONS_DRIVERS: 'места водителей',
    LOCATIONS_USERS: 'места пользователей',
    FAQ: 'FAQ',
    DRIVERS: 'водители',
    CLIENTS: 'клиенты',
    USERS: 'пользователи',
    GROUPS: 'группы',
    CARS_FOR_RENT: 'автомобили для аренды',
    APPLICATIONS_FOR_RENT: 'заявки для аренды',
    RENTAL_PRICES: 'стоимости аренд',
    TAXI_CARS: 'автомобили для такси',
    TAXI_CANCELLATIONS: 'отмены поездок',
    TRAVEL: 'поездки',
    CITIES: 'города',
    TARIFF_OPTIONS: 'опции тарифов',
    TARIFF_ZONE: 'тарифные зоны',
    TARIFF: 'тарифы',
    CARD_USERS: 'карты пользователей',
    LOG_BONUSES: 'логи бонусов',
    PROMO_CODES: 'промокоды',
}

export const Blocks = {
    CARS: 'Автомобили',
    AUTHORIZATION: 'Авторизация',
    ADDRESSES_AND_LOCATIONS: 'Адреса и местоположения',
    GENERAL_INFORMATION: 'Общая информация',
    USERS: 'Пользователи',
    USERS_AND_GROUPS: 'Пользователи и группы',
    CARS_FOR_RENT: 'Прокат автомобилей',
    TAXI: 'Такси',
    TARIFFS: 'Тарифы',
    PAYMENTS: 'Платежи',
    BONUSES: 'Бонусы',
}

export const cars = [SectionsName.CARS, SectionsName.INFO]
export const authorization = [SectionsName.CODES]
export const addresses = [SectionsName.ADDRESSES, SectionsName.LOCATIONS_DRIVERS,SectionsName.LOCATIONS_USERS]
export const bonuses = [SectionsName.LOG_BONUSES, SectionsName.PROMO_CODES]
export const faqs = [SectionsName.FAQ]
export const payments = [SectionsName.CARD_USERS]
export const groups = [SectionsName.GROUPS]
export const users = [SectionsName.DRIVERS, SectionsName.CLIENTS, SectionsName.USERS]
export const rents = [SectionsName.CARS_FOR_RENT, SectionsName.APPLICATIONS_FOR_RENT, SectionsName.RENTAL_PRICES]
export const taxi = [SectionsName.TAXI_CARS, SectionsName.TAXI_CANCELLATIONS, SectionsName.TRAVEL]
export const tariffs = [SectionsName.CITIES, SectionsName.TARIFF_OPTIONS, SectionsName.TARIFF_ZONE, SectionsName.TARIFF]
