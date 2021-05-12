import * as React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../Resources/temp-logo.svg"


// interface EmptyFunctionalProps {
//   someNumberProp: number;
// }

export const Header = () => (
    <div className="header">
      <div className="header-logo-area">
        <Logo className="header-logo-area-logo"/>
        <span className="header-logo-area-text">Soteria</span>
      </div>
      <div className="header-tabs-area">
        test
      </div>
      <div className="header-user-area">
        user
      </div>
    </div>
  );
