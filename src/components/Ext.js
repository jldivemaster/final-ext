import React from 'react';
import Note from './Note';
// import './Ext.css'

export default class Ext extends React.Component {

handleClick = () => {
  // This fires=======
  console.log('fired in Ext Component')
}
// Popup ext with globe icon.  Input field values render onto component view.
  render() {
    return(
      <div className={'my-extension'}>
        <p>Extension Component</p>
        <button id="tabChanger" onClick={this.handleClick}>Change it!</button>
        <p>Welcome, {this.props.user}</p>

      <a
        className="App-link"
        href="http://localhost:3000/page"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Page
      </a>
      <Note />

      </div>
    )
  };
}
