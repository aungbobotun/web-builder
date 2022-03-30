import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import styles from './ImagePicker.module.scss';

const ImagePicker = ({ label, image, src, onChange }) => {
  const inputRef = useRef(null);

  const buttons = [
    { name: 'upload', icon: <PencilIcon width='20' />, onClick: () => inputRef.current.click() },
    { name: 'trash', icon: <TrashIcon width='20' />, onClick: () => onChange('') },
  ];

  const handleImageUpload = e => {
    const file = e.target.files[0];
    // files.size will return image's size. use it for max image size validation
    if (file) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', e => onChange(e.target.result));
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label}>{label}</label>
      <input ref={inputRef} type='file' accept='image/png, image/jpeg' onChange={handleImageUpload} />
      <div className={styles.preview}>
        {
          <ul className={styles.cta}>
            {buttons.map(({ name, icon, onClick }) => (
              <li key={name} onClick={onClick}>
                {icon}
              </li>
            ))}
          </ul>
        }
        {image && <img src={src} alt='Section Image' />}
      </div>
    </fieldset>
  );
};

export default ImagePicker;
