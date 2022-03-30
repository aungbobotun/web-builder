import templates from 'templates';
import { filterHidden, getImgSrc } from 'utils';

export default function Page({ themeId, page, sections }) {
  const Page = templates[page];
  return <Page sections={sections} getImgSrc={getImgSrc(themeId, page)} />;
}

export async function getServerSideProps({ params }) {
  const page = `${params.page}page`;
  const res = await fetch(`http:localhost:3000/api/theme/${params.id}`);
  const theme = await res.json();

  return { props: { themeId: theme.id, page, sections: filterHidden(theme.pages[page].sections) } };
}
