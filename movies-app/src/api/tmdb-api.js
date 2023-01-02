  export const getMovies = (page) => {
    return fetch(
      `/api/movies/tmdb/discover/page${page.queryKey[1]}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'get'
    }).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };

  export const getUpComingMovies = (page) => {
    return fetch(
      `/api/movies/tmdb/upcoming/page${page.queryKey[1]}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'get'
    }).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };

  export const getTopRatedMovies = (page) => {
    return fetch(
      `/api/movies/tmdb/top_rated/page${page.queryKey[1]}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'get'
    }).then(res => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    });
  };
  
  export const getMovie = (id) => {
    return fetch(
      `/api/movies/tmdb/movie/${id.queryKey[1]}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };
  
  export const getGenres = () => {
    return fetch(
      `/api/genres/tmdb`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };
  
  export const getMovieImages = (id) => {
    return fetch(
      `/api/movies/tmdb/movie/${id.queryKey[1]}/images`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };
  
  export const getMovieReviews = (id) => {
    return fetch(
      `/api/movies/tmdb/movie/${id.queryKey[1]}/reviews`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };

  export const getPersonPopular = (page) => {
    return fetch(
      `/api/people/tmdb/popular/page${page.queryKey[1]}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };

  export const getPerson = (id) => {
    return fetch(
      `/api/people/tmdb/person/${id.queryKey[1]}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };

  export const getPersonImages = (id) => {
    return fetch(
      `/api/people/tmdb/person/${id.queryKey[1]}/images`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };

  export const getPersonCombinedCredit = (id) => {
    return fetch(
      `/api/people/tmdb/person/${id.queryKey[1]}/combined_credits`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };

  export const getMovieCredits = (id) => {
    return fetch(
      `/api/movies/tmdb/movie/${id.queryKey[1]}/movie_credits`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };