import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from "../../styles.module.css";

export const ImageGalleryItem = forwardRef (
    ({ smallUrl, largeUrl, desc, bodyScrollLock }, ref) => {
        const [displayModal, setDisplayModal] = useState(false);

        const toggleModal = () => {
            setDisplayModal(!displayModal);
            bodyScrollLock(displayModal);
    };

        return (
            <>
                <li ref={ref} className={css.ImageGalleryItem}>
                    <img src={smallUrl} alt={desc} onClick={toggleModal} />
                </li>
                {displayModal && (
                    <Modal
                        largeUrl={largeUrl}
                        desc={desc}
                        toggleModal={toggleModal}
                        displayModal={ displayModal} />
                )}
            </>
        );
    }
);

ImageGalleryItem.propTypes = {
    smallUrl: PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    largeUrl:PropTypes.string.isRequired,
}