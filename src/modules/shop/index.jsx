import React, { useState } from "react";
import { Wrapper, Grid } from "./style";
import Container from "@/components/containers";
import Filter from "./components/filter";
import { ProductCard } from "@/components/ui";
import { data } from "./../home/data";

const Shop = () => {
  const [filter, setFilter] = useState({
    query: "",
    price: "",
    goods: [],
  });

  return (
    <Container isMarginForHeader>
      <Wrapper>
        <Filter setFilter={setFilter} filter={filter} />
        <Grid>
          {data.map((item) => (
            <ProductCard item={item} key={item?.id} />
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Shop;
