import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <div>
         
            {this.props.reduxState.comments.map((comment, i) => {

                return  <div key={i}> {comment.comment} 
                <br/>
                <button>Delete</button>
                </div>
            
             })}
            
        {/* <pre>{JSON.stringify(this.props.reduxState.comments, null, 2)}</pre> */}
        </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Comments);