import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminPostArtist.css';
import Swal from 'sweetalert2';

class AdminPostArtist extends Component {

    state = {
        first_name: '',
        last_name: '',
        artist_medium: '',
        description: '',
        img_url: ''
    }
    // currys for all input changes 
    handleChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }
    // this will send the user back to home page after it sends a dispatch 
    // that will trigger our POST_ARTIST saga.  It will also retrieve a 
    // re-populated artist list. 
    handleClick = () => {
        this.props.history.push('/home');
        this.props.dispatch({ type: `POST_ARTIST`, payload: this.state });
        this.props.dispatch({ type: `FETCH_ARTISTS` });
        Swal.fire(
            'New artist added.',
            )


    }
    render() {
        return (
            <>
                <h2>Add New Artist</h2>
                <input className='inputs' onChange={this.handleChangeFor('first_name')} type='text' name='first_name' value={this.state.first_name} placeholder='artist first name'></input>
                <br/>
                <input className='inputs'onChange={this.handleChangeFor('last_name')} type='text' name='last_name' value={this.state.last_name} placeholder='artist last name'></input>
                <br/>
                <input className='inputs'onChange={this.handleChangeFor('artist_medium')} type='text' name='artist_medium' value={this.state.artist_medium} placeholder='artist medium'></input>
                <br/>
                <input className='inputs'onChange={this.handleChangeFor('img_url')} type='text' name='img_url' value={this.state.img_url} placeholder='Image Url'></input>
                <br/>
                <input className='inputs' id='bio' onChange={this.handleChangeFor('description')} type='text' name='description' value={this.state.description} placeholder='Short Artist Bio'></input>
                <br/>
                <input className='submit' onClick={this.handleClick} type="submit"></input>

            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AdminPostArtist);