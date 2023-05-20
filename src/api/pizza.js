import axios from "./base";

class Pizza {
  constructor() {
    this.addition = "pizza";
  }

  async getIngredient(limit = "") {
    try {
      const { data } = await axios.get(
        `/${this.addition}/ingredients?limit=${limit}`
      );
      return data?.result;
    } catch (error) {
      console.error(error);
    }
  }
  async getSinglePizza(id) {
    try {
      if (id) {
        const { data } = await axios.get(`/${this.addition}s/${id}`);
        return data?.result;
      } else {
        throw new Error("Pizza not found");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async getCategories(limit = "") {
    try {
      const { data } = await axios.get(
        `/${this.addition}/categories?limit=${limit}`
      );
      return data?.result;
    } catch (error) {
      console.error(error);
    }
  }
  async getSearch(
    name = "",
    ingredients = "",
    categories = "",
    limit = "",
    page = ""
  ) {
    try {
      const { data } = await axios.get(
        `/${this.addition}s/search?name=${name}&ingredients=${ingredients}&categories=${categories}&limit=${limit}&page=${page}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async getPizzasByLimit(limit = "") {
    try {
      const { data } = await axios.get(
        `/${this.addition}s/search?&limit=${limit}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Pizza;
