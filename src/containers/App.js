import CardList from "../components/CardList";
import React, { useState , useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const App = ()=>{

    const [robots, setRobots]= useState([])
    const [searchfield, setSearchfield]= useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  useEffect ( () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
    }, []
  )
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>  
            <ErrorBoundary>
                <CardList robots={filteredRobots} />
            </ErrorBoundary>              
          </Scroll>
        </div>
      );
    
  }
}

export default App;
