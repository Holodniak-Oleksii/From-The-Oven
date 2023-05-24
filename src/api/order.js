import axios from "./base";

class Order {
  constructor() {
    this.addition = "orders";
  }
  async setNewOrder(data) {
    await axios.post(`/${this.addition}`, data);
  }
  async getOrders(limit = "") {
    try {
      const { data } = await axios.get(`/${this.addition}?limit=${limit}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Order;
