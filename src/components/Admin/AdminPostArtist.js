import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPostArtist extends Component {

    state = {
        first_name: '',
        last_name: '',
        artist_medium: '',
        description:'',
        img_url:''
    }

    handleFirst = (event) => {
        console.log(this.state.first_name);
        this.setState({
            first_name: event.target.value,
        })
    }

    handleLast = (event) => {
        console.log(this.state.last_name);
        this.setState({
            last_name: event.target.value,
        })
    }

    handleImage = (event) => {
        console.log(this.state.image_url);
        this.setState({
            img_url: event.target.value,
        })
    }

    handleMedium = (event) => {
        console.log(this.state.artist_medium);
        this.setState({
           artist_medium: event.target.value,
        })
    }

    handleDescription = (event) => {
        console.log(this.state.description);
        this.setState({
           description: event.target.value,
        })
    }

    handleClick = () => {
        console.log(this.state);
        this.props.history.push('/home');
        this.props.dispatch({type:`POST_ARTIST`, payload: this.state});
        this.props.dispatch({ type: `FETCH_ARTISTS` });


    }
    render() {
        return (
            <>
                <h2>Add New Artist</h2>
                <input onChange={this.handleFirst} value={this.state.first_name} placeholder='artist first name'></input>
                <input onChange={this.handleLast} value={this.state.last_name} placeholder='artist last name'></input>
                <input onChange={this.handleMedium} value={this.state.artist_medium} placeholder='artist medium'></input>
                <input onChange={this.handleImage} value={this.state.img_url} placeholder='Image Url'></input>
                <input onChange={this.handleDescription} value={this.state.description} placeholder='Short Artist Bio'></input>

                <input onClick={this.handleClick} type="submit"></input>

            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AdminPostArtist);