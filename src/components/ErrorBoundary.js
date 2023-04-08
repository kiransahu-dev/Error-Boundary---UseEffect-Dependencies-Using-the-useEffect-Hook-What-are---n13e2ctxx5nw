import React from "react";

class ErrorBoundary extends React.Component {
 constructor() {
    super();
    this.state = { hasError: false }
  }
 
 componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }
 

  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
          This is an error in your react app. Please chexk again. This
          message has been generated by error boundary
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
