import { useEffect } from "react";
import PropTypes from 'prop-types';
import css from "../../styles.module.css";

export function Modal({ largeUrl, desc, toggleModal }) {
    useEffect(() => {
        const closedOnEsc = e => {
            if (e.code === 'Escape') {
                toggleModal();
            }
        };

        document.addEventListener('keydown', closedOnEsc);
        return () => document.removeEventListener('keydown', closedOnEsc);
    }, [toggleModal]);




    return (
        <>
            <div className={css.Overlay} onClick={toggleModal}>
                <div className={css.Modal}>
                    <img src={largeUrl} alt={desc} />
                </div>
            </div>
        </>
    )

        
} 


Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    desc: PropTypes.string,
    largeUrl: PropTypes.string.isRequired,
}