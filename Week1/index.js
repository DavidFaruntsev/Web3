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


const colors = [
    'red',
    'blue',
    'violet',
    'green',
    'oranje',
    'black',
    'yellow',
    'pink',
    'teal',
    'aqua',
    'purple',
    'brown',
    'navy',
    'lime',
    'coral',
    'grey',
    'steelblue',
    'olive'
];

const cards = [...document.querySelectorAll('.slot')];
for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color', color);
}


function onCardClicked(e) {
    const target = e.currentTarget;

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes('done')) {
        return;
    }

    target.className = target.className
        .replace('color-hidden', '')
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
                clickedCard.className =
                    clickedCard.className.replace('done', '').trim() +
                    ' color-hidden';
                target.className =
                    target.className.replace('done', '').trim() +
                    ' color-hidden';
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

function newGame()
{
    const letters = generateLetters(18);
    // for (let i=1; i < letters.length; i++)
    // {
    //     assignCard(letters[i]);
    // }
    assignCard(letters);
}

function assignCard(items)
{
    let cardArray = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36'];
    cardArray = shuffle(cardArray);

    for (let i=0; i<items.length; i++)
    {
        let card1 = document.getElementById(cardArray[0]);
        let card2 = document.getElementById(cardArray[1]);

        let item1 = document.createElement('div');
        let item2 = document.createElement('div');


        item1.innerHTML = items[i];
        item2.innerHTML = items[i];

        item1.style.visibility = "hidden";
        item2.style.visibility = "hidden";

        card1.appendChild(item1);
        card2.appendChild(item2);



        cardArray.shift();
        cardArray.shift();


    }


}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

newGame();
