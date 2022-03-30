import styles from './Select.module.scss';

const Select = ({ value, options, onChange }) => (
  <select value={value} className={styles.select} onChange={e => onChange(e.target.value)}>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);
export default Select;
