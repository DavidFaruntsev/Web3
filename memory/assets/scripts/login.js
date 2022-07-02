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
        if (res.status === 401){return alert('Invalid username/password')}
        return res.json()
    }).then(res => {
        localStorage.setItem('token', res['token'])
        location.href = 'index.html'
    })
}

const button = document.querySelector('button');
button.addEventListener('click', loginUser);