import React from "react";
import { Input } from "./style";

const Index = ({ placeholder, halfBorder }) => {
  return (
    <Input
      className='field'
      halfBorder={halfBorder}
      type='text'
      placeholder={placeholder}
    />
  );
};

export default Index;
