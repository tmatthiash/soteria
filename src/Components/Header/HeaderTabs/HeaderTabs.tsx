import * as React from 'react';
import './HeaderTabs.scss';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { AppState } from '../../../Store/AppState';

// interface HeaderTabProps {
//   someNumberProp: number;
// }

export const HeaderTabs = () => {
  const tabSelected = useSelector((state: AppState) => state.tabSelected);


  return (
    <div className='header-tabs'>
      <button type='button'
              className={classNames('header-tabs-button', 'primary-button')}
              onClick={() => {
              }}>
        IDF Incident List {tabSelected}
      </button>
      <button type='button'
              className={classNames('header-tabs-button', 'primary-button')}
              onClick={() => {
              }}>
        Create New Incident
      </button>
    </div>
  );
};
