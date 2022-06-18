const section = document.querySelector('section');
const userID = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))['sub'];


const getPreferences = () => {

    return fetch(`http://localhost:8000/api/player/${userID}/preferences`, {
        method: "GET",
        headers: new Headers(({
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }))
    }).then(r => {
                
    if (r.status === 401){
        alert('Your session has expired.')
        location.href="login.html"
    }
    return r.json()
    })

}

let found = 0;

window.addEventListener('load', () =>{
    startGame();
})
const dataFormat = () => [
    {imgSrc: "", id: 1, name:'one'},
    {imgSrc: "", id: 1, name:'one'},
    {imgSrc: "", id: 2, name:'two'},
    {imgSrc: "", id: 2, name:'two'},
    {imgSrc: "", id: 3, name:'three'},
    {imgSrc: "", id: 3, name:'three'},
    {imgSrc: "", id: 4, name:'four'},
    {imgSrc: "", id: 4, name:'four'},
    {imgSrc: "", id: 5, name:'five'},
    {imgSrc: "", id: 5, name:'five'},
    {imgSrc: "", id: 6, name:'six'},
    {imgSrc: "", id: 6, name:'six'},
    {imgSrc: "", id: 7, name:'seven'},
    {imgSrc: "", id: 7, name:'seven'},
    {imgSrc: "", id: 8, name:'eight'},
    {imgSrc: "", id: 8, name:'eight'},
    {imgSrc: "", id: 9, name:'nine'},
    {imgSrc: "", id: 9, name:'nine'},
    {imgSrc: "", id: 10, name:'ten'},
    {imgSrc: "", id: 10, name:'ten'},
    {imgSrc: "", id: 11, name:'eleven'},
    {imgSrc: "", id: 11, name:'eleven'},
    {imgSrc: "", id: 12, name:'twelve'},
    {imgSrc: "", id: 12, name:'twelve'},
    {imgSrc: "", id: 13, name:'thirteen'},
    {imgSrc: "", id: 13, name:'thirteen'},
    {imgSrc: "", id: 14, name:'fourteen'},
    {imgSrc: "", id: 14, name:'fourteen'},
    {imgSrc: "", id: 15, name:'fifteen'},
    {imgSrc: "", id: 15, name:'fifteen'},
    {imgSrc: "", id: 16, name:'sixteen'},
    {imgSrc: "", id: 16, name:'sixteen'},
    {imgSrc: "", id: 17, name:'seventeen'},
    {imgSrc: "", id: 17, name:'seventeen'},
    {imgSrc: "", id: 18, name:'eighteen'},
    {imgSrc: "", id: 18, name:'eighteen'},

]

const randomTheme = async _ =>{
    const data = dataFormat();
    const imgUrl = "https://picsum.photos/200";
    const imgArr = [];

    for (let i=0; i<19; i++){
        const res = await fetch(imgUrl);
        const pic = await res.blob();

        imgArr[i] = URL.createObjectURL(pic);
    }

    data.forEach(item =>{
        item.imgSrc = imgArr[item.id];
    })


    return data;
}

const dogTheme = async _ =>{
    const data = dataFormat();
    const imgUrl = "https://dog.ceo/api/breeds/image/random";
    const imgArr = [];

    for (let i=0; i<19; i++){
        const res = await fetch(imgUrl);
        const pic = await res.json();

        imgArr[i] = pic['message'];
    }

    data.forEach(item => {
        item.imgSrc = imgArr[item.id];
    })

    return data;

}

const catTheme = async _ =>{
    const data = dataFormat();
    const imgUrl = "https://api.thecatapi.com/v1/images/search";
    const imgArr = [];

    for (let i=0; i<19; i++){
        const res = await fetch(imgUrl);
        const pic = await res.json();

        imgArr[i] = pic[0]['url'];
    }

    data.forEach(item => {
        item.imgSrc = imgArr[item.id];
    })



    return data;

}


const randomizeCards = (theme) => {
    const cards = theme;
    cards.then((res) => {
        res.sort(() => Math.random() - 0.5);
    })

    return cards;
}

const cardGenerator = (theme) => {
     const imageArray = randomizeCards(theme);
     const preferences = getPreferences();


     imageArray.then((res) => {
     res.forEach(item => {
         const card = document.createElement('div');
         const openCard = document.createElement('img');
         const closedCard = document.createElement('div');

         card.className = "card";
         openCard.className = 'openCard';
         closedCard.className = 'closedCard';
         preferences.then(r => {
                     
        if (r.status === 401) {
            alert('Your session has expired.')
            location.href="login.html"
        }
             closedCard.style.background = r.color_closed
         })


         openCard.src = item.imgSrc;
         card.setAttribute('name', item.name);

         section.appendChild(card);
         card.appendChild(openCard);
         card.appendChild(closedCard);

         card.addEventListener('click', (e) => {
             card.classList.toggle('toggleCard');
             cardCheck(e);
         })
     })}
     );

}

function endgame() {
    alert("Gefeliciteerd, je hebt gewonnen!");
    gameState.gameStarted = false;
    found = 0;
}

const cardCheck = (e) => {
    const card = e.target;
    card.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');

    if (flippedCards.length === 2){
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            found += 1;
            console.log(found);
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';

            })

            if (found === 18){endgame()}

        } else {
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            })
        }
    }

}

function startGame(){
    let theme = document.querySelector('select').value;
    let section = document.querySelector('section');


    if (theme === 'Random'){
        theme = randomTheme();
    } else if (theme === 'Dog'){
        theme = dogTheme();
    } else if (theme === 'Cat'){
        theme = catTheme();
    }

    let child = section.lastElementChild;
    while (child){
        section.removeChild(child);
        child = section.lastElementChild;
    }

    cardGenerator(theme);
}

window.addEventListener('load', () => {
    const preferences = getPreferences();
    preferences.then(r => {

        if (r.status === 401){alert('Your session has expired.')
            location.href="login.html"}
        document.querySelector('select').value = r.preferred_api
    })
})


