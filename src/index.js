// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'


// Create a react component
const App = () =>{
    return ( 
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src="" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam        
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00 PM
                        </span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    )
};


// Take the react component and show it on the screen
ReactDOM.render(
    // Komponenten man ønsker fremvist
    <App />,
    // Referanse til DOM-elementet i html-filen hvor den skal fremvises.
    document.querySelector('#root')
);