import React, { Component } from 'react';
import { connect } from 'react-redux';

class GallerySpec extends Component {
    render() {
        return (
            <div>
            <p>Gallery Spec Page</p>
        {/* <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>  */}
        </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState, 
})

export default connect(mapStateToProps)(GallerySpec);