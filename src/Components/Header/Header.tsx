import * as React from 'react';
import './Header.scss';
import { ReactComponent as LogoIcon } from '../../Resources/Logo.svg';
import { ReactComponent as LogoTextIcon } from '../../Resources/LogoText.svg';
import { ReactComponent as UserIcon } from '../../Resources/User.svg';
import { HeaderTabs } from './HeaderTabs/HeaderTabs';


// interface EmptyFunctionalProps {
//   someNumberProp: number;
// }

export const Header = () => (
  <header className='header'>
    <div className='header-logo-area'>
      <LogoIcon className='header-logo-area-logo' />
      <LogoTextIcon className='header-logo-area-text' />
    </div>
    <HeaderTabs />
    <div className='header-user-area'>
      <UserIcon className='header-user-area-image' />
    </div>
  </header>
);
