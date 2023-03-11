import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { Spinner } from "@/components/ui";
import Footer from "./footer";
import Header from "./header";

import { Wrapper } from "./style";

export const LayoutContext = createContext();

const Layout = () => {
  const [loading, setLoading] = useState(true);

  return (
    <LayoutContext.Provider value={{ loading, setLoading }}>
      {loading && <Spinner />}
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </LayoutContext.Provider>
  );
};

export default Layout;
