import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import Select from "react-select";
import { Icon, Wrapper, selectStyles } from "./style";
const SelectField = ({
  options,
  placeholder,
  value,
  disabled,
  defaultValue,
  setValue,
}) => {
  return (
    <Wrapper className='select-wrapper'>
      <Icon>
        <BiCategoryAlt color='#fc4734' />
      </Icon>
      <Select
        className={disabled ? "select-custom" : ""}
        placeholder={placeholder}
        value={options.filter((option) => option.value === value)[0]}
        options={options}
        onChange={({ value }) => {
          setValue(value);
        }}
        defaultValue={defaultValue ? defaultValue : options[0]}
        styles={selectStyles}
      />
    </Wrapper>
  );
};
export default SelectField;
