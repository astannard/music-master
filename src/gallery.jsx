import React, {Component} from 'react';
import './App.css';

class Gallery extends Component{


    constructor(props){

        super(props);
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }

    }

    playAudio(previewUrl){

        console.log('playAudio','called');
        let audio = new Audio(previewUrl);

        if(!this.state.playing){
            console.log('playAudio','not playing ');
           
           this.setState({
               playing: true,
               audio,
               playingUrl: previewUrl
            }); 
            audio.play();
        }
        else{

             console.log('playAudio','is playing ');
            if( this.state.playingUrl === previewUrl){

                console.log('playAudio','same track clicked ');

               
                this.setState({
                    playing: false
                }); 
                this.state.audio.pause();


            }else{
                 console.log('playAudio','new track clicked ');
                   
                 this.setState({
                    audio,
                    playingUrl: previewUrl
                }); 
                  this.state.audio.play();
            }
        }


    }

    render(){

        console.log('gallery props',this.props);
        const { tracks } = this.props;
        return(
            <div>
                {tracks.map((track, k) => {
                    const trackImg = track.album.images[0].url;
                    return(
                    <div
                        key={k}
                        className="track"
                        onClick={() => this.playAudio(track.preview_url)}
                    >
                            <img 
                                src={trackImg} 
                                className="track-img" 
                                alt="track" />
                                <div className="track-play">
                                    <div className="track-play-inner">
                                       { 
                                        this.state.playingUrl === track.preview_url
                                        ? <span> !! </span>
                                        : <span> &#9654; </span>                                       
                                        }
                                    </div>
                                </div>
                                <p className="track-text">
                                    {track.name}
                                </p>
                    </div> );    
                })}
            </div>
        );
    }//render end

}

export default Gallery;