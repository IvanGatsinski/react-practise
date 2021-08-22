import React, { Component } from "react";

export const withAuth = (WrappedComponent) =>
  class extends Component {

    render() {
      return this.props.isLoggedIn ? (
        <WrappedComponent {...this.props} />
      ) : (
        <h1>User is not logged in!</h1>
      );
    }
  };
