import React, { Component } from "react";
import { Link } from "react-router-dom";
import Simple from "../List/simple.json";
class SecondPage extends Component {
  render() {
    const PathName = window.location.pathname;
    const NN = "/" + Simple.data.movies[0].id;
    let text;
    if(PathName == "/" + Simple.data.movies[0].id) {
      text = 0;
    }if(PathName == "/" + Simple.data.movies[1].id) {
        text = 1;
    }if(PathName == "/" + Simple.data.movies[2].id) {
      text = 2;
    }if(PathName == "/" + Simple.data.movies[3].id) {
      text = 3;
    }if(PathName == "/" + Simple.data.movies[4].id) {
      text = 4;
    }if(PathName == "/" + Simple.data.movies[5].id) {
      text = 5;
    }if(PathName == "/" + Simple.data.movies[6].id) {
      text = 6;
    }if(PathName == "/" + Simple.data.movies[7].id) {
        text = 7;
    }if(PathName == "/" + Simple.data.movies[8].id) {
      text = 8;
    }if(PathName == "/" + Simple.data.movies[9].id) {
      text = 9;
    }if(PathName == "/" + Simple.data.movies[10].id) {
      text = 10;
    }if(PathName == "/" + Simple.data.movies[11].id) {
      text = 11;
    }if(PathName == "/" + Simple.data.movies[12].id) {
      text = 12;
    }if(PathName == "/" + Simple.data.movies[13].id) {
        text = 13;
    }if(PathName == "/" + Simple.data.movies[14].id) {
      text = 14;
    }if(PathName == "/" + Simple.data.movies[15].id) {
      text = 15;
    }if(PathName == "/" + Simple.data.movies[16].id) {
      text = 16;
    }if(PathName == "/" + Simple.data.movies[17].id) {
      text = 17;
    }      
    
    console.log(text);
    return (
      <React.Fragment>
        <br />
        {/* <Link to="/">Go to home</Link> */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-20 text-4xl font-mono font-bold">
          <div className=" flex justify-center">
            <img
              src={Simple.data.movies[text].files.poster_url}
              className="w-2/3"
            />
          </div>
          <div className="border mt-10 md:mt-0" style={{ color: "#00878a" }}>
            <h1
              className="text-center  text-4xl font-mono font-bold"
              style={{ color: "#fff" }}
            >
              Information
            </h1>
            <p className="my-5 ml-5">Name: {Simple.data.movies[text].title}</p>
            <p className="my-5 ml-5">Year: {Simple.data.movies[text].year}</p>
            <p className="my-5 ml-5">Genres: {Simple.data.movies[text].genres[0].title}</p>
            <p className="my-5 ml-5">Country: {Simple.data.movies[text].countries[0].title}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SecondPage;
