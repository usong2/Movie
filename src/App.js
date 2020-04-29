import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {
    greeting: "Hello! This is a movie",
    movies: [
      {
        title: "트롤",
        poster:
          "https://upload.wikimedia.org/wikipedia/ko/a/a0/%ED%8A%B8%EB%A1%A4_%EC%9B%94%EB%93%9C_%ED%88%AC%EC%96%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      },
      {
        title: "쥬라기월드",
        poster:
          "https://upload.wikimedia.org/wikipedia/ko/f/f4/%EC%A5%AC%EB%9D%BC%EA%B8%B0_%EC%9B%94%EB%93%9C_%ED%8F%B4%EB%A5%B8_%ED%82%B9%EB%8D%A4.jpg",
      },
      {
        title: "킹덤",
        poster:
          "https://post-phinf.pstatic.net/MjAxODExMzBfMjUz/MDAxNTQzNTc3MjUyOTM1.-Ye3_yI0tXYsAuXNtkxbVCi_yGOVo2rvGAjWByFh9EEg.8QPa5B8_9S2SWmUkBFL2qesAYP7sOcsqeNkBxCNmgeMg.JPEG/%ED%82%B9%EB%8D%A4_%ED%8B%B0%EC%A0%80%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?type=w1200",
      },
      {
        title: "기생충",
        poster:
          "https://pds.joins.com/news/component/htmlphoto_mmdata/201905/26/8ea065cf-5019-4de4-ab38-026b15a67e52.jpg",
      },
      {
        title: "트랜스포머",
        poster:
          "https://pds.joins.com/news/component/moneytoday/201405/23/2014052315504857264_1.jpg",
      },
    ],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: "Hello again!",
        movies: [
          // 이전 영화 리스트를 그대로 두고, 영화 한 개를 추가
          ...this.state.movies,
        ],
      });
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.greeting}</h1>
        {this.state.movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
