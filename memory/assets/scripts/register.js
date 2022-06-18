const registerUser = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const data = {
        'username': username,
        'email': email,
        'password': password
    }

    fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => {
            console.log('User successfully created')
            location.href = "login.html"
    })
}

const button = document.querySelector("button");

button.addEventListener('click', registerUser);


