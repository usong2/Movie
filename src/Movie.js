import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  };

  render() {
    return (
      <>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </>
    );
  }
}

class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired,
  };

  render() {
    return <img src={this.props.poster} alt={this.props.title} />;
  }
}

export default Movie;
