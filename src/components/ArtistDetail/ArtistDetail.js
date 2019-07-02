import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtistDetail extends Component {
    handleClick = (artistId) => {
        console.log(this.props.artist.id);
        this.props.history.push('/artistGallery');
        this.props.dispatch({
            type:`FETCH_GALLERY`,
            payload: {artistId}
        });

    }
    
    
    render() {
        return (

            <div>
            <div>{this.props.artist.first_name + " " + this.props.artist.last_name} </div>
            <br/>
            <div>{this.props.artist.artist_medium} </div>
            <br/>
            <div>{this.props.artist.description} </div>
            <br/>
            
            <br/>

            

            <textarea placeholder="leave comments or inquiries"></textarea>

            
                      <div onClick={() => this.handleClick(this.props.artist.id)}>View Artist's Gallery</div>
            
           

         
            {/* <pre>{JSON.stringify(this.props.artist.first_name, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(this.props.reduxState.pieces, null, 2)}</pre> */}

            </div>

            
        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState, 
    artist:reduxState.artistDetail.artist,
})

export default connect(mapStateToProps)(ArtistDetail);