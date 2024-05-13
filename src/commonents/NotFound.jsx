import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ redirect: true });
    }, 3000);
  }



  render() {
    if (this.state.redirect) {
      return <Navigate to="/movies" />;
    }

    return (
      <div>
        <p>Redirect to Movies page</p>
      </div>
    );
  }
}

export default NotFound;
/* import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    // Fonction de nettoyage pour clearTimeout lors du démontage du composant
    return () => clearTimeout(timeoutId);
  }, []);

  if (redirect) {
    return <Navigate to="/movies" />;
  }

  return (
    <div>
      <p>Redirect to Movies page</p>
    </div>
  );
};

export default NotFound; */


