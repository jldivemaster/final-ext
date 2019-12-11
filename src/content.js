/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Frame, { FrameContextConsumer }from 'react-frame-component';
import "./content.css";

class Main extends React.Component {

    render() {
      return (
          <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}>
            <FrameContextConsumer>
             {
             // Callback is invoked with iframe's window and document instances
                 ({document, window}) => {
                    // Render Children
                    return (
                       <div className={'my-extension'}>
                          <h4>Hello world</h4>
                          <App />
                       </div>
                    )
                 }
              }
             </FrameContextConsumer>
          </Frame>
      )
    }
}

let button = document.createElement('button');
button.id = 'some-btn'
button.innerText = "Hello"
document.body.appendChild(button)

let app = document.createElement('div');
app.id = "my-extension-root";
app.style.display = 'none';
app.style.transition = "0.5s";
app.src = chrome.extension.getURL("index.html");
document.body.appendChild(app);

ReactDOM.render(<Main />, app);



// =======Receives browser action msg and toggles sidebar ============
// app.style.width = "0px";
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

let navTabs = window.getElementsByClassName('site-nav__item__container');
console.log(navTabs);

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}
