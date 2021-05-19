import * as React from 'react';
import './HomePage.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../Store/AppState';
import { ListView } from '../../Components/ListView/ListView';
import { NewView } from '../../Components/NewView/NewView';


export const HomePage = () => {
  const tabSelected = useSelector((state: AppState) => state.tabSelected);

  return (
    <div className='home-page'>
      {
        tabSelected === 'list' ? (<ListView />) : null
      }
      {
        tabSelected === 'new' ? (<NewView />) : null
      }
    </div>
  );
};