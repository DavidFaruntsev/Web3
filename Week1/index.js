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

function openCard(elem)
{
    elem.className = 'open-slot';
}

function newGame()
{
    const letters = generateLetters(18);
    const counter = 0;
    for (let i=1; i < letters.length; i++)
    {
        if (counter<2){
            const elem = document.getElementById(i.toString());
        }
    }
}

document.write(generateLetters(18).toString());