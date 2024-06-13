// components/Navbar.js
"use client";

import { Header, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction } from "@carbon/react";
import { BrightnessContrast, User } from "@carbon/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Render nothing on the first render to avoid hydration mismatch
  }

  return (
    <Header aria-label="Sense Stack" className="">
      <HeaderName href="/" prefix="">
        Sense Stack
      </HeaderName>
      <HeaderNavigation aria-label="Sense Stack Navigation" className="!ml-10 ">
        
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
  );
};

export default Navbar;
