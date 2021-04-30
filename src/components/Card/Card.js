import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Simple from "../List/simple.json";
const Ready = Simple.data.movies;
export default class Card extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 justify-center md:grid-cols-4 px-0 md:px-20">
        {Ready.map((item) => {
          return (
            <Link to={`` + `${item.id}` + `` }>
             <div className="example-2 card  my-10">
              <div className="wrapper h-96" style={{"background": `url(${item.files.poster_url})  bottom / cover no-repeat` }}>
                <div className="header">
                  <ul className="menu-content">
                  </ul>
                </div>
                <div className="data">
                  <div className="content">
                    <span className="author">{item.title}</span>
                    <p className="mt-9">
                      The Movie was created in {item.year},{item.countries.map((count)=> {
                        return(
                          <span>{" " + count.title + " "}</span>
                        )
                      })} 
                    </p>
                    <a href="#" class="button">
                     More Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </Link>
           
          );
        })}
      </div>
    );
  }
}
