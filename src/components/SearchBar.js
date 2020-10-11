import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};


    onFormSubmit = (event) => {
        // Ønsker ikke å submit the form automatisk. Vil ikke oppdatere siden som er default. 
        event.preventDefault();

        // onSubmit proppen til App vil nå få innholdet som er i state.term (Søkeordet)
        this.props.onSubmit(this.state.term);
    }

    render () {
        // onSubmit: Ved enter vil onFormSubmit kalles på.
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