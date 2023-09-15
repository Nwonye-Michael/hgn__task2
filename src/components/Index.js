const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTI0YzBmMTc0MzgzYTAyMmRjNGYyOTE0NTMwZTY1OCIsInN1YiI6IjY1MDBjMzIyM2ZmMmRmMDEwMGQzYzVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bI8LlaM1qF6jeMHNgk3WHhS62BMLT69hxARd_mYKeX0",
  },
}

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
