import React from "react";
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext from './AppContext';
import { user, logOut } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from "../actions/uiActionCreators";
import { loginRequest as login, logout } from "../actions/uiActionCreators";


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

// const listNotifications = [
//   {id: 1, type: 'default', value: 'New course available'},
//   {id: 2, type: 'urgent', value: 'New resume available'},
//   {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
// ]

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#white',
    padding: '3rem',
    minHeight: '55rem',
  },
  footer: {
    backgroundColor: '#white',
    textAlign: 'center',
    width: '100%',
    bottom: '0px',
    borderTop: '3px solid #E0434C',
    fontStyle: 'italic',
    padding: '1rem 0'
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handlePress = this.handlePress.bind(this)
    // this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    // this.handleHideDrawer = this.handleHideDrawer.bind(this)
    this.state = {
      user,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
      ]
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    })
  }

  logOut() {
    this.setState({
      user
    })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handlePress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePress)
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    })
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    })
  }
  handlePress(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut()
    }
  }

  render () {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login, logout } = this.props
    const { listNotifications } = this.state
    return(
      <AppContext.Provider value={{ user, logOut }}>
        <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
        <div className={css(styles.app)}>
          <Header />
        </div>
        <div className={css(styles.body, styles.bodySmall)}>
          {user.isLoggedIn ?
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom> :
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login logIn={logIn} />
            </BodySectionWithMarginBottom>
              }
          <BodySection title="News from the School">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  }
}

const mapDispatchToProps = {
  displayNotificationDrawer, hideNotificationDrawer,
  login, logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
