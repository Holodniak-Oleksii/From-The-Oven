import axios from "./base";

class Order {
  constructor() {
    this.addition = "orders";
  }
  async setNewOrder(data) {
    await axios.post(`/${this.addition}`, data);
  }
}

export default Order;
