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
            location: {}
        }
    }
    gUser = user
    saveToStorage(USER_KEY, gUser)
}

const getUser = () => gUser

const setUser = (userBgc, textColor, bday) => {
    gUser.bgc = userBgc
    gUser.bDay = bday
    gUser.textColor = textColor
    saveToStorage(USER_KEY, gUser)
}