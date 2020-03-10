import React, {Component} from 'react'

class SearchBar extends Component {
    state = {term:""}

    updateTerm = (e) => {
        this.setState({term:e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.term)
        //TODO: CALLBACK TO PARENTCOMPONENT
        this.setState({term:""})
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={this.updateTerm}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
