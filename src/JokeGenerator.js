import React, {Component} from "react";
import axios from "axios";
import Joke from "./Joke";
import logo from './logo.svg';
import './App.css';

const RANDOM_JOKE_URL = "https://api.icndb.com/jokes/random";

class JokeGenerator extends Component{

    constructor(props) {
        super(props);
        this.state = {
            joke: null,
            loading: false
        }
    }

    loadJoke = async () => {
       this.setState({loading: true});
        const { data: { value: { joke } } } = await axios.get(RANDOM_JOKE_URL);

        setTimeout(() => {
            this.setState({ loading: false, joke});

        }, 500)
    };

    render(){
        const { joke, loading } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {!joke  && !loading && <p>You haven't loaded any joke yet!</p> }
                    {joke && !loading && <Joke text={joke}/>}
                    {!joke  && loading && <p>Loading...</p> }
                    <button className={'loadJoke'} onClick={this.loadJoke}>
                        Load more
                    </button>
                </header>
            </div>
        )
    }
}

export default JokeGenerator;
