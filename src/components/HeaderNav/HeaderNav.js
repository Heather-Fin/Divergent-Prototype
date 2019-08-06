import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

import { Link } from 'react-router-dom';

import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

const HeaderNav = () => (
  <Header aria-label="Diversity Manager Tool">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBM">
      Diversity Hub
    </HeaderName>
    <HeaderNavigation aria-label="Diversity Manager Tool">
      {/* <HeaderMenuItem element={Link} to="/resource">
        Resources
      </HeaderMenuItem> */}
      <HeaderMenuItem element={Link} to="/talent-pool">
        Talent Pool Suggestions
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default HeaderNav;
