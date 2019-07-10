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

    handleChangeFor = propertyName => (event) => {
        console.log(event.target.value);

        this.setState({
            [propertyName]: event.target.value,
        });
    }

    handleArtist_id = (event) => {
        this.setState({
            artist_id: event.target.value,
        })
    }
    handleClick = () => {
        this.props.history.push('/artistDetail')
        this.props.dispatch({ type: `POST_PIECE`, payload: this.state })
        this.props.dispatch({ type: `FETCH_PIECES` });
    }
    render() {
        return (
            <>
                <h2>Add New Piece</h2>
                <input onChange={this.handleChangeFor("title")} name="title" type="text" value={this.state.title} placeholder='title of pice'></input>
                <input onChange={this.handleChangeFor("year")} name="year" type="text" value={this.state.year} placeholder='year of piece'></input>
                <input onChange={this.handleChangeFor("status")} name="staus" type="text" value={this.state.status} placeholder='status of piece'></input>
                <input onChange={this.handleChangeFor("image_url")} name="image_url" type="text" value={this.state.image_url} placeholder='url of piece'></input>
                <select onChange={this.handleChangeFor("artist_id")} className='dropdown' name='Artist_id'>
                    {this.props.reduxState.artists.map((artist, i) => {
                        return <option value={artist.id} key={i}>{artist.first_name}{artist.id}</option>
                    })}
                </select>
                <input onClick={this.handleClick} type="submit"></input>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AdminPostPiece);