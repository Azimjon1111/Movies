import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import List from './components/List/List'
import Card from './components/Card/Card'
import SecondPage from './components/SecondPage/SecondPage'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { render } from 'less';
import Simple from './components/List/simple.json'

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
    <Navbar/>
    {/* <Link to="/id" >SecondPage</Link> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path={"/"+ Simple.data.movies[0].id} component={SecondPage} number="1"/>
        <Route exact path={"/"+ Simple.data.movies[1].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[2].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[3].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[4].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[5].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[6].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[7].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[8].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[9].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[10].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[11].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[12].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[13].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[14].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[15].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[16].id} component={SecondPage}/>
        <Route exact path={"/"+ Simple.data.movies[17].id} component={SecondPage}/>
      </Switch>
      <Footer/>
    </React.Fragment>
    </BrowserRouter>
  );
}

const Home = () => {
    return(
      <React.Fragment>
      <List/> 
      <Card/>
      </React.Fragment>
    )
}
export default App;
