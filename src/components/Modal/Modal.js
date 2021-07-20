import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Layout from '../Layout';
import './Modal.css';

const Modal = ({ children, id, onClose, title }) => {
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
      animate={{ y: 0, transition: { ease: 'easeOut', duration: 0.3 } }}
      className={'modal'}
      exit={{ y: '100%', transition: { ease: 'easeIn', duration: 0.3 } }}
      initial={{ y: '100%' }}
      key={id}>
      <Layout onBack={onClose} title={title}>
        {children}
      </Layout>
    </motion.div>
  );
};

export default Modal;
