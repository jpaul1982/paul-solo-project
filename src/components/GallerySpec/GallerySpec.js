import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GallerySpec.css';


// const styles = {
//     modal: {
//         backgroundImage:
//     }
// }



class GallerySpec extends Component {

   

    render() {
        return (
            <div>
                {this.props.reduxState.gallerySpec.length !==0  &&
                    this.props.reduxState.gallerySpec.map((spec,i) => {
                        return (
                            <>
                            
                        <img key={i} className='specImg' alt='specific piece' src={spec.image_url} />
                        <p>{spec.title}</p>
                        <p>{spec.year}</p>

                        </>)
                  
                        
                      
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