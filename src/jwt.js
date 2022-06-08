async function getHighestScores() {

    let top5;

    await fetch("http://localhost:8000/scores")
        .then(r => r.json())
        .then(json => json.sort((a, b) => b['score']-a['score']))
        .then(json => {
            document.getElementById('1th').innerText = json[0]['username']+': '+json[0]['score']+' punten'
            document.getElementById('2th').innerText = json[1]['username']+': '+json[1]['score']+' punten'
            document.getElementById('3th').innerText = json[2]['username']+': '+json[2]['score']+' punten'
            document.getElementById('4th').innerText = json[3]['username']+': '+json[3]['score']+' punten'

        })


}

getHighestScores().then();

