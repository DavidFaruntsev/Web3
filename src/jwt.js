const getHighestScores = async () => {

    await fetch("http://localhost:8000/scores")
        .then(r => r.json())
        .then(json => json.sort((a, b) => b['score']-a['score']))
        .then(json => {
            return json

        })

}

getHighestScores().then(res => {
    console.log(res);
})

