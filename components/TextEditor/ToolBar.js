import styles from './TextEditor.module.scss';
import BoldIcon from 'icons/Bold';
import ItalicIcon from 'icons/Italic';
import UnderlineIcon from 'icons/Underline';
import StrikeIcon from 'icons/Strike';

const MenuBar = ({ editor }) => {
  const actions = [
    {
      name: 'bold',
      icon: <BoldIcon />,
      onClick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      name: 'italic',
      icon: <ItalicIcon />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      name: 'underline',
      icon: <UnderlineIcon />,
      onClick: () => editor.commands.toggleUnderline(),
    },
    {
      name: 'strike',
      icon: <StrikeIcon />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
  ];
  return !editor ? null : (
    <ul className={styles.toolbar}>
      {actions.map(({ name, icon, onClick }) => (
        <li key={name} onClick={() => onClick()} className={editor.isActive(name) ? styles.active : ''}>
          {icon}
        </li>
      ))}
    </ul>
  );
};

export default MenuBar;
