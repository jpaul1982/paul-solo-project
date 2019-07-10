import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import InfoPage from '../InfoPage/InfoPage';
import Main from '../Main/Main';
import ArtistDetail from '../ArtistDetail/ArtistDetail';
import ArtistGallery from '../ArtistGallery/ArtistGallery';
import GallerySpec from '../GallerySpec/GallerySpec';
import Comments from '../Comments/Comments';
import AdminPostArtist from '../Admin/AdminPostArtist';
import AdminPostPiece from '../Admin/AdminPostPiece';
import LoginPage from '../LoginPage/LoginPage';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>

          <Nav />
          <Switch>
            {/* <Route exact path="/home" component={Main}/> */}
            <Route path='/artistDetail' component={ArtistDetail} />
            <Route path='/artistGallery' component={ArtistGallery} />
            <Route path='/gallerySpec' component={GallerySpec} />
            <Route path='/user/login' component={LoginPage} />
            <ProtectedRoute path='/comments' component={Comments} />
            <ProtectedRoute path='/admin-post-artist' component={AdminPostArtist} />
            <ProtectedRoute path='/admin-post-piece' component={AdminPostPiece} />
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <Route
              exact
              path="/home"
              component={Main}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect()(App);
