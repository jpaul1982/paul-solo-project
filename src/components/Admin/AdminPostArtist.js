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

    handleChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    handleClick = () => {
        this.props.history.push('/home');
        this.props.dispatch({type:`POST_ARTIST`, payload: this.state});
        this.props.dispatch({ type: `FETCH_ARTISTS` });


    }
    render() {
        return (
            <>
                <h2>Add New Artist</h2>
                <input onChange={this.handleChangeFor('first_name')} type='text' name='first_name' value={this.state.first_name} placeholder='artist first name'></input>
                <input onChange={this.handleChangeFor('last_name')}  type='text'name='last_name' value={this.state.last_name} placeholder='artist last name'></input>
                <input onChange={this.handleChangeFor('artist_medium')} type='text' name='artist_medium' value={this.state.artist_medium} placeholder='artist medium'></input>
                <input onChange={this.handleChangeFor('img_url')} type='text' name='img_url' value={this.state.img_url} placeholder='Image Url'></input>
                <input onChange={this.handleChangeFor('description')} type='text' name='description' value={this.state.description} placeholder='Short Artist Bio'></input>

                <input onClick={this.handleClick} type="submit"></input>

            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AdminPostArtist);