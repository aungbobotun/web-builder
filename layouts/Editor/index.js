import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { getImgSrc, filterHidden } from 'utils';
import styles from './Editor.module.scss';
import SectionForm from './SectionForm';
import SectionList from './SectionList';

const Editor = ({ themeId, page, base64s, sections, children, className, onChange, onBase64sChange }) => {
  const _getImgSrc = getImgSrc(themeId, page);
  const [active, setActive] = useState('');
  const activeSection = sections.filter(({ id }) => id === active)[0];

  const router = useRouter();
  useEffect(() => {
    setActive(window.location.hash.slice(1));
  }, [router.asPath]);

  const handleSectionChange = id => newSection => {
    const newSections = sections.map(section => (section.id === id ? { ...section, ...newSection } : section));
    onChange(newSections);
  };

  return (
    <>
      <ScrollArea.Root className={styles.root} scrollHideDelay={300}>
        <ScrollArea.Viewport className={styles.viewport}>
          <aside className={className}>
            <h1 className={styles.title}>{activeSection?.title || page}</h1>
            {activeSection ? (
              <SectionForm
                {...activeSection}
                src={_getImgSrc(activeSection.id)}
                base64s={base64s}
                onChange={handleSectionChange}
                onImageChange={onBase64sChange}
              />
            ) : (
              <SectionList sections={sections} onChange={handleSectionChange} />
            )}
          </aside>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation='vertical' className={styles.scrollbar}>
          <ScrollArea.Thumb className={styles.scrollthumb} />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      {children({ sections: filterHidden(sections), getImgSrc: _getImgSrc })}
    </>
  );
};

export default Editor;
