// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    

    // Ikke required, men tilhører js
    constructor(props) {
        super(props);

        // State objekt som knyttes til komponenten. Setter til null da vi ikke vet hva det blir enda. 
        // Eneste gang man gjør en direkte assignment til state. Ellers er det alltid! setState() som benyttes. 
        this.state = { lat: null, errorMessage: '' };

        // Kan ta tid før man får svar. Men koden går videre. 
        // Lager to parametre hvor respons vil havne. Callbacks. Callback-function
        window.navigator.geolocation.getCurrentPosition(
            (position) => { // Successfull error
                // Kaller på setState for å endre staten! Komponenten vil da oppdatere seg. 
                this.setState({ lat: position.coords.latitude });
            },
            (err) => { // Failure callback
                this.setState({ errorMessage: err.message });
            }
        )

    }
    
    // React sier vi må definere render! (Feiler ellers)
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
                
        if(!this.state.errorMessage && this.state.lat){
            return <div>Lat: {this.state.lat}</div>;
        }
        
        return <div>Loading . . .</div>;
    }
}


// Take the react component and show it on the screen
ReactDOM.render(
    // Komponenten man ønsker fremvist
    <App />,
    // Referanse til DOM-elementet i html-filen hvor den skal fremvises.
    document.querySelector('#root')
);