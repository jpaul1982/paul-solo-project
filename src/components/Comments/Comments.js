import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

 
        


    handleClick = (commentId) => {
        console.log(commentId);
        this.props.dispatch({ type: `DELETE_COMMENT`, payload: commentId });

    }
    render() {
        return (
            <div>

                {this.props.reduxState.comments.length !== 0 && this.props.reduxState.comments.map((comment, i) => {
                    return <div key={i}> {comment.comment}
                        <br />
                        <button onClick={() => this.handleClick(comment.id)}>Delete</button>
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