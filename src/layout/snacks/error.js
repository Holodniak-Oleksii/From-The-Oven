/* eslint-disable react/display-name */
import { SnackbarContent } from "notistack";
import React, { forwardRef } from "react";
import { BiError } from "react-icons/bi";

import { Icon, Wrapper } from "./style";

const ErrorSnacks = forwardRef((props, ref) => {
  const { message } = props;

  return (
    <SnackbarContent ref={ref}>
      <Wrapper isError>
        <Icon>
          <BiError color='#fff' />
        </Icon>
        <div className='message'>{message}</div>
      </Wrapper>
    </SnackbarContent>
  );
});

export default ErrorSnacks;
