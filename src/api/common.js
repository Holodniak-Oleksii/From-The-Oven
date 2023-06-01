import axios from "./base";

class Common {
  constructor() {
    this.addition = "login";
  }
  async login(info) {
    const { data } = await axios.post(`/${this.addition}`, info);
    return data;
  }
}

export default Common;
