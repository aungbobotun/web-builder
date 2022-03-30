import styles from './Checkbox.module.scss';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <fieldset className={styles.fieldset}>
      <i className={`${styles.icon} ${checked && styles.checked}`} onClick={() => onChange(!checked)} />
      <label>{label}</label>
    </fieldset>
  );
};

export default Checkbox;
