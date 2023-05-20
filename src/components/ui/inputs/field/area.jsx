import { renderError } from "@/helpers/renderError";
import lget from "lodash/get";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Error, TextArea, Wrapper } from "./style";

const TextAreaForm = ({
  rules,
  disabled,
  type = "text",
  inputMode = "text",
  placeholder,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = lget(errors, name);
  return (
    <Wrapper error={hasError}>
      <TextArea
        type={type}
        disabled={disabled}
        inputMode={inputMode}
        placeholder={placeholder}
        {...register(name, rules)}
        onWheel={(e) => e.target.blur()}
      />

      {hasError && <Error>{renderError(hasError, rules)}</Error>}
    </Wrapper>
  );
};

export default TextAreaForm;
