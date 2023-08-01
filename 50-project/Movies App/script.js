  const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=498312dfb105c5d7ac9762431f9144dc&page=1"
  const imgPath = "https://image.tmdb.org/t/p/w500"

  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=498312dfb105c5d7ac9762431f9144dc&query='

  const Form = document.getElementById("form")
  const Search = document.getElementById("search")
  const main = document.getElementById("main")


  getMovies(API_URL)

  async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results);
  }



  function showMovies(movie) {
    main.innerHTML = ''
    movie.forEach(moviee => {
      const {
        title,
        poster_path,
        vote_average,
        overview
      } = moviee
      const movieEll = document.createElement('div')
      movieEll.classList.add("movie")
      movieEll.innerHTML = `  
          <img src="${imgPath + poster_path}" alt="${title}" />
          <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
          </div>
          <div class="Overview">
            <h3>Overview</h3>
            ${overview}
          </div>`
      main.appendChild(movieEll)
    });
  }

  function getClassByRate(vote) {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 5) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  Form.addEventListener("keypress", (e) => {
    const SearchTerm = Search.value;
    if (e.key === "Enter") {
      if (SearchTerm && SearchTerm !== '') {
        getMovies(SEARCH_API + '' + SearchTerm)
        Search.value = '';
      } else {
        window.location.reload()
      }
    }
  })