document.getElementById("search-start").addEventListener("click", function(){

    fetch("https://api.spotify.com/v1/search?q=Muse&type=track,artist&market",{
        method: 'GET',
        headers: new Headers({
            "GET": "/v1/search?q=Muse&type=track,artist&market=US HTTP/1.1",
            "Host": "api.spotify.com",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip, deflate, compress",
            "Authorization": AUTH_TOKEN,
            "User-Agent": "Spotify API Console v0.1"
        })
    })
})