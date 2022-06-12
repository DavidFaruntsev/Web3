function generateLetters(numOfChar)
{

    let result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < numOfChar; i++ ) {
        const char = characters.charAt(Math.floor(Math.random() * charactersLength));
        if (!result.includes(char)) {
            result.push(char);
        } else {
            i--;
        }
    }
    return result;
}

// function openCard(elem)
// {
//     elem.className = 'open-slot';
// }

let clickedCard = null;
let preventClick = false;
let combosFound = 0;


var colors =
    {
        'red': 'red',
        'blue': 'blue}',
        'violet': 'violet',
        'green': 'green',
        'oranje': 'oranje',
        'black': 'black',
        'yellow': 'yellow',
        'pink': 'pink',
        'teal': 'teal',
        'aqua': 'aqua',
        'purple': 'purple',
        'brown': 'brown',
        'navy': 'navy',
        'lime': 'lime',
        'coral': 'coral',
        'grey': 'grey',
        'steelblue': 'steelblue',
        'olive': 'olive'
    }

async function randomTheme(){

    let imageUrl = "https://picsum.photos/200";

    try {
        for (let color in colors) {
            const res = await fetch(imageUrl);
            colors[color] = await res.blob();
            console.log(colors);


            let style = document.createElement("style");
            style.innerHTML = `.${color} { background-image: url(${URL.createObjectURL(colors[color])}); }`;
            document.getElementsByTagName('head')[0].appendChild(style);

        }


    } catch (error) {
        console.log(error.stack);
    }

}

function colorTheme(){
    colors =
        {
            'red': 'red',
            'blue': 'blue',
            'violet': 'violet',
            'green': 'green',
            'oranje': 'oranje',
            'black': 'black',
            'yellow': 'yellow',
            'pink': 'pink',
            'teal': 'teal',
            'aqua': 'aqua',
            'purple': 'purple',
            'brown': 'brown',
            'navy': 'navy',
            'lime': 'lime',
            'coral': 'coral',
            'grey': 'grey',
            'steelblue': 'steelblue',
            'olive': 'olive'
        }

        for (let color in colors){
            let style = document.createElement("style");
            style.innerHTML = `.${color} { background-image: url(${URL.createObjectURL(colors[color])}); }`;
            document.getElementsByTagName('head')[0].appendChild(style);
        }
}

// async function dogTheme(){
//
//     let imageUrl = "https://dog.ceo/api/breeds/image/random";
//
//     try {
//         for (let color in colors) {
//             const res = await fetch(imageUrl);
//             colors[color] = await res.json();
//             console.log(colors);
//
//
//             let style = document.createElement("style");
//             style.innerHTML = `.${color} { background-image: url(${colors[color]['message']}); background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-size: cover;}`;
//             document.getElementsByTagName('head')[0].appendChild(style);
//
//         }
//
//
//     } catch (error) {
//         console.log(error.stack);
//     }

// }

const cards = [...document.querySelectorAll('.slot')];
for (let color in colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className = `slot color-hidden`;
    cardA.setAttribute('data-color', color);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className = `slot color-hidden`;
    cardB.setAttribute('data-color', color);
}


function onCardClicked(e) {
    const target = e.currentTarget;
    let color = target.getAttribute('data-color');
    target.className = `${color}`;

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes('done')) {
        return;
    }

    target.className += ' done';

    if (!clickedCard) {
        clickedCard = target;
    } else if (clickedCard) {
        if (
            clickedCard.getAttribute('data-color') !==
            target.getAttribute('data-color')
        ) {
            preventClick = true;
            setTimeout(() => {
                clickedCard.className = 'color-hidden';
                target.className = 'color-hidden';
                clickedCard = null;
                preventClick = false;
            }, 500);
        } else {
            combosFound++;
            clickedCard = null;
            if (combosFound === 18) {
                alert('Gefeliciteerd! Je hebt gewonnen!');
            }
        }
    }
}

function changeTheme(){
    let theme = document.getElementById('cardTheme');
    let selected = theme.options[theme.selectedIndex].text;

    if (selected === 'Random'){
        randomTheme().then(value => console.log(value));
    } else {
        colorTheme();
    }
}



// css.style.backgroundColor = color;
// css = document.querySelector('.color-hidden');
// css.style.backgroundColor = color;

function changeClosedColor() {
    // let colorselect = document.getElementById('closed-color');
    // let block = document.getElementsByClassName('slot color-hidden');
    // for (let i=0;i<block.length;i++){
    //     block[i].style.backgroundColor = colorselect.value;
    // }
    //
    // console.log(document.getElementsByClassName('slot color-hidden'))


}

const startingMinutes = 10;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('countdown');

setInterval(updateCountDown, 1000);


function updateCountDown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

// const startingTime = 0;
// let timer = startingTime * 60;
//
// const countTimeEl = document.getElementById('runtime');
//
// setInterval(updateCountTime, 1000);
//
//
// function updateCountTime() {
//     const min = Math.floor(timer/60);
//     let sec = timer % 60;
//
//     sec = sec < 10 ? '0' + sec : sec;
//
//     countTimeEl.innerHTML = `${min}: ${sec}`;
//     time++;
// }