const initialState=[
    {
        userModel:'+7 999 999 99 99',
        lastUsed:'2022-12-03',
        registered:'2022-12-03',
        user_name:'$$$Саша_1987',
        name:'Alex',
        patronymic:'Александрович',
        surname:'$$$',
        activityStatus:'активен',
        ava:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        bonus:10,
        notifyBonuses:true,
        activeUserAddresses:['Oliver Hansen', 'Van Henry'],
        userType:'Водитель',
        passwordFile:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        passportChecked:true,
        selfieFile:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        selfieChecked:true,
        driversLicense:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        driversLicenseChecked:true,
        taxiCar:'метла',
        totalTrips:5,
        userAddresses: [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
        ],
        userTypes : ['Водитель', 'Клиент'],
        taxiCars : ['метла', 'ведро'],
        statuses : ['активен', 'неактивен'],
        id:'1',
    },
    {
        userModel:'+$$$7 999 999 99 99',
        lastUsed:'2022-12-03',
        registered:'2022-12-03',
        user_name:'987',
        name:'Alex',
        patronymic:'Александрович',
        surname:'354',
        activityStatus:'активен',
        ava:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        bonus:10,
        notifyBonuses:true,
        activeUserAddresses:['Oliver Hansen', 'Van Henry'],
        userType:'Водитель',
        passwordFile:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        passportChecked:true,
        selfieFile:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        selfieChecked:true,
        driversLicense:'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
        driversLicenseChecked:true,
        taxiCar:'метла',
        totalTrips:5,
        userAddresses: [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
        ],
        userTypes : ['Водитель', 'Клиент'],
        taxiCars : ['метла', 'ведро'],
        statuses : ['активен', 'неактивен'],
        id:'2',
    }
]

export const clientsReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SAVE_EDIT_DATA_DRIVER':

        default:
            return state
    }
}

//AC
export const removeTaskAC = (driverData) => ({type: 'SAVE_EDIT_DATA_DRIVER-TASK', driverData})

//TC
/*
export const handleSaveClickTC = (data) => (dispatch) => {
    todolistsAPI.getTasks(data)
        .then((res) => {
            const driverData = res.data
            const action = removeTaskAC(driverData)
            dispatch(action)
        })
}*/
