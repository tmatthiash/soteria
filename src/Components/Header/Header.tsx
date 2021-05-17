import * as React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../Resources/Logo.svg";
import { ReactComponent as LogoText } from "../../Resources/LogoText.svg";
import { ReactComponent as User } from "../../Resources/User.svg";
import { HeaderTabs } from './HeaderTabs/HeaderTabs';


// interface EmptyFunctionalProps {
//   someNumberProp: number;
// }

export const Header = () => (
    <div className="header">
      <div className="header-logo-area">
        <Logo className="header-logo-area-logo"/>
        <LogoText className="header-logo-area-text"/>
      </div>
      <HeaderTabs />
      <div className="header-user-area">
          <User className="header-user-area-image"/>
      </div>
    </div>
  );
