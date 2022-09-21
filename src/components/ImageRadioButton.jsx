import React from 'react';
import PropTypes from 'prop-types';
import { BaseRadioButton } from './BaseRadioButton';

function getLabelClasses(isChecked) {
  const commonClasses = 'mr-4 mb-2 border rounded-lg p-2 pb-1 font-semibold cursor-pointer hover:opacity-70 select-none';
  const radioButtonCheckedClasses = isChecked ? 'bg-didomi-gray' : 'bg-didomi-light-blue';
  return `${commonClasses} ${radioButtonCheckedClasses}`;
}

function getCaptionClasses(isChecked) {
  const commonClasses = 'font-semibold text-xs';
  const radioButtonCheckedClasses = isChecked ? 'text-white' : 'text-didomi-gray';
  return `${commonClasses} ${radioButtonCheckedClasses}`;
}

export function ImageRadioButton(props) {
  return (
    <BaseRadioButton {...props} labelClass={getLabelClasses(props.checked)}>
      <figure className='flex flex-col items-center'>
        <img src={props.imagePath} alt={props.imageAlt} className='w-24 border-2 border-white rounded-lg' />
        <figcaption className={getCaptionClasses(props.checked)}>{props.children}</figcaption>
      </figure>
    </BaseRadioButton>
  );
}

ImageRadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onRadioButtonClicked: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.string,
  imagePath: PropTypes.string
};

ImageRadioButton.defaultProps = {
  checked: false,
  children: null,
  imagePath: ""
};

export default ImageRadioButton;
