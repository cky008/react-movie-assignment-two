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

export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const addFavourite = (username, id) => {
  return fetch(`/api/users/${username}/favourites`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ id })
  }).then(res => res.json())
};

export const getFavourites = async (username) => {
  return fetch(`/api/users/${username}/favourites`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get'
  }).then(res => res.json())
};

export const deleteFavourite = (username, movie) => {
  return fetch(`/api/users/${username}/movie/${movie.id}/favourites`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post'
  }).then(res => res.json())
};
