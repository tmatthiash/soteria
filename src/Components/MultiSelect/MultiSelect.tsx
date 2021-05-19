import * as React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

interface MultiSelectProps {
  // eslint-disable-next-line react/no-unused-prop-types
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
  const [selectedValues, setSelectedValues] = useState(props.initiallySelectedValues);

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
    if(isOpen){
      props.onChange(selectedValues);
    }
    setIsOpen(!isOpen)
  }

  return (
    <div className='multiselect-holder'>
      <button className='multiselect' type='button'
              onClick={toggleIsOpen}>{props.labelText}
      </button>
      {isOpen ? <div className='multiselect-dropdown'>
        {props.menuOptions.map((opt) => (
          <button key={uuid()}
                  type='button'
                  className='multiselect-dropdown-option'
                  onClick={() => toggleSelection(opt.value)}
          >
            {opt.label + (selectedValues.includes(opt.value) ? ' yes' : ' no')}
          </button>))}
      </div> : null}
    </div>);

};