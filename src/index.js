// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        
        // Kan ta tid før man får svar. Men koden går videre. 
        // Lager to parametre hvor respons vil havne. Callbacks
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), //Successfull callback
            (err) => console.log(err) // Failure callback
        )

        return <div className="ui container comments">Latitude:</div>
    }
}


// Take the react component and show it on the screen
ReactDOM.render(
    // Komponenten man ønsker fremvist
    <App />,
    // Referanse til DOM-elementet i html-filen hvor den skal fremvises.
    document.querySelector('#root')
);