'use strict'

const init = () => {
    const user = getUser();
    setUserPrefsColors(user)
}

const setUserPrefsColors = (user) => {
    document.querySelector('body').style.backgroundColor = user.bgc;
    document.querySelector('body').style.color = user.textColor;
}

const loadUserVal = () => {
    document.querySelector(['[type = "color"]']).value = gUser.bgc
}

const onSubmitPrefs = (event) => {
    event.preventDefault();
    const userColor = document.querySelector('.bgc-select').value
    const userTextColor = document.querySelector('.text-color').value
    const userDate = document.querySelector('input[type=date]').value
    setUser(userColor, userTextColor, userDate);
    window.location.replace('index.html');
}

const renderLocations = (user) => {
    const strHtml = user.location.map((location) => {
        return `<tr><td class="location-cell" onclick="setLocationCenter({ lat: ${location.lat}, lng: ${location.lng} }, ${gMap})">${location.name}</td></tr>`
    }).join('\n')
    document.querySelector('.map-container tbody').innerHTML = strHtml
}