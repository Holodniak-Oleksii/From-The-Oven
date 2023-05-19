import axios from "./base";

class Order {
  constructor() {
    this.addition = "order";
  }
  async setNewOrder() {
    try {
      const { data } = await axios.post(`/${this.addition}/ingredients}`);
      return data?.result;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Order;
