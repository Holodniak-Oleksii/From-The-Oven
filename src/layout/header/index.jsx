import logo from "@/assets/images/logo.png";
import { IconMarket } from "@/components/icons";
import { LittleMobileOff } from "@/helpers/responsive";
import useOnScreen from "@/helpers/useOnScreen";
import { useBasket } from "@/store/selectors/index";
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigations } from "../data";
import {
  Flex,
  HeaderContainer,
  Item,
  Logo,
  Market,
  Navigations,
  NumberPhone,
  Wrapper,
} from "./style";

const Header = ({ setOpenOrder }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "72px");
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isTransparent = pathname === "/" || pathname === "/contact-us";
  const { amount } = useBasket();
  return (
    <>
      <div ref={ref} />
      <Wrapper scroll={isTransparent ? onScreen : false}>
        <HeaderContainer>
          <Flex>
            <Logo src={logo} alt='logo' />
            <LittleMobileOff>
              <Navigations>
                {navigations.map((item) => (
                  <Item scroll={isHome ? onScreen : false} key={item?.id}>
                    <Link to={item?.path}>{item?.title}</Link>
                  </Item>
                ))}
              </Navigations>
            </LittleMobileOff>
          </Flex>
          <Flex>
            <NumberPhone scroll={isHome ? onScreen : false}>
              +380 89 56 44 432
            </NumberPhone>
            <LittleMobileOff>
              <Market
                onClick={() => {
                  if (amount) setOpenOrder(true);
                }}
                amount={amount}
              >
                <IconMarket fill={"#d00e29"} />
              </Market>
            </LittleMobileOff>
          </Flex>
        </HeaderContainer>
      </Wrapper>
    </>
  );
};

export default Header;
