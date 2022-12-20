import { Component } from "react";
import PropTypes from 'prop-types';
import css from "../../styles.module.css"

export class Searchbar extends Component{
    state = {
        searchQuery: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchQuery)
        e.target.reset();
    }

    onInputChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.Button} disabled={this.props.isLoading}>
                        <span className={ css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        name="query"
                        value={this.state.searchQuery}
                        onChange={this.onInputChange}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}