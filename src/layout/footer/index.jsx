import React from "react";
import { Link } from "react-router-dom";

import Container from "@/components/containers";
import {
  IconEmail,
  IconFacebook,
  IconInstagram,
  IconLocation,
  IconPhone,
  IconPinterest,
  IconTwitter,
  IconYouTube,
} from "@/components/icons";
import {
  DesktopOff,
  DesktopOn,
  LittleMobileOff,
  LittleMobileOn,
  TabletOff,
  TabletOn,
} from "@/helpers/responsive";

import { Content, Flex, Icon, Item, Wrapper } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <DesktopOff>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d73741.61097832532!2d139.61587935922503!3d35.469430404569955!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678551882768!5m2!1sru!2sua'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              title='location'
            />
          </DesktopOff>
          <Item>
            <h2>Contact</h2>
            <ul>
              <li>
                <IconLocation />
                National park,d1 588436,United States
              </li>
              <li>
                <IconPhone />
                +91 123 456 789
              </li>
              <li>
                <IconEmail />
                <a href='mailto: support@13spins.com'>support@13spins.com</a>
              </li>
            </ul>
          </Item>
          <Item>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/contact-us"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/shop?name=&ingredients=&categories="}>Shop</Link>
              </li>
            </ul>
          </Item>
          <Item>
            <h2>Find Us On</h2>
            <Flex>
              <Icon>
                <IconFacebook />
              </Icon>
              <Icon>
                <IconInstagram />
              </Icon>
              <Icon>
                <IconPinterest />
              </Icon>
              <Icon>
                <IconTwitter />
              </Icon>
              <Icon>
                <IconYouTube />
              </Icon>
            </Flex>
            <DesktopOff>
              <h2 className='mt'>Work time</h2>
              <span>From 10 am to 8 pm</span>
            </DesktopOff>
            <LittleMobileOff>
              <TabletOn>
                <h2 className='mt'>Work time</h2>
                <span>From 10 am to 8 pm</span>
              </TabletOn>
            </LittleMobileOff>
          </Item>
          <TabletOff>
            <DesktopOn>
              <Item>
                <h2>Work time</h2>
                <span>From 10 am to 8 pm</span>
              </Item>
            </DesktopOn>
          </TabletOff>
          <LittleMobileOn>
            <Item>
              <h2>Work time</h2>
              <span>From 10 am to 8 pm</span>
            </Item>
          </LittleMobileOn>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Footer;
