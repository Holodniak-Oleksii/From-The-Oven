import { renderError } from "@/helpers/renderError";
import lget from "lodash/get";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Error, Input, Wrapper } from "./style";

const Field = ({
  rules,
  disabled,
  type = "text",
  inputMode = "text",
  placeholder,
  onChange,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = lget(errors, name);
  return (
    <Wrapper error={hasError}>
      {onChange ? (
        <Input
          type={type}
          inputMode={inputMode}
          disabled={disabled}
          className='field'
          placeholder={placeholder}
          {...register(name, {
            ...rules,
            onChange: (e) => {
              onChange(e);
            },
          })}
          onWheel={(e) => e.target.blur()}
        />
      ) : (
        <Input
          type={type}
          disabled={disabled}
          inputMode={inputMode}
          className='field'
          placeholder={placeholder}
          {...register(name, rules)}
          onWheel={(e) => e.target.blur()}
        />
      )}
      {hasError && <Error>{renderError(hasError, rules)}</Error>}
    </Wrapper>
  );
};

export default Field;
