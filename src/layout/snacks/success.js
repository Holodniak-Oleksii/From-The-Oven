/* eslint-disable react/display-name */
import { SnackbarContent } from "notistack";
import React, { forwardRef } from "react";
import { GrStatusGood } from "react-icons/gr";
import { Icon, Wrapper } from "./style";

const SuccessSnacks = forwardRef((props, ref) => {
  const { message } = props;
  return (
    <SnackbarContent ref={ref}>
      <Wrapper success>
        <Icon>
          <GrStatusGood stroke='#B1EA4D' />
        </Icon>
        <div className='message'>{message}</div>
      </Wrapper>
    </SnackbarContent>
  );
});

export default SuccessSnacks;
