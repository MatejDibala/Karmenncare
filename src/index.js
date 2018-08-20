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

class CoNabizim extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false
    }
  }

  clickHandler = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    })
  }

  render () {
    const { visible } = this.state;
    return (
        <ul onClick={this.clickHandler.bind(this) }>Co nabizim
          { visible && <ul>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li> 
            <li><a href="#">5</a></li>
          </ul>
          }

        </ul>
    );
  }
}

render(<CoNabizim/>, window.document.getElementById("CoNabizim"));

render(<App />, document.getElementById('app'));