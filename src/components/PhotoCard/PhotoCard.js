import AppLink from '../AppLink';
import Picture from '../Picture';
import './PhotoCard.css';

const PhotoCard = ({ imageUrl, meta, onClick, title, to, ...rest }) => {
  return (
    <AppLink className={'photo-card'} from={'/'} to={to} {...rest}>
      <div className={'photo-card-image-container '}>
        <div className={'photo-card-image'}>
          <Picture alt={title} url={imageUrl} style={{ objectFit: 'cover' }} />
        </div>
      </div>
      <div className={'photo-card-text'}>
        <h2 className={'photo-card-title'}>{title}</h2>
        <p className={'photo-card-meta'}>
          <svg
            className={'photo-card-meta-icon'}
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18ZM2 2V16H16V2H2ZM15 14H3L6 10L7 11L10 7L15 14ZM5.5 8C4.67157 8 4 7.32843 4 6.5C4 5.67157 4.67157 5 5.5 5C6.32843 5 7 5.67157 7 6.5C7 7.32843 6.32843 8 5.5 8Z" />
          </svg>
          {meta}
        </p>
      </div>
    </AppLink>
  );
};

export default PhotoCard;
