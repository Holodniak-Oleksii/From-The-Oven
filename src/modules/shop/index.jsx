/* eslint-disable react-hooks/exhaustive-deps */
import Pizza from "@/api/pizza";
import Container from "@/components/containers";
import { ProductCard } from "@/components/ui";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "./components/filter/index";
import { Grid, Wrapper } from "./style";

const Shop = () => {
  const [params, setParams] = useSearchParams();
  const [filter, setFilter] = useState({
    query: params.get("name") || "",
    ingredients: params.get("ingredients")
      ? params.get("ingredients").split(",")
      : [],
    categories: params.get("categories") || "",
  });

  const [sort, setSort] = useState({ ingredients: [], categories: [] });
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
      setParams({
        name: filter.query,
        ingredients: filter.ingredients.join(","),
        categories: filter.categories,
      });

      const api = new Pizza();
      const pizza = await api.getSearch(
        filter.query,
        filter.ingredients?.join(",") || "",
        filter.categories || ""
      );
      setPizzas(pizza);
      console.log("🚀 ~ file: index.jsx:18 ~ Shop ~ pizzas:", pizzas);
    };
    get();
  }, [filter.categories, filter.ingredients, filter.query]);

  useEffect(() => {
    setFilter({
      query: params.get("name") || "",
      ingredients: params.get("ingredients")
        ? params.get("ingredients").split(",")
        : [],
      categories: params.get("categories") || "",
    });
  }, [params]);

  return (
    <Container isMarginForHeader>
      <Wrapper>
        {!sort.ingredients.length || !sort.categories.length ? null : (
          <>
            <Filter setFilter={setFilter} filter={filter} sort={sort} />
            <Grid>
              {pizzas.map((item) => (
                <ProductCard item={item} key={item?.id} />
              ))}
            </Grid>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Shop;
