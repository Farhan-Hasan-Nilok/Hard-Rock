
document.getElementById("searchBtn").addEventListener("click", function () {
    const searchBar = document.getElementById("search-bar").value;
    const url = `https://api.lyrics.ovh/suggest/${searchBar}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //    const title = data.data[0].title;
            //    const album = data.data[0].artist.name;
            //    const artist = data.data[0].album.id;
            //    const title = data;
          //  console.log(data.data);
            const allInfo = data.data;
            showSongs(allInfo);
        })
})

const searchResult = document.getElementById("searchResult");

function showSongs(allInfo) {
    searchResult.innerHTML = "";
    for (let i = 0; i < allInfo.length; i++) {

        const { title, artist, album } = allInfo[i];

        searchResult.innerHTML += `
        <div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9 d-flex align-items-center">
            <div class="">
             <img class="icon" src="http://api.deezer.com/album/${album.id}/image" alt="">
            </div>
                <div class = "px-5">
                <h3 class="lyrics-name">${title}</h3>
                <p class="author lead">Album by <span>${artist.name}</span></p>
                </div>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success" onclick = "getLyrics('${artist.name}', '${title}')">Get Lyrics</button>
            </div>
            <hr class ="mt-2">
            <div class = "col-md-12 text-center" id = "song-lyric">
              
            </div>
        </div>`

    }

}
//  const lyrics = document.querySelector(".song-lyric").addEventListener("click", function(){
//     console.log("ehll");
//  })
function getLyrics(artist, title){

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => {
     console.log(data.lyrics);
    })
   
}