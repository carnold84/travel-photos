import { useState } from 'react';
import Modal from '../Modal';
import './UploadModal.css';

const UploadModal = ({ data, onClose }) => {
  const [values, setValues] = useState({
    images: [],
  });
  return (
    <Modal onClose={onClose} title={'Upload Photos'}>
      <input multiple={true} type={'file'} />
    </Modal>
  );
};

export default UploadModal;
