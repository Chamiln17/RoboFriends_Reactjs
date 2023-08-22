import CardList from './CardList';
import React ,{ Component } from 'react';
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import './App.css';






class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
     onSearchChange= (event) =>{
        this.setState({searchfield:event.target.value})
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
            return response.json();
        }).then((users)=>{
            this.setState({robots:users})
        })
    }


    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length===0){
            return <h1>Loading</h1>
        }else {
            return (
                <div className="tc">
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>                
                </div>
            );
        }        
    }    
};

export default App;