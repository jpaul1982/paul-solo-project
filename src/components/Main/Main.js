import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

class Main extends Component{

componentDidMount() {
    this.getArtists();
    this.getPieces();
}
    getArtists() {
        this.props.dispatch({type: `FETCH_ARTISTS`})
    }
    getPieces() {
        this.props.dispatch({type: `FETCH_PIECES`})
    }

    render() {
        return(

            <div>                   
                {this.props.reduxState.artists.map(artist => {
                    return  <li key={artist.id}>{artist.first_name + " " + artist.last_name}</li>
                })}       

                 {/* {this.props.reduxState.pieces.map(piece => {
                    return  <img key={piece.id} src = {piece.image_url}/>
                })}                        */}
         



        <pre>{JSON.stringify(this.props.reduxState.pieces, null, 2)}</pre>
        </div> 

        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Main);