import Accordion from 'components/Accordion';
import TextField from 'components/TextField';
import ButtonsField from 'components/ButtonsField';
import TextEditor from 'components/TextEditor';
import ImagePicker from 'components/ImagePicker';

const SectionForm = ({ id, src, image, base64s, childs, onChange, onImageChange }) => {
  const handleChange = newValue => onChange(id)(newValue);

  const handleChildChange = id => newChild => {
    const newChilds = childs.map(child => (child.id === id ? { ...child, ...newChild } : child));
    handleChange({ childs: newChilds });
  };

  const handleImageChange = base64 => {
    onImageChange({ [src]: base64 });
    handleChange({ image: !!base64 });
  };

  return (
    <>
      <ImagePicker src={base64s[src] || src} image={image} label='Section Image' onChange={handleImageChange} />
      <Accordion items={childs} headerKey='label' open={true} onChange={handleChildChange}>
        {({ id, onChange, ...rest }) => {
          const Tag = id === 'buttons' ? ButtonsField : id === 'description' ? TextEditor : TextField;
          return <Tag key={id} {...rest} onChange={onChange} />;
        }}
      </Accordion>
    </>
  );
};

export default SectionForm;
