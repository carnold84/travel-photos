import { useState } from 'react';
import { useCollections } from '../../../hooks';
import './SelectCollection.css';

const COLLECTION_TYPE = {
  CHOOSE: 'choose',
  NEW: 'new',
};

const SelectCollection = ({ onBack, onCancel, onSave }) => {
  const [collectionType, setCollectionType] = useState(COLLECTION_TYPE.NEW);
  const [collectionName, setCollectionName] = useState('');
  const collections = useCollections();
  const [selectedCollectionId, setSelectedCollectionId] = useState(
    collections[0]?.id
  );

  const onCollectionTypeChange = (evt) => {
    console.log(evt.target.value);
    setCollectionType(evt.target.value);
  };

  const onSelectCollection = (evt) => {
    console.log(evt.target.value);
    setSelectedCollectionId(evt.target.value);
  };

  const onCollectionNameChange = (evt) => {
    setCollectionName(evt.target.value);
  };

  const onSavePhotos = () => {
    if (collectionType === COLLECTION_TYPE.NEW) {
      onSave(null, collectionName);
    } else {
      onSave(selectedCollectionId, collectionName);
    }
  };

  return (
    <div>
      <h2>Choose Collection</h2>
      {collections.length > 0 && (
        <div>
          <label htmlFor="new-collection">New Collection:</label>
          <input
            checked={collectionType === COLLECTION_TYPE.NEW}
            id={'new-collection'}
            name={'collection'}
            onChange={onCollectionTypeChange}
            type={'radio'}
            value={COLLECTION_TYPE.NEW}
          />
          <label htmlFor="choose-collection">Choose Collection:</label>
          <input
            checked={collectionType === COLLECTION_TYPE.CHOOSE}
            id={'choose-collection'}
            name={'collection'}
            onChange={onCollectionTypeChange}
            type={'radio'}
            value={COLLECTION_TYPE.CHOOSE}
          />
        </div>
      )}
      {collectionType === COLLECTION_TYPE.NEW && (
        <div>
          <label htmlFor={'collection-name'}>Collection Name</label>
          <input onChange={onCollectionNameChange} type={'text'} />
        </div>
      )}
      {collectionType === COLLECTION_TYPE.CHOOSE && (
        <div>
          {collections.map((collection) => {
            return (
              <label htmlFor={collection.id} key={collection.id}>
                <input
                  checked={selectedCollectionId === collection.id}
                  id={collection.id}
                  name={'collections'}
                  onChange={onSelectCollection}
                  type={'radio'}
                  value={collection.id}
                />
                {collection.name}
              </label>
            );
          })}
        </div>
      )}
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onBack}>Back</button>
      <button onClick={onSavePhotos}>Save Photos</button>
    </div>
  );
};

export default SelectCollection;
