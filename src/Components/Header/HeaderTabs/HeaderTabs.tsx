import * as React from "react";
import "./HeaderTabs.scss";
import { useSelector } from 'react-redux';
import { AppState } from '../../../Store/AppState';

// interface EmptyFunctionalProps {
//   someNumberProp: number;
// }

export const HeaderTabs = () => {
  const tabSelected = useSelector((state: AppState) => state.tabSelected);

  return (
    <div className="header-tabs">
    <button type="button" className="header-tabs-button" onClick={()=>{}}>
      IDF Incident List {tabSelected}
    </button>
    <button type="button" className="header-tabs-button" onClick={()=>{}}>
      Create New Incident
    </button>
  </div>
)};
