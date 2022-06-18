async function getHighestScores(){
    try {
            const res = await fetch("http://127.0.0.1:8000/scores")
            .then(r => r.json())
            .then(json => json.sort((a, b) => b['score'] - a['score']))
            .then(json => {
                const slots = document.querySelectorAll('.playerRank');
                json.forEach((item, index) => {
                    slots[index].innerHTML = `Player ${item['username']}: ${item['score']} points`
                })
            })
    } catch (e){
        console.log(e);
    }
}

window.addEventListener('load', () => {
    getHighestScores().then();
})