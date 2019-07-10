import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminPostPiece.css'

class AdminPostPiece extends Component {

    state = {
        tile: '',
        year: '',
        status: '',
        image_url: '',
        artist_id: ''
    }

    handleTitle = (event) => {
        console.log(this.state.title);
        this.setState({
            title: event.target.value,
        })
    }

    handleYear = (event) => {
        console.log(this.state.year);
        this.setState({
            year: event.target.value,
        })
    }

    handleStatus = (event) => {
        console.log(this.state.status);
        this.setState({
            status: event.target.value,
        })
    }

    handleImage_url = (event) => {
        console.log(this.state.image_url);
        this.setState({
            image_url: event.target.value,
        })
    }

    handleArtist_id = (event) => {
        console.log(this.state.artist_id);
        this.setState({
            artist_id: event.target.value,
        })
    }
    handleClick = () => {
        console.log(this.state);
        this.props.history.push('/artistDetail')
        this.props.dispatch({ type: `POST_PIECE`, payload: this.state })
        // this.props.dispatch({ type: `FETCH_PIECES` });
    }
    render() {
        return (
            <>
                <h2>Add New Piece</h2>
                <input onChange={this.handleTitle} value={this.state.title} placeholder='title of pice'></input>
                <input onChange={this.handleYear} value={this.state.year} placeholder='year of piece'></input>
                <input onChange={this.handleStatus} value={this.state.status} placeholder='status of piece'></input>
                <input onChange={this.handleImage_url} value={this.state.image_url} placeholder='url of piece'></input>
                {/* <input onChange={this.handleArtist_id} value={this.state.artist_id} placeholder='artist id of piece'></input> */}
               
                <select className='dropdown' name='Artist_id'>
                    <option>{this.props.reduxState.artists}</option>
                </select>
                
               <input onClick={this.handleClick} type="submit"></input>

                {this.props.reduxState.artists.map((artist, i) => {
                    return <li key={i}>
                        {artist.first_name}
                        {artist.last_name} :
                    {artist.id}
                    </li>
                })}
<pre>{JSON.stringify(this.props.reduxState, null,2)}</pre>
            </>

        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AdminPostPiece);