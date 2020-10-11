import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';



class App extends React.Component {

    state = { images: [] }
    
    // Må fikse for å få riktig henvisning til riktig this. 
    onSearchSubmit = async (term) => {
        // this = onSubmit. 
        // term vilnå inneholder søkeordet fra SearchBar (state.term)
        const response = await unsplash.get('/search/photos', {
            params: { query: term },   
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