import axios from "./base";

class Order {
  constructor() {
    this.addition = "orders";
  }
  async setNewOrder(data) {
    await axios.post(`/${this.addition}`, data);
  }

  async getOrders(limit = "", page = "") {
    try {
      const { data } = await axios.get(
        `/${this.addition}?limit=${limit}&page=${page}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async deleteOrder(id) {
    await axios.delete(`/${this.addition}/${id}`);
  }
}

export default Order;
