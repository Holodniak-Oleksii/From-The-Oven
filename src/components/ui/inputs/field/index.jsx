import React from "react";
import { Input } from "./style";

const Field = ({ placeholder, halfBorder }) => {
  return (
    <Input halfBorder={halfBorder} type='text' placeholder={placeholder} />
  );
};

export default Field;
