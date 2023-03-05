import React from "react";
import { Link } from "react-router-dom";
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
import { IconMarket } from "../../components/icons";

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Flex>
          <Logo src={logo} alt='logo' />
          <Navigations>
            {navigations.map((item) => (
              <Item key={item?.id}>
                <Link to={item?.path}>{item?.title}</Link>
              </Item>
            ))}
          </Navigations>
        </Flex>
        <Flex>
          <NumberPhone>+380 89 56 44 432</NumberPhone>
          <Market>
            <IconMarket fill={"#d00e29"} />
          </Market>
        </Flex>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
