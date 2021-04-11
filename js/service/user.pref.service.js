'use strict'

const USER_KEY = 'userDB'

let gUser;
createUser()

function  createUser() {
    let user = loadFromStorage(USER_KEY)
    if(!user) {
        user = {
            bgc: '#ffffff',
            textColor: '#000000',
            bDay: '',
            email: '',
            range: 18,
            location: []
        }
    }
    gUser = user
    saveToStorage(USER_KEY, gUser)
}

const getUser = () => gUser

const setUser = (userBgc, textColor, bday, email) => {
    gUser.bgc = userBgc
    gUser.bDay = bday
    gUser.textColor = textColor
    gUser.email = email
    saveToStorage(USER_KEY, gUser)
}

const setUserLocation = (name, latLng) => {
    const newLocation = { 
        lat:latLng.lat,
        lng:latLng.lng,
        name
    }
    gUser.location.push(newLocation)
    saveToStorage(USER_KEY, gUser)
}

const removeLocation = (lockName) => {
    const user = getUser();
    const locationIdx = user.location.findIndex(loc => loc.name === locName)
    console.log('locationIdx', locationIdx)
}