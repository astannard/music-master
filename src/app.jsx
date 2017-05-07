import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './App.css';

import Profile from './profile';

class App extends Component{

    constructor(props) {
            super(props);
            this.state = {
                query: "",
                artist: null
            };
    }

    search(){
        console.log('state', this.state);
        const BASE_URL =  'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

        fetch(FETCH_URL,{
            method: 'GET',

        }).then(response => response.json())
        .then(json => {
            const artist = json.artists.items[0];
            this.setState({artist})
        });
    }

    render(){
        return(
            <div className="app">
                <h1 className="app-title">Music Master</h1>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            value={this.state.query}
                            onChange={event => {this.setState({query : event.target.value})}}
                            onKeyPress={event =>{
                                if(event.key === 'Enter'){
                                    this.search();
                                }}}
                            placeholder="search for an artist" 
                        />
                            <InputGroup.Addon onClick={() => this.search()}>
                                <Glyphicon glyph="search" />
                            </InputGroup.Addon>
                    </InputGroup>
                  </FormGroup>
                  {
                      this.state.artist !== null 
                                        ?   <div><Profile artist={this.state.artist}  /><div className="gallery"> </div> </div>
                                        : <div />
                  }

                
            </div>
        );
    }
}

export default App;