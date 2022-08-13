
document.getElementById("searchBtn").addEventListener("click", function(){
    const searchBar = document.getElementById("search-bar").value;
    const url = `https://api.lyrics.ovh/suggest/${searchBar}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
       const title = data.data[0].title;
       const album = data.data[0].artist.name;
     // const title = data;
      //console.log(title);
     showSongs(title, album);
    })


})

   const searchResult = document.getElementById("searchResult");

function showSongs(songTitle, album){
    searchResult.innerHTML = `
        <div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name">${songTitle}</h3>
                <p class="author lead">Album by <span>${album}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success">Get Lyrics</button>
            </div>
        </div>`
}