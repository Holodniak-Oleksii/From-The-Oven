import React from "react";
import { Wrapper, IconSearch, Category, Field, Chips } from "./style";
import { RiSearch2Line } from "react-icons/ri";
import { food } from "../../data";

const Filter = ({ setFilter, filter }) => {
  const handlerChooseItem = (item) => {
    setFilter((prev) => ({ ...prev, goods: [...filter.goods, item.name] }));
  };

  return (
    <Wrapper>
      <Field>
        <IconSearch>
          <RiSearch2Line color='#fff' size={24} />
        </IconSearch>
        <input type='search' className='search-filed' placeholder='Search...' />
      </Field>
      <Category>
        {food.map((item) => (
          <Chips
            active={filter.goods.includes(item.name)}
            onClick={() => handlerChooseItem(item)}
          >
            <img alt={item.name} src={item.image} className='food-icon' />
            <span className='food-name'>{item.name}</span>
          </Chips>
        ))}
      </Category>
    </Wrapper>
  );
};

export default Filter;
