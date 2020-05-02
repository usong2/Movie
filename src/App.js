import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {
    greeting: "Hello! This is a movie",
  };

  componentDidMount() {
    this._getMovies();
    setTimeout(() => {
      this.setState({
        greeting: "Hello again!",
      });
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie);
      return (
        <Movie
          key={movie.id}
          title={movie.title_english}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((response) => response.json())
      .then((json) => json.data.movies)
      .catch((err) => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        {/* <div className="Movie__Greeting">{this.state.greeting}</div> */}
        <h1 className={movies ? "App--title" : "App--loading"}>
          {this.state.greeting}
        </h1>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
