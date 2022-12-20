import PropTypes from 'prop-types';
import css from "../../styles.module.css"

export function Button({ onLoadMore }) {
    return (
        <button className={css.Button} type="button" onClick={onLoadMore}>Load More</button>
    )
}

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}