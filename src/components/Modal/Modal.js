import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, onClose, title }) => {
  useEffect(() => {
    const onKeyDown = (evt) => {
      if (evt.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="image-modal"
      initial={{ y: '100%' }}
      animate={{ y: 0, transition: { ease: 'easeOut', duration: 0.5 } }}
      exit={{ y: '100%', transition: { ease: 'easeIn', duration: 0.5 } }}>
      <header className={'header'}>
        {<span>{title}</span>}
        <button className={'close-btn'} onClick={onClose}>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z" />
          </svg>
        </button>
      </header>
      <div className={'content'}>{children}</div>
    </motion.div>
  );
};

export default Modal;
