import React from 'react';
import PropTypes from 'prop-types';
import { BaseRadioButton } from './BaseRadioButton';


function getLabelClasses(isChecked) {
  const commonClasses = 'my-2 border rounded-full px-2 py-2 mr-2 font-semibold cursor-pointer hover:opacity-80 select-none ';
  const radioButtonCheckedClasses = isChecked ? 'text-white bg-didomi-gray' : 'text-didomi-gray bg-didomi-light-blue border';
  return `${commonClasses} ${radioButtonCheckedClasses}`;
}

export function PillRadioButton(props) {
  return (
    <BaseRadioButton
      {...props}
      labelClass={getLabelClasses(props.checked)}
    >
      {props.children}
    </BaseRadioButton>
  );
}

PillRadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onRadioButtonClicked: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.element
};

PillRadioButton.defaultProps = {
  checked: false,
  children: null
};

export default PillRadioButton;
