import React from "react";
import MediaQuery from "react-responsive";

const MobileOn = (props) => <MediaQuery {...props} maxWidth={767} />;
const MobileOff = (props) => <MediaQuery {...props} minWidth={768} />;
const LittleMobileOn = (props) => <MediaQuery {...props} maxWidth={540} />;
const LittleMobileOff = (props) => <MediaQuery {...props} minWidth={541} />;
const DesktopOn = (props) => <MediaQuery {...props} maxWidth={1440} />;
const DesktopOff = (props) => <MediaQuery {...props} minWidth={1441} />;
const LittleDesktopOn = (props) => <MediaQuery {...props} maxWidth={1280} />;
const LittleDesktopOff = (props) => <MediaQuery {...props} minWidth={1281} />;
const TabletOff = (props) => <MediaQuery {...props} minWidth={1025} />;
const TabletOn = (props) => <MediaQuery {...props} maxWidth={1024} />;

export {
  DesktopOff,
  DesktopOn,
  MobileOn,
  MobileOff,
  TabletOff,
  TabletOn,
  LittleMobileOn,
  LittleMobileOff,
  LittleDesktopOn,
  LittleDesktopOff,
};
