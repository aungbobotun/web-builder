export const getImgSrc = (themeId, pageId) => sectionId => `/images/${themeId}/${pageId}.${sectionId}`;

export const filterHidden = sections => {
  const byShow = ({ show }) => show;
  return sections.filter(byShow).map(({ childs, ...rest }) => ({ ...rest, childs: childs.filter(byShow) }));
};
