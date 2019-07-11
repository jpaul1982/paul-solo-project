import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Comments.css'

class Comments extends Component {

    componentDidMount() {
        this.getComments();
    }

    getComments() {
        this.props.dispatch({ type: `FETCH_COMMENTS` })
    }
    // sends dispatch to sagas to make axios delete request
    handleClick = (commentId) => {
        this.props.dispatch({ type: `DELETE_COMMENT`, payload: commentId });

    }
    render() {
        return (
            <div>
                <h1 className='commentsHeader'>User Comments:</h1>
                <br/>
                {this.props.reduxState.comments.length !== 0 && this.props.reduxState.comments.map((comment, i) => {
                    return <div key={i} className='comments'> {comment.comment}
                        <br />
                        {/* sending properties of comment in-line via onClick function */}
                        <button onClick={() => this.handleClick(comment.id)}>Delete</button>
                        <br />
                    </div>
                })}
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Comments);