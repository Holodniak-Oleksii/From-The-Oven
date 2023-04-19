import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigations } from "../data";
import {
  Wrapper,
  Navigations,
  HeaderContainer,
  Item,
  Logo,
  Flex,
  Market,
  NumberPhone,
} from "./style";
import logo from "@/assets/images/logo.png";
import { IconMarket } from "@/components/icons";
import useOnScreen from "@/helpers/useOnScreen";
import { LittleDesktopOff, LittleMobileOff } from "@/helpers/responsive";

const Header = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "72px");
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <>
      <div ref={ref} />
      <Wrapper onScreen={isHome ? onScreen : false}>
        <HeaderContainer>
          <Flex>
            <Logo src={logo} alt='logo' />
            <LittleMobileOff>
              <Navigations>
                {navigations.map((item) => (
                  <Item onScreen={isHome ? onScreen : false} key={item?.id}>
                    <Link to={item?.path}>{item?.title}</Link>
                  </Item>
                ))}
              </Navigations>
            </LittleMobileOff>
          </Flex>
          <Flex>
            <NumberPhone onScreen={isHome ? onScreen : false}>
              +380 89 56 44 432
            </NumberPhone>
            <LittleDesktopOff>
              <Market>
                <IconMarket fill={"#d00e29"} />
              </Market>
            </LittleDesktopOff>
          </Flex>
        </HeaderContainer>
      </Wrapper>
    </>
  );
};

export default Header;
