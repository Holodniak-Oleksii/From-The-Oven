import Pizza from "@/api/pizza";
import Container from "@/components/containers";
import React, { useEffect, useState } from "react";
import Filter from "./components/filter/index";
import { Wrapper } from "./style";

const Shop = () => {
  const [filter, setFilter] = useState({
    query: "",
    ingredients: [],
    categories: "",
  });
  const [sort, setSort] = useState({ ingredients: [], categories: [] });
  console.log("🚀 ~ file: index.jsx:13 ~ Shop ~ sort:", sort);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const get = async () => {
      const api = new Pizza();
      const ingredients = await api.getIngredient();
      const categories = await api.getCategories();

      setSort({ ingredients, categories });
    };
    get();
  }, []);

  useEffect(() => {
    const get = async () => {
      const api = new Pizza();
      const pizza = await api.getSearch(
        filter.query,
        filter.ingredients,
        filter.categories?.name || ""
      );
      setPizzas(pizza);
    };
    get();
  }, [filter.categories, filter.ingredients, filter.query]);

  if (!sort.ingredients.length || !sort.categories.length) {
    return null;
  }
  return (
    <Container isMarginForHeader>
      <Wrapper>
        <Filter setFilter={setFilter} filter={filter} sort={sort} />
        {/* <Grid>
          {data.map((item) => (
            <ProductCard item={item} key={item?.id} />
          ))}
        </Grid> */}
      </Wrapper>
    </Container>
  );
};

export default Shop;
