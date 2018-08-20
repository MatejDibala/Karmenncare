import React from 'react';
import { render } from 'react-dom';
import './styles.scss';

const App = () => {
  return (
      <div>
         <h3>Our Application Is Alive</h3>
         <p>This isn’t reality. This — is fantasy.</p>
        <h3>Our Application Is wow</h3>
      </div>
  );
}

render(<App />, document.getElementById('app'));