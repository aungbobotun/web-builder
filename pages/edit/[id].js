import { useState } from 'react';
import templates from 'templates';
import Editor from 'layouts/Editor';
import Select from 'components/Select';
import styles from './Edit.module.scss';

export default function Edit({ theme }) {
  const [page, setPage] = useState('homepage');
  const [pages, setPages] = useState(theme.pages);
  const [base64s, setBase64s] = useState({});

  const handleChange = newSections => setPages({ ...pages, [page]: { sections: newSections } });

  const handleBase64sChange = newBase64 => setBase64s({ ...base64s, ...newBase64 });

  const handleSubmit = () => {
    const body = { theme: { ...theme, pages }, images: base64s };
    fetch(`/api/theme/${theme.id}`, { method: 'POST', body: JSON.stringify(body) })
      .then(res => {
        if (res.status === 200) {
          alert('Successfully submitted');
          //window.location.reload();
        } else {
          console.log(res.statusText);
          alert(`Error Status:${res.status}. Console from more`);
        }
      })
      .catch(error => {
        console.log(error);
        alert('Error occured! Console for error msg.');
      });
  };

  const sections = pages[page].sections;

  const Page = templates[page];

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Select value={page} options={Object.keys(theme.pages)} onChange={setPage} />
        <button className={styles.saveBtn} onClick={handleSubmit}>
          Save
        </button>
      </header>
      <Editor
        page={page}
        themeId={theme.id}
        base64s={base64s}
        sections={sections}
        className={styles.aside}
        onChange={handleChange}
        onBase64sChange={handleBase64sChange}
      >
        {({ getImgSrc, sections }) => (
          <main className={styles.main}>
            <Page sections={sections} getImgSrc={getImgSrc} base64s={base64s} />
          </main>
        )}
      </Editor>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http:localhost:3000/api/theme/${params.id}`);
  console.log(res);
  const theme = await res.json();

  return { props: { theme } };
}
