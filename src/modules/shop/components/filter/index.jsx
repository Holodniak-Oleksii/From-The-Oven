import SelectField from "@/components/ui/inputs/select";
import transformOptions from "@/helpers/transformOptions";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Category, Chips, Field, Flex, IconSearch, Wrapper } from "./style";

const Filter = ({ setFilter, filter, sort }) => {
  const handlerChooseItem = (item) => {
    if (filter.ingredients.includes(item.name)) {
      setFilter((prev) => ({
        ...prev,
        ingredients: prev.ingredients.filter(
          (ingredient) => ingredient !== item.name
        ),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, item.name],
      }));
    }
  };

  return (
    <Wrapper>
      <Flex>
        <Field>
          <IconSearch>
            <RiSearch2Line color='#fff' size={24} />
          </IconSearch>
          <input
            type='search'
            className='search-filed'
            placeholder='Search...'
            value={filter.query}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, query: e.target.value }))
            }
          />
        </Field>
        <SelectField
          options={transformOptions(sort.categories)}
          placeholder={"Category"}
          value={filter.categories}
          setValue={(value) =>
            setFilter((prev) => ({
              ...prev,
              categories: value,
            }))
          }
        />
      </Flex>
      <Category>
        {sort.ingredients.map((item) => (
          <Chips
            key={item.id}
            active={filter.ingredients.includes(item.name)}
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
