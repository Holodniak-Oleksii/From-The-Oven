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
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async getCategories(limit = "") {
    try {
      const { data } = await axios.get(
        `/${this.addition}/categories?limit=${limit}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async getSearch(name = "", ingredients = "", categories = "") {
    try {
      const { data } = await axios.get(
        `/${this.addition}s/search?name=${name}&ingredients=${ingredients}&categories=${categories}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Pizza;
