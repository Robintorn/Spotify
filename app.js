let option = document.getElementById("search-type");
let searchq = document.getElementById("search-text");

document.getElementById("search-start").addEventListener("click", function(){
    fetch('https://api.spotify.com/v1/search?q='+searchq.value+'&type='+option.value+'&market=US',{
        
        method: 'GET',
        headers: new Headers({
            "Accept": "application/json",
            "Authorization": AUTH_TOKEN,
        })
    })
    .then(response => response.json())
    .then(data => DOM(data))
    .catch(err => console.log(err));
})


function DOM(data){
    if(option.value === "track"){
    for(let i in data.tracks.items){
        let create = document.getElementById("search-results");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let p = document.createElement("p");
        let link = document.createElement("a");
        let img = document.createElement("img");

        create.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(img);
        div2.appendChild(p);
        div2.appendChild(link);

        div1.setAttribute("class", "search-result");
        div2.setAttribute("class", "search-result-info");

        p.innerHTML = data.tracks.items[i].name;
        link.setAttribute("href", data.tracks.items[i].uri);
        link.innerHTML = "Länk till spotify";
        img.setAttribute("src", data.tracks.items[i].album.images[0].url);
    }
}
    console.log(data);
}