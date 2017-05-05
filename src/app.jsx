import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './app.css';

class App extends Component{
    render(){
        return(
            <div className="app">
                <h1 className="app-title">Music Master</h1>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="search for an artist" />
                            <InputGroup.Addon>
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