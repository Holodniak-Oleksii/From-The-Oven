import axios from "./base";

class Contact {
  constructor() {
    this.addition = "contacts";
  }
  async setNewContact(data) {
    await axios.post(`/${this.addition}`, data);
  }
}

export default Contact;
