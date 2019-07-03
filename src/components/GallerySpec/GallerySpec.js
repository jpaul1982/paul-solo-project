import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GallerySpec.css'

class GallerySpec extends Component {
    render() {
        return (
            <div>
                {this.props.reduxState.gallerySpec.length &&
                    this.props.reduxState.gallerySpec.map((spec,i) => {
                        return (
                            
                        <img key={i} alt='specific piece' src={spec.image_url} />
                        // why can't I put other specs here?!?!?
                        )
                      
                    })}

                {/* <pre>{JSON.stringify(this.props.reduxState.gallerySpec, null, 2)}</pre>  */}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,

})

export default connect(mapStateToProps)(GallerySpec);