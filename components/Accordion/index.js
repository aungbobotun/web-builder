import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import ShowIndicator from 'components/ShowIndicator';
import styles from './Accordion.module.scss';

const AccordionItem = ({ show, open = false, header, children, onChange }) => {
  const [expand, setExpand] = useState(open);

  return (
    <li className={`${styles.item} ${!expand && styles.shrink}`}>
      <div className={styles.header}>
        <h2>{header}</h2>
        <span>
          <ShowIndicator show={show} onClick={() => onChange({ show: !show })} />
          <ChevronDownIcon onClick={() => setExpand(v => !v)} className={styles.trigger} />
        </span>
      </div>
      {expand ? children(onChange) : ''}
    </li>
  );
};

const Accordion = ({ items, open, children, headerKey, onChange }) => (
  <ul className={styles.root}>
    {items.map(item => (
      <AccordionItem key={item.id} open={open} show={item.show} header={item[headerKey]} onChange={onChange(item.id)}>
        {onChange => children({ ...item, onChange })}
      </AccordionItem>
    ))}
  </ul>
);

export default Accordion;
