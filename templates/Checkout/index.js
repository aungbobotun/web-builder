import Buttons from '../components/Buttons';
import styles from './Checkout.module.scss';

const Checkout = ({ sections, base64s = {}, getImgSrc }) => {
  return (
    <div className={styles.root}>
      {sections.map(({ id, childs }) => {
        const src = getImgSrc(id);
        return (
          <section id={id} key={id} className={styles[id]}>
            <div className={styles.image} style={{ backgroundImage: `url(${base64s[src] || src})` }}></div>
            <article className={styles.content}>
              {childs.map(({ id, value, items }) => {
                const Tag = id === 'title' ? 'h1' : id === 'buttons' ? Buttons : 'div';
                const props =
                  id === 'description' ? { dangerouslySetInnerHTML: { __html: value } } : { children: value || items };

                return <Tag key={id} className={styles[id]} {...props} />;
              })}
            </article>
          </section>
        );
      })}
    </div>
  );
};

export default Checkout;
