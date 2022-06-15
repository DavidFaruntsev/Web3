let preferences = JSON.parse(window.localStorage.getItem('preferences'));

function changePreferences(){
    const preferences = {
        closedColor: document.getElementById('closed-color').value,
        preferredTheme: document.getElementById('cardTheme').value
    }

    window.localStorage.setItem("preferences", JSON.stringify(preferences));
    window.location.href = 'index.html';

}

window.addEventListener('load', ()=>{
    const selector = document.getElementById('closed-color');
    selector.value = preferences['closedColor'];
})