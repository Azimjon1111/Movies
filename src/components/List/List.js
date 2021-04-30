import React, { Component } from "react";
import "./style.scss";
import Simple from "./simple.json";
const Ready = Simple.data.movies;
class List extends Component {
  render() {
    return (
      <div className="text-white">
          <h1 className="font-bold text-4xl md:pl-48 text-center font-mono text-white">
            The List of movies
            </h1>
            <table className="rwd-table px-20">
                   <tr>
                    <th>Movie Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                    <th>Country</th>
                  </tr>
        {Ready.map((info) => {
          return (
            <>   
                  <tr>
                    <td data-th="Movie Title">{info.title}</td>
                    <td data-th="Genre">
                        {info.genres.map((genre)=> {
                            return(
                            <span>
                                 {genre.title + ' '}
                            </span> )
                        })}
                        </td>
                    <td data-th="Year">{info.year}</td>
                    <td data-th="Gross">{info.countries.map((count)=>{
                            return(
                                <span>{count.title + ' '}</span>
                            )
                    })}</td>
                  </tr>
              </>
          );
        })}
        </table>
      </div>
    );
  }
}

export default List;
