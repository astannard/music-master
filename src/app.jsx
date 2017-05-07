import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './App.css';

class App extends Component{

    constructor(props) {
            super(props);
            this.state = {
                query: ""
            };
    }

    search(){
        console.log('state', this.state);
        const BASE_URL =  'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

        fetch(FETCH_URL,{
            method: 'GET',

        }).then(response => response.json())
        .then(json => console.log('json',json));
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
                <div className="profile">
                    <div className="artistName"></div>
                </div>
                <div className="gallery">
                    </div>
            </div>
        );
    }
}

export default App;