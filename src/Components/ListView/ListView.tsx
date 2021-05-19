import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MultiSelect, MultiselectMenuOption } from '../MultiSelect/MultiSelect';
import { AppState } from '../../Store/AppState';
import { FilterSet } from '../../Types/FilterSet';

export const ListView = () => {
  const options: MultiselectMenuOption[] = [{
    label: 'base 1',
    value: 'base 1',
  }, {
    label: 'base 2',
    value: 'base 2',
  }, {
    label: 'base 3',
    value: 'base 3',
  }];
  const dispatch = useDispatch();
  const filterSet = useSelector((state: AppState) => state.filterSet);


  const handleBasesChange = (values: string[]) => {
    const newFilters: FilterSet = { ...filterSet, bases: values };
    dispatch({ type: 'SET_FILTER_SET', filterSet: newFilters });
  };

  return (
    <div className='list-view'>
      <MultiSelect
        onChange={handleBasesChange}
        initiallySelectedValues={filterSet.bases}
        labelText='helloooooooo'
        menuOptions={options} />
      {filterSet.bases}
    </div>
  );
};