const loginUser = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        'username': username,
        'password': password
    }

    fetch('http://localhost:8000/api/login_check', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(res => {
        return res.json()
    }).then(res => {
        localStorage.setItem('token', res['token'])
        getPlayers()

    })
}

const getPlayers = () => {


    fetch('http://localhost:8000/api/players/18', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer '+localStorage.getItem('token')
        })
    }).then(res => {return res.json()})
        .then(res => {console.log(res)})

}


const button = document.querySelector('button');
button.addEventListener('click', loginUser);