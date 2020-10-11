import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component {

    state = { images: [] }
    
    // Må fikse for å få riktig henvisning til riktig this. 
    onSearchSubmit = async (term) => {
        // this = onSubmit. 
        // term vilnå inneholder søkeordet fra SearchBar (state.term)

        // Asyncronous request
        // Det vil ta noe tid fra requesten sendes til man får responsen. 
        // axios returnerer alltid en respons kalt promise. En promise er et objekt som vil gi oss en notification når noe jobb, f.eks netverks request, er ferdig. 

        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID zdDfllJi1Ej20Wd7pSk_jz5Zd8paaLtyxd_lsqrfYMc' 
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;