let masterdiv = document.getElementById("search-results-container")
let option = document.getElementById("search-type");
let searchq = document.getElementById("search-text");

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

document.getElementById("search-start").addEventListener("click", function(){
    fetch('https://api.spotify.com/v1/search?q='+searchq.value+'&type='+option.value+'&market=US',{
        method: 'GET',
        headers: new Headers({
            "Authorization": AUTH_TOKEN,
            "Accept": "application/json",
        })
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(data => DOM(data))
    .catch(err => masterdiv.innerHTML = err);
})


function DOM(data){
    if(option.value === "track"){
        let renderhtml = '';
    for(let i in data.tracks.items){
        renderhtml += `
        <div class="search-result">
        <div class="search-result-info">
            <p>${data.tracks.items[i].name}</p>
            <a href="${data.tracks.items[i].uri}">Open in Spotify</a>
        </div>
        <img src="${data.tracks.items[i].album.images[0].url}">
    </div> 
        `
    }
    document.getElementById("search-results").innerHTML = renderhtml;
}
if(option.value === "artist"){
    let renderhtml = '';
    for(let i in data.artists.items){
        renderhtml += `
         <div class="search-result">
        <div class="search-result-info">
            <p>${data.artists.items[i].name}</p>
            <a href="${data.artists.items[i].uri}">Open in Spotify</a>
        </div>
        <img src="${data.artists.items[i].images[0].url}">
    </div> 
        `
    }
    document.getElementById("search-results").innerHTML = renderhtml;
}
    console.log(data);
}