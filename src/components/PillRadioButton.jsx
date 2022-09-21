import React from 'react';
import PropTypes from 'prop-types';

function getCheckedClasses(isChecked) {
  const checkedClasses = 'text-white bg-didomi-gray ';
  const uncheckedClasses = 'text-didomi-gray bg-didomi-light-blue border';
  return isChecked ? checkedClasses : uncheckedClasses;
}

function getLabelClasses(isChecked) {
  const commonClasses = 'my-2 border rounded-full px-2 py-2 mr-2 font-semibold cursor-pointer hover:opacity-80 select-none ';
  return commonClasses.concat(getCheckedClasses(isChecked));
}

export function PillRadioButton({
  id, name, label, checked, onRadioButtonClicked
}) {
  return (
    <label
      htmlFor={id}
      className={getLabelClasses(checked)}
    >
      <input
        id={id}
        name={name}
        type="radio"
        className="hidden"
        checked={checked}
        onChange={onRadioButtonClicked}
      />
      {label}
    </label>
  );
}

PillRadioButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onRadioButtonClicked: PropTypes.func.isRequired
};

export default PillRadioButton;
