import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/outline';
import Accordion from 'components/Accordion';
import ShowIndicator from 'components/ShowIndicator';
import styles from './Editor.module.scss';

const SectionList = ({ sections, onChange }) => (
  <Accordion items={sections} headerKey='title' onChange={onChange}>
    {({ id: sectionId, childs, onChange }) => {
      const handleChange = (newChild, id) => {
        const newChilds = childs.map(child => (child.id === id ? { ...child, ...newChild } : child));
        onChange({ childs: newChilds });
      };
      return (
        <ul>
          {childs.map(({ id, label, show, value }) => (
            <li key={id} className={styles.overviewListItem}>
              <p dangerouslySetInnerHTML={{ __html: value || label }} />
              <span>
                <ShowIndicator show={show} onClick={() => handleChange({ show: !show }, id)} />
                <Link href={`#${sectionId}`} passHref>
                  <a>
                    <ChevronRightIcon />
                  </a>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      );
    }}
  </Accordion>
);

export default SectionList;

function captilize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
