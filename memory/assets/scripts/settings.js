const userID = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['sub'];
const colorPickerClosed = document.getElementById('closed-color');
const preferredApi = document.getElementById('cardTheme');
const email = document.getElementById('email')
const PreferencesButton = document.getElementById('updatePreferences');
const EmailButton = document.getElementById('updateEmail');

const getPreferences = () => {

    fetch(`http://localhost:8000/api/player/${userID}/preferences`, {
        method: "GET",
        headers: new Headers(({
            'Authorization': 'Bearer '+localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }))
    }).then(r  => {
                
        if (r.status === 401){alert('Your session has expired.')
            location.href="login.html"}
                return r.json()
            })
        .then(r => {
            colorPickerClosed.value = r['color_closed']
            preferredApi.value = r['preferred_api']
        })
}

const updatePreferences = () => {

    const data = {
        'id': userID,
        'api': preferredApi.value,
        'color_closed': colorPickerClosed.value,
        'color_found': ''
    }

    fetch(`http://localhost:8000/api/player/${userID}/preferences`, {
        method: "POST",
        headers: new Headers({
            'Authorization': 'Bearer '+localStorage.getItem('token'),
        }),
        body: JSON.stringify(data)
    }).then(r => {
                
        if (r.status === 401){
            alert('Your session has expired.')
            location.href="login.html"}
        return r.text()
    }).then(r => {location.href = 'index.html'})

}

const updateEmail = () => {

    const data = {email: email.value}

    fetch(`http://localhost:8000/api/player/${userID}/email`, {
        method: "PUT",
        headers: new Headers({
            'Authorization': 'Bearer '+localStorage.getItem('token'),
        }),
        body: JSON.stringify(data)
    }).then(r => {
        if (r.status === 401){
            alert('Your session has expired.')
            location.href = 'login.html'
        }
        return r.text()
    }).then(r => {location.href = 'index.html'})
}

window.addEventListener('load', getPreferences);
PreferencesButton.addEventListener('click', updatePreferences);
EmailButton.addEventListener('click', updateEmail)


