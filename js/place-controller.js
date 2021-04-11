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
    document.querySelector('.text-color').value = gUser.textColor
    document.querySelector('input[type=date]').value = gUser.bDay
    document.querySelector('input[type=email]').value = gUser.email
}

const onSubmitLocation = (ev) => {
    ev.preventDefault()
    const latLng = JSON.parse(document.querySelector('.latLng-input').value)
    const locName = document.querySelector('.new-loc-name').value
    setUserLocation(locName, latLng)
    document.querySelector('.cover-all').style.display = 'none'
    document.querySelector('.modal').style.display = 'none'
    document.querySelector('.latLng-input').value = ''
    document.querySelector('.new-loc-name').value = ''
    renderLocations(getUser())
}

const onSubmitPrefs = (event) => {
    event.preventDefault();
    const userColor = document.querySelector('.bgc-select').value
    const userTextColor = document.querySelector('.text-color').value
    const userDate = document.querySelector('input[type=date]').value
    const userEmail = document.querySelector('input[type=email]').value
    setUser(userColor, userTextColor, userDate, userEmail);
    window.location.replace('index.html');
}

const onRemoveLocation = (locName) => {
    removeLocation(locName)
}

const onAddNewPlace = (latLng) => {
    document.querySelector('.latLng-input').value = JSON.stringify(latLng)
    document.querySelector('.cover-all').style.display = 'flex'
    document.querySelector('.modal').style.display = 'flex'
}

const renderLocations = (user) => {
    const strHtml = user.location.map((location) => {
        return `<tr class="location-row"><td  onclick="setLocationCenter({ lat: ${location.lat}, lng: ${location.lng} }, ${gMap})">${location.name}</td><td onclick="onRemoveLocation("${location.name}")">Remove location</td></tr>`
    }).join('\n')
    document.querySelector('.map-container tbody').innerHTML = strHtml
}

const onCloseModal = () => {
    document.querySelector('.cover-all').style.display = 'none'
    document.querySelector('.modal').style.display = 'none'
    document.querySelector('.latLng-input').value = ''
    document.querySelector('.new-loc-name').value = ''
}