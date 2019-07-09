import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class AboutPage extends Component {

  state = {
    comment: ''
}

  handleComment = () => {
    console.log(this.state);
    this.props.dispatch({ type: `SET_COMMENT`, payload: { ...this.state } })
    this.props.history.push('/comments');
  }
  handleChange = (event) => {
    console.log(this.state.text);
    this.setState({
        comment: event.target.value
    })
}
  render() {
    return (



      <div>
        <div>
          <p>
            Veronika is web application that allows local galleries to <br></br>
            showcase their current collection of artwork to the public <br></br>
            and receive user feedback.
      </p>

      <p>
        Please feel free to leave comments or inquiries below!
      </p>
          <textarea rows='5' cols='35' onChange={this.handleChange} value={this.state.comment} placeholder="leave comments or inquiries"></textarea>
          <input onClick={this.handleComment} type="submit"></input>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(AboutPage);