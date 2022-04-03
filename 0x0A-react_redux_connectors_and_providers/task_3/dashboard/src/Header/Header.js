import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/Holberton_logo.jpg';
import AppContext from '../App/AppContext'
import { logout } from "../actions/uiActionCreators";
import { connect } from 'react-redux'


const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#fffff',
    borderBottom: '3px solid #E0434C',
    height: '200px',
    display: 'flex'

  },
  appLogo: {
    width: '160px',
    height: '160px',
  },
  headerH1: {
    display: 'inline',
    position: 'relative',
    color: '#E0434C',
    fontWeight: '600',
    marginTop: '70px',
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt='logo' />
        <h1 className={css(styles.headerH1)}>School dashboard</h1>

        { this.context.user.isLoggedIn ?
          <p id="logoutSection" className={css(styles.logOut)}>Welcome {this.context.user.email} (<span onClick={this.context.logOut}>logout</span>)</p>
          :
          <></>
        }
      </div>
    );
  }
}

Header.defaultProps  = {
  user: null,
  logout: () => {}
}

Header.propTypes = {
  user: propTypes.object,
  logout: propTypes.func
}

const mapStateToProps = (state) => {
  return {
    user: state.get('user')
  }
}

const mapDispatchToProps = () => {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
