"use client";

import { NavBar } from "../ui/NavBar";
import { UtilityBar } from "../ui/UtilityBar";

const Header = () => {
  return (
    <>
      {/* Top Utility Bar - hidden on small screens, visible md+ */}
      <div className="hidden md:block">
        <UtilityBar />
      </div>

      {/* Main Navigation */}
      <NavBar />
    </>
  );
};

export default Header;