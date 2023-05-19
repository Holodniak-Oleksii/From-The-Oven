import { renderError } from "@/helpers/renderError";
import lget from "lodash/get";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styled, { css } from "styled-components";
import { Error } from "../field/style";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .phone-container {
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 6px;
  }
  .phone-input {
    width: 100% !important;
    border: none !important;
    padding-left: 50px !important;
    padding-top: 23px !important;
    padding-bottom: 23px !important;
  }

  .phone-button {
    width: 30px;
    background-color: #fff !important;
    height: 46px;
    border: 1px solid #fff !important;
    border-radius: 6px;
  }
  ${({ error }) =>
    error &&
    css`
      .phone-container {
        border: 1px solid #fc4734 !important;
      }
    `}
`;

const PhoneField = ({ rules, name }) => {
  const {
    getValues,
    formState: { errors },
    setValue,
    clearErrors,
    register,
    onBlur,
  } = useFormContext();
  const hasError = lget(errors, name);
  const [phone, setPhone] = useState();
  return (
    <Wrapper error={hasError}>
      <input
        hidden
        name={name}
        onBlur={onBlur}
        value={phone}
        {...register(name, {
          ...rules,
        })}
      />

      <PhoneInput
        country={"ua"}
        containerClass='phone-container'
        inputClass={"phone-input"}
        buttonClass='phone-button'
        value={getValues(name)}
        onChange={(phone) => {
          setPhone(phone);
          clearErrors(name);
          setValue(name, phone);
        }}
      />
      {hasError && <Error>{renderError(hasError, rules)}</Error>}
    </Wrapper>
  );
};

export default PhoneField;
