document.getElementById("search-start").addEventListener("click", function(){

    fetch("https://api.spotify.com/v1/search?q=Muse&type=track,artist&market=US",{
        
        method: 'GET',
        headers: new Headers({
            "Accept": "application/json",
            "Authorization": AUTH_TOKEN,
        })
    })
    .then(response => response.json())
    .then(spotify => console.log(spotify))
    .catch(err => console.log(err));
})
