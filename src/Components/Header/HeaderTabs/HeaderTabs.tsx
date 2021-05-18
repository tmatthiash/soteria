import * as React from 'react';
import './HeaderTabs.scss';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { AppState } from '../../../Store/AppState';

export const HeaderTabs = () => {
  const tabSelected = useSelector((state: AppState) => state.tabSelected);
  const dispatch = useDispatch();

  const clickHandler = (tab: 'list' | 'new') => {
    dispatch({ type: 'SET_TAB_SELECTED', tabSelected: tab });
  };

  return (
    <div className='header-tabs'>
      <button type='button'
              className={classNames('header-tabs-button', 'primary-button', tabSelected === 'list' ? 'header-tabs-button__selected' : '')}
              onClick={() => {
                clickHandler('list');
              }}>
        IDF Incident List
      </button>
      <button type='button'
              className={classNames('header-tabs-button', 'primary-button', tabSelected === 'new' ? 'header-tabs-button__selected' : '')}
              onClick={() => {
                clickHandler('new');
              }}>
        Create New Incident
      </button>
    </div>
  );
};