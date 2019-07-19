import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutPage.css';
import Swal from 'sweetalert2';

class AboutPage extends Component {

  state = {
    comment: ''
  }
// sends a dispatch to add comment to redux store
  handleComment = () => {
    this.props.dispatch({ type: `SET_COMMENT`, payload: { ...this.state } })
    Swal.fire(
      'Thank you!',
      'We appreciate your feedback!'
    )
    this.setState({
      comment:''
    })
  }
  // records value of textarea
  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }
  render() {
    return (
      <div>
        <div>
          <p>
            Veronikas allows boutique galleries to <br></br>
            showcase their current collections. <br></br>
             </p>
             <p>Visit one of our artist's profiles and enjoy the majesty that is fine art.</p>
          <p>
            Please feel free to leave comments or inquiries below!
      </p>
          <textarea rows='5' cols='35' onChange={this.handleChange} value={this.state.comment} placeholder="Leave comments or inquiries."></textarea>
          <br/>
          <input id="submit" onClick={this.handleComment} type="submit"></input>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(AboutPage);