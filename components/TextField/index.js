import styles from './TextField.module.scss';

const TextField = ({ value, label, onChange }) => {
  const handleChange = e => onChange({ value: e.target.value });
  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label}>{label}</label>
      <input type='text' value={value} onChange={handleChange} />
    </fieldset>
  );
};

export default TextField;
