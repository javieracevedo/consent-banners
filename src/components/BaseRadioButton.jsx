import React from 'react';
import PropTypes from 'prop-types';

export function BaseRadioButton({
  id, name, checked, onRadioButtonClicked, labelClass, children
}) {
  return (
    <label
      htmlFor={id}
      className={labelClass}
    >
      <input
        id={id}
        name={name}
        type="radio"
        className="hidden"
        checked={checked}
        onChange={onRadioButtonClicked}
      />
      {children}
    </label>
  );
}

BaseRadioButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onRadioButtonClicked: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  labelClass: PropTypes.string,
  children: PropTypes.element
};

BaseRadioButton.defaultProps = {
  checked: false,
  labelClass: '',
  children: null
};

export default BaseRadioButton;
