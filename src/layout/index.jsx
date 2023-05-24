import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet, useLocation } from "react-router-dom";

import { Spinner } from "@/components/ui";
import Footer from "./footer";
import Header from "./header";

import OrderModal from "@/components/modals/orders";
import { SnackbarProvider } from "notistack";
import { LittleMobileOn } from "../helpers/responsive";
import { BottomNavigation } from "./bottom-navigation";
import ErrorSnacks from "./snacks/error";
import SuccessSnacks from "./snacks/success";
import { Wrapper } from "./style";

export const LayoutContext = createContext();

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const noLayout = pathname === "/pizza-admin";

  const isMobile = useMediaQuery({ minWidth: 768 });
  const [loading, setLoading] = useState(isHome ? isMobile : false);
  const [openOrder, setOpenOrder] = useState(false);
  if (noLayout) {
    return (
      <Wrapper>
        <Outlet />
      </Wrapper>
    );
  }
  return (
    <SnackbarProvider
      maxSnack={3}
      Components={{
        success: SuccessSnacks,
        error: ErrorSnacks,
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <LayoutContext.Provider value={{ loading, setLoading }}>
        {loading && <Spinner />}
        <LittleMobileOn>
          <BottomNavigation setOpenOrder={setOpenOrder} />
        </LittleMobileOn>
        <Header setOpenOrder={setOpenOrder} />
        <Wrapper>
          <Outlet />
        </Wrapper>
        <Footer />
        <OrderModal open={openOrder} close={() => setOpenOrder(false)} />
      </LayoutContext.Provider>
    </SnackbarProvider>
  );
};

export default Layout;
