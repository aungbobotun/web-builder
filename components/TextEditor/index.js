import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import CharacterCount from '@tiptap/extension-character-count';
import { useEditor, EditorContent } from '@tiptap/react';
import ToolBar from './ToolBar';
import styles from './TextEditor.module.scss';

const TextEditor = ({ value, label, onChange }) => {
  const limit = 250;
  const editor = useEditor({
    content: value,
    extensions: [StarterKit, Underline, CharacterCount.configure({ limit })],
    onUpdate: ({ editor }) => onChange({ value: editor.getHTML() }),
  });

  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.label}>
        <label>{label}</label>
        <span className={styles.word_count}>
          {editor?.storage?.characterCount?.characters() || '0'}/{limit}
        </span>
      </div>
      <div className={styles.editor}>
        <ToolBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </fieldset>
  );
};

export default TextEditor;
