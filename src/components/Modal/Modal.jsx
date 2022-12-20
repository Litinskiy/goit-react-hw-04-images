import { Component } from "react";
import PropTypes from 'prop-types';
import css from "../../styles.module.css";

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.closeOnEsc)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeOnEsc)
    }

    closeOnEsc = (e) => {
        if (e.key === 'Escape') {
        this.props.toggleModal()
    }
}

    render() {
        const { toggleModal, desc, largeUrl} = this.props;

        return (
            <>
            <div className={css.Overlay} onClick={toggleModal}>
                <div className={css.Modal}>
                        <img src={largeUrl} alt={ desc} />
                </div>
                </div>
            </>    
        )
    }
}

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    desc: PropTypes.string,
    largeUrl: PropTypes.string.isRequired,
}