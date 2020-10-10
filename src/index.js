// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        // Kan ta tid før man får svar. Men koden går videre. 
        // Lager to parametre hvor respons vil havne. Callbacks. Callback-function
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        )
    }

    renderContent () {

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
                
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        
        return <Loader message="Finner din posisjon"/>;
    }
    

    // React sier vi må definere render! (Feiler ellers)
    render() {
        return (
            <div className="border">
                {this.renderContent()}
            </div>
        )
    }
}


// Take the react component and show it on the screen
ReactDOM.render(
    // Komponenten man ønsker fremvist
    <App />,
    // Referanse til DOM-elementet i html-filen hvor den skal fremvises.
    document.querySelector('#root')
);