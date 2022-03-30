import Link from 'next/link';
import styles from './Buttons.module.scss';

const Buttons = ({ children, className }) => {
  return (
    <div className={`${styles.buttons} ${className}`}>
      {children
        .filter(({ label, link }) => label && link)
        .map(({ label, link, outline }, i) => (
          <Link href={link} key={i}>
            <a className={`${styles.button} ${outline && styles.outline}`}>{label}</a>
          </Link>
        ))}
    </div>
  );
};

export default Buttons;
