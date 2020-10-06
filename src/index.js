// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

function getButtonText(name) {
    return "Click here! " + name;
}

// Create a react component
//const App = () =>{
const App = function(){

    // const buttonText = 'Click Me!';
    //const array = [1,"Hei"];
    const object = {name: "Oscar", age: 55};

    return ( 
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" defaultValue={object.name} />
            <button style={{backgroundColor: 'red', color: 'white'}}>
                {getButtonText("Mette")}
            </button>
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