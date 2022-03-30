import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

const ShowIndicator = ({ show, onClick }) => {
  const Icon = show ? EyeIcon : EyeOffIcon;
  return <Icon onClick={onClick} />;
};

export default ShowIndicator;
