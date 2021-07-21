import { usePhoto } from '../../hooks';
import Modal from '../../components/Modal';
import './PhotoModal.css';

const PhotoModal = ({ onClose, photoId }) => {
  const photo = usePhoto(photoId);

  let content;

  if (photo) {
    content = <img alt={''} src={photo?.url} />;
  }

  return (
    <Modal id={'photo-modal'} onClose={onClose} title={photo?.name}>
      {content}
    </Modal>
  );
};

export default PhotoModal;
