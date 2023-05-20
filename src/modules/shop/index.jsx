/* eslint-disable react-hooks/exhaustive-deps */
import Pizza from "@/api/pizza";
import Container from "@/components/containers";
import Paginate from "@/components/paginate/index";
import { ProductCard, ProductCardLoader } from "@/components/ui";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "./components/filter/index";
import FilterLoader from "./components/filter/loader";
import NotFound from "./components/not-found";
import { Flex, Wrapper } from "./style";

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
  const [pizzas, setPizzas] = useState({ loading: true, data: [] });
  const [page, setPage] = useState(1);

  const itemsPerPage = 15;

  useEffect(() => {
    const get = async () => {
      const api = new Pizza();
      const ingredients = await api.getIngredient();
      const categories = await api.getCategories();
      setSort({ ingredients: ingredients || [], categories: categories || [] });
    };
    get();
  }, []);

  useEffect(() => {
    const get = async () => {
      setPizzas((prev) => ({ ...prev, loading: true }));

      setParams({
        name: filter.query,
        ingredients: filter.ingredients.join(","),
        categories: filter.categories,
      });

      const api = new Pizza();
      const pizza = await api.getSearch(
        filter.query,
        filter.ingredients?.join(",") || "",
        filter.categories || "",
        itemsPerPage,
        page
      );
      setPizzas({ data: pizza || [], loading: false });
    };
    get();
  }, [filter.categories, filter.ingredients, filter.query, page]);

  useEffect(() => {
    setFilter({
      query: params.get("name") || "",
      ingredients: params.get("ingredients")
        ? params.get("ingredients").split(",")
        : [],
      categories: params.get("categories") || "",
    });
  }, [params]);

  const handlePageClick = (event) => {
    console.log("🚀 ~ file: index.jsx:73 ~ handlePageClick ~ event:", event);
    setPage(event.selected + 1);
  };

  return (
    <Container isMarginForHeader>
      <Wrapper>
        {!!sort.ingredients.length || !!sort.categories.length ? (
          <Filter setFilter={setFilter} filter={filter} sort={sort} />
        ) : (
          <FilterLoader />
        )}
        {!!pizzas.loading ? (
          <Flex>
            {[...Array(10)].map((x, i) => (
              <ProductCardLoader key={i} />
            ))}
          </Flex>
        ) : (
          <>
            {!pizzas.data?.result?.length ? (
              <NotFound />
            ) : (
              <>
                <Flex>
                  {pizzas.data?.result?.map((item) => (
                    <ProductCard item={item} key={item?.id} />
                  ))}
                </Flex>
              </>
            )}
          </>
        )}
        {!pizzas.loading && pizzas.data?.total / itemsPerPage > 1 && (
          <Paginate
            page={page}
            pageCount={Math.ceil(pizzas.data?.total / itemsPerPage)}
            handlePageClick={handlePageClick}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Shop;
