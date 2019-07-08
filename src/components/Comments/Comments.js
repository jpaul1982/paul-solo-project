import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Comments.css'

class Comments extends Component {

    componentDidMount() {
        this.getComments();
    }

    getComments() {
        this.props.dispatch({type:`FETCH_COMMENTS`})
    }

    handleClick = (commentId) => {
        console.log(commentId);
        this.props.dispatch({ type: `DELETE_COMMENT`, payload: commentId });

    }
    render() {
        return (
            <div>

                {this.props.reduxState.comments.length !== 0 && this.props.reduxState.comments.map((comment, i) => {
                    return <div key={i} className='comments'> {comment.comment}
                    <br/>
                  
                        <button onClick={() => this.handleClick(comment.id)}>Delete</button>
                        <br/>
                        <br/>
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