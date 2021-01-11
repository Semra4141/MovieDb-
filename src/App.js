import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SearchArea from "./components/SearchArea";
import { Component } from "react";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieInfo from "./components/MovieInfo";
import MovieAbout from "./components/MovieAbout";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    };
    this.apiKey = "9302d5c2147321a4f7bbb6db23383016";
  }
  handleSubmit = e => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey
      }&language=en-US&page=1&include_adult=false&query=${this.state.searchTerm
      }`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  nextPage = pageNumber => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey
      }&language=en-US&page=1&include_adult=false&query=${this.state.searchTerm
      }&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  viewMovieInfo = id => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({ currentMovie: newCurrentMovie });
  };
  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    const numberPage = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App bg-dark">
        <Nav
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.currentMovie == null ? (
          <div>
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
            />
          </div>
        ) : (
            <MovieInfo
              currentMovie={this.state.currentMovie}
              closeMovieInfo={this.closeMovieInfo}
            />
          )}
        {this.state.totalResults > 20 && this.state.currentMovie == null ? (
          <Pagination
            pages={numberPage}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
            ""
          )}{" "}
        <MovieAbout />
        <SearchArea
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default App;
