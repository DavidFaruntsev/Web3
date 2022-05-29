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
    cardA.className += `color-hidden`;
    cardA.setAttribute('data-color', color);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += `color-hidden`;
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

    target.className = target.className
        .replace(' color-hidden', '')
        .trim();
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
        colors =
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
    }
}



// css.style.backgroundColor = color;
// css = document.querySelector('.color-hidden');
// css.style.backgroundColor = color;

function changeClosedColor() {
    let colorselect = document.getElementById('closed-color');
    for (let i=1;i<=36;i++){
        let css = document.getElementById(i.toString());
        console.log(css);
        console.log(colorselect.value);
        css.style.backgroundColor = colorselect.value;
    }


}

