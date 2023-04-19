import { useMediaQuery } from "react-responsive";
import { createContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Spinner } from "@/components/ui";
import Footer from "./footer";
import Header from "./header";

import { Wrapper } from "./style";
import { BottomNavigation } from "./bottom-navigation";
import { LittleMobileOn } from "../helpers/responsive";

export const LayoutContext = createContext();

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isMobile = useMediaQuery({ minWidth: 768 });
  const [loading, setLoading] = useState(isHome ? isMobile : false);

  return (
    <LayoutContext.Provider value={{ loading, setLoading }}>
      {loading && <Spinner />}
      <LittleMobileOn>
        <BottomNavigation />
      </LittleMobileOn>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </LayoutContext.Provider>
  );
};

export default Layout;
