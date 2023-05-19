import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: JSON.parse(localStorage.getItem("pizzas")) || [],
  score: Number(localStorage.getItem("score")) || 0,
  amount: Number(localStorage.getItem("amount")) || 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const PRODUCT = action.payload;
      const PIZZAS_ARR = state.pizzas;
      const EXIST_IN_ARR = PIZZAS_ARR.find(
        (pizza) => pizza.name === PRODUCT.name && pizza.size === PRODUCT.size
      );
      if (EXIST_IN_ARR) {
        const updatedPizzas = PIZZAS_ARR.map((pizza) => {
          if (pizza.name === PRODUCT.name && pizza.size === PRODUCT.size) {
            return {
              ...pizza,
              count: (pizza.count += 1),
              price: (pizza.price += pizza.singlePrice),
            };
          }
          return pizza;
        });
        state.pizzas = updatedPizzas;
      } else {
        state.pizzas.push({ ...PRODUCT, count: 1, singlePrice: PRODUCT.price });
      }

      state.score = state.pizzas.reduce(
        (total, pizza) => total + pizza.price,
        0
      );
      state.amount = state.pizzas.reduce(
        (total, pizza) => total + pizza.count,
        0
      );
      localStorage.setItem("pizzas", JSON.stringify(state.pizzas));
      localStorage.setItem("score", state.score);
      localStorage.setItem("amount", state.amount);
    },
    plusProduct: (state, action) => {
      const PRODUCT = action.payload;
      const PIZZAS_ARR = state.pizzas;
      const updatedPizzas = PIZZAS_ARR.map((pizza) => {
        if (pizza.name === PRODUCT.name && pizza.size === PRODUCT.size) {
          return {
            ...pizza,
            count: (pizza.count += 1),
            price: (pizza.price += pizza.singlePrice),
          };
        }
        return pizza;
      });
      state.pizzas = updatedPizzas;
      state.score = state.pizzas.reduce(
        (total, pizza) => total + pizza.price,
        0
      );
      state.amount = state.pizzas.reduce(
        (total, pizza) => total + pizza.count,
        0
      );
      localStorage.setItem("pizzas", JSON.stringify(state.pizzas));

      localStorage.setItem("score", state.score);
      localStorage.setItem("amount", state.amount);
    },
    minusProduct: (state, action) => {
      const PIZZAS_ARR = state.pizzas;
      const PRODUCT = action.payload;

      if (PRODUCT.count > 1) {
        const updatedPizzas = PIZZAS_ARR.map((pizza) => {
          if (pizza.name === PRODUCT.name && pizza.size === PRODUCT.size) {
            return {
              ...pizza,
              count: pizza.count - 1,
              price: pizza.price - pizza.singlePrice,
            };
          }
          return pizza;
        });
        state.pizzas = updatedPizzas;
      } else {
        state.pizzas = PIZZAS_ARR.filter(
          (pizza) =>
            !(pizza.name === PRODUCT.name && pizza.size === PRODUCT.size)
        );
      }

      state.score = state.pizzas.reduce(
        (total, pizza) => total + pizza.price,
        0
      );
      state.amount = state.pizzas.reduce(
        (total, pizza) => total + pizza.count,
        0
      );
      localStorage.setItem("pizzas", JSON.stringify(state.pizzas));
      localStorage.setItem("score", state.score);
      localStorage.setItem("amount", state.amount);
    },
    clearProducts: (state, action) => {
      state.pizzas = [];
      state.score = 0;
      state.amount = 0;
      localStorage.setItem("pizzas", JSON.stringify(state.pizzas));
      localStorage.setItem("score", state.score);
      localStorage.setItem("amount", state.amount);
    },
  },
});

export default basketSlice;
