const API_KEY = '11d8110a859024cfdd19c79b8822d6ac';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?api_key=' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const Search = document.getElementById('search');


getMovies(API_URL);

async function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data);
        showMovies(data.results);
    });

}

function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie => {
        const {poster_path, original_title, vote_average , overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.setAttribute('id', 'movie');
        movieEl.innerHTML = `<div id="movie">
        <img src="${IMG_URL + poster_path}" alt="${original_title}">

            <div id="movie-info">
                <h3>${original_title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div id="overview">
                <h3>overview</h3>
                ${overview}
            </div>
        </div>`
        

        main.appendChild(movieEl);
    });
}

function getColor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchTerm = Search.value;

    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm);
    }
    else{
        getMovies(API_URL);
    }
})
