import * as React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../Resources/Logo.svg"
import { HeaderTabs } from './HeaderTabs/HeaderTabs';


// interface EmptyFunctionalProps {
//   someNumberProp: number;
// }

export const Header = () => (
    <div className="header">
      <div className="header-logo-area">
        <Logo className="header-logo-area-logo"/>
        <span className="header-logo-area-text">Soteria</span>
      </div>
      <HeaderTabs />
      <div className="header-user-area">
        user
      </div>
    </div>
  );
