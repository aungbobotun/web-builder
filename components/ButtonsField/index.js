import Checkbox from 'components/Checkbox';
import TextField from 'components/TextField';

const ButtonsField = ({ items, onChange }) => {
  const handleButtonChange = index => newButton => {
    const newItems = items.map((item, i) => (i === index ? { ...item, ...newButton } : item));
    onChange({ items: newItems });
  };

  return items.map(({ label, link, outline }, i) => {
    const I = i + 1;
    const handleChange = newValue => handleButtonChange(i)(newValue);

    return (
      <div key={i}>
        <TextField
          key='label'
          label={`Button ${I} label`}
          value={label}
          onChange={({ value }) => handleChange({ label: value })}
        />
        <TextField
          key='link'
          label={`Button ${I} link`}
          value={link}
          onChange={({ value }) => handleChange({ link: value })}
        />
        <Checkbox
          label='Use outline button style'
          checked={outline}
          onChange={checked => handleChange({ outline: checked })}
        />
      </div>
    );
  });
};

export default ButtonsField;
