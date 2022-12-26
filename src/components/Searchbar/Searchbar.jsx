import { useState } from "react";
import PropTypes from 'prop-types';
import css from "../../styles.module.css"

export function Searchbar({ isLoading, onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');
    
    function handleSubmit (e) {
        e.preventDefault();
        onSubmit(searchQuery)
        setSearchQuery('');
    }

    const onInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={css.Button} disabled={isLoading}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={css.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    name="query"
                    value={searchQuery}
                    onChange={onInputChange}
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
    }


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}