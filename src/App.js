import React, { Component, Fragment } from "react";
import {
  Navbar,
  Button,
  Nav
} from "react-bootstrap";
import "./App.css";
import LoginPage from "./Components/LoginPage";

class App extends Component {
  goTo = (route) => {
    this.props.history.replace(`/${route}`);
  };

  login = () => {
    this.props.auth.login();
  };

  logout = () => {
    this.props.auth.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand className="appHeader">Hasura Todo</Navbar.Brand>
          <Nav className="mr-auto">
            {
              isAuthenticated() && (
                <Fragment>
                  <Nav.Link onClick={this.goTo.bind(this, 'home')}>Dashboard</Nav.Link>
                  <Nav.Link onClick={this.goTo.bind(this, 'alltodos')}>All Todos</Nav.Link>
                  <Button variant="danger" onClick={this.logout}>Logout</Button>
                </Fragment>
              )
            }
          </Nav>
        </Navbar>
        {
          !isAuthenticated() && (
            <Fragment>
              <LoginPage btn={this.login} title={'Hasura Todo'}/>
            </Fragment>
          )
        }
      </div>
    );
  }
}

export default App;
