"use client";

import { Region } from "@medusajs/medusa";
import { useToggleState } from "@medusajs/ui";
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  HeaderContainer,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenuButton,
} from "@carbon/react";
import {
  Menu,
  Home,
  ShoppingBag,
  SearchAdvanced,
  User,
  ShoppingCart,
  BrightnessContrast,
} from "@carbon/icons-react";
import { useState } from "react";

interface SideMenuItemsObjectType {
  heading: string;
  src: string;
  icon: any;
}

const SideMenuItems: SideMenuItemsObjectType[] = [
  { heading: "Home", src: "/", icon: Home },
  { heading: "Store", src: "/store", icon: ShoppingBag },
  { heading: "Search", src: "/search", icon: SearchAdvanced },
  { heading: "Account", src: "/account", icon: User },
  { heading: "Cart", src: "/cart", icon: ShoppingCart },
];

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <HeaderContainer
      render={() => (
        <>
          <Header aria-label="Sense Stack">
            <button
              aria-label="Open menu"
              onClick={toggleSidebar}
              className="menu-button"
            >
              <Menu size={20} />
            </button>
            <HeaderName href="/" prefix="">
              Sense Stack
            </HeaderName>
            <HeaderNavigation aria-label="Sense Stack Navigation" className="!ml-2">
              {/* Add navigation items here if needed */}
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Brightness Contrast">
                <BrightnessContrast size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="User">
                <User size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
          <SideNav
            isFixedNav
            expanded={isExpanded}
            isChildOfHeader={true}
            aria-label="Side navigation"
            className="bg-gray-100 w-44"
          >
            <SideNavItems>
              {SideMenuItems.map((navLinkName: SideMenuItemsObjectType) => (
                <SideNavLink key={navLinkName.src} renderIcon={navLinkName.icon} href={navLinkName.src}>
                  {navLinkName.heading}
                </SideNavLink>
              ))}
            </SideNavItems>
          </SideNav>
        </>
      )}
    />
  );
};

export default SideMenu;
