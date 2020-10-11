import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};

    // Metoden vil kjøres med Event-parameter sendt med automatisk
    // Et objekt som inneholder informasjon om eventen som nettopp skjedde. 
    // Blant annet value
    //onInputChange(event) {
        //console.log(event.target.value);
    //}

    onFormSubmit(event) {
        // Ønsker ikke å submit the form automatisk. Vil ikke oppdatere siden som er default. 
        event.preventDefault();

        // console.log(this.state.term);
    }

    render () {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(event) =>this.setState({ term: event.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;