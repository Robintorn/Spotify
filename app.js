document.getElementById("search-start").addEventListener("click", function(){

    fetch("https://api.spotify.com/v1/search?q=Muse&type=track,artist&market=US",{
        
        method: 'GET',
        headers: new Headers({
            "Accept": "application/json",
            "Authorization": " Bearer BQCKR5CQKyhKwi3MckGjwjPZP9jIxQPqYXQwC2xtgZmlF6gs72QzyBjUam7goLXhCnCIX8k6KrcLfNJPvF6GoFTxljqw_afK2PzdvMdcMDk7bKylh3K9Y9E1QirTTo5n-C86W5ZNm5jVRX4Qje0",
        })
    })
    .then(response => response.json())
    .then(spotify => console.log(spotify))
    .catch(err => console.log(err));
})