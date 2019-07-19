import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminPostPiece.css';
import Swal from 'sweetalert2';

class AdminPostPiece extends Component {

    state = {
        tile: '',
        year: '',
        status: '',
        image_url: '',
        artist_id: ''
    }
    // this is needed to populate the options for the drop-down menu.
    componentDidMount() {
        this.props.dispatch({type:`FETCH_ARTISTS`})
    }
    // currying change functions for all inputs 
    handleChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }
    // sends a dispatch to sagas with data needed to post a new piece to database
    handleClick = () => {
        console.log(this.state);
        
        this.props.history.push('/home');
        this.props.dispatch({ type: `POST_PIECE`, payload: this.state });
        this.props.dispatch({ type: `FETCH_PIECES` });
        Swal.fire(
            'Congrats!! New piece has been added to artist gallery.',
            )
    }
    render() {
        return (
            <>
                <h2>Add New Piece</h2>
                <input className='inputs' onChange={this.handleChangeFor("title")} name="title" type="text" value={this.state.title} placeholder='title of piece'></input>
                <br/>
                <input  className='inputs' onChange={this.handleChangeFor("year")} name="year" type="text" value={this.state.year} placeholder='year of piece'></input>
                <br/>
                <input  className='inputs' onChange={this.handleChangeFor("status")} name="staus" type="text" value={this.state.status} placeholder='status of piece'></input>
                <br/>
                <input  className='inputs' onChange={this.handleChangeFor("image_url")} name="image_url" type="text" value={this.state.image_url} placeholder='url of piece'></input>
                <br/>
                <select id='inputs' onChange={this.handleChangeFor("artist_id")} className='dropdown' name='Artist_id'>
                    <option>Artist Id</option>
                    {this.props.reduxState.artists.map((artist, i) => {
                        return <option placeholder='Artist Id' className='submit' value={artist.id} key={i}> Artist ID : {artist.last_name} {artist.id}</option>
                    })}
                </select>
                <br/>
                <input className='submit'onClick={this.handleClick} type="submit"></input>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AdminPostPiece);