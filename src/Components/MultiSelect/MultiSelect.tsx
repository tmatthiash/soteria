import * as React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

interface MultiSelectProps {
  onChange: (values: string[]) => void;
  initiallySelectedValues: string[];
  menuOptions: MultiselectMenuOption[];
  labelText: string;
}

export interface MultiselectMenuOption {
  label: string;
  value: string;
}

export const MultiSelect = (props: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] =
    useState(props.initiallySelectedValues);

  const toggleSelection = (valueSelected: string) => {
    if (selectedValues.includes(valueSelected)) {
      const filteredArray = selectedValues
        .filter(value => value !== valueSelected);
      setSelectedValues(filteredArray);
    } else {
      const selectionWithNewValue = [...selectedValues, valueSelected];
      setSelectedValues(selectionWithNewValue);
    }
  };

  const toggleIsOpen = () => {
    if (isOpen) {
      props.onChange(selectedValues);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className='multiselect-holder'>
      <button className='multiselect' type='button'
              onClick={toggleIsOpen}>{props.labelText}
      </button>
      {isOpen ? <div className='multiselect-dropdown'>
        {props.menuOptions.map((opt) => (
          <button key={uuid()}
                  type='button'
                  className={classNames('multiselect-dropdown-option',
                    selectedValues.includes(opt.value)
                      ? "multiselect-dropdown-option__selected" : "")}
                  onClick={() => toggleSelection(opt.value)}
          >
            {opt.label}
          </button>))}
      </div> : null}
    </div>);

};