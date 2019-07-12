import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Comments.css';
import Swal from 'sweetalert2';

class Comments extends Component {

    componentDidMount() {
        this.getComments();
    }

    getComments() {
        this.props.dispatch({ type: `FETCH_COMMENTS` })
    }
    // sends dispatch to sagas to make axios delete request
    handleClick = (commentId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: `DELETE_COMMENT`, payload: commentId })
              Swal.fire(
                'Deleted!',
                'Your comment has been deleted.',
                'success'
              )
            }
          })
          
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