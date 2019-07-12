import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutPage.css';

class AboutPage extends Component {

  state = {
    comment: ''
  }
// sends a dispatch to add comment to redux store
  handleComment = () => {
    this.props.dispatch({ type: `SET_COMMENT`, payload: { ...this.state } })
    this.props.history.push('/comments');
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
            Veronikas is web application that allows boutique galleries to <br></br>
            showcase their current collection to the public <br></br>
            and receive user feedback.
      </p>
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