export default class PaySystems {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.paysystems.buzz";
  }

  async createPayment(data) {
    const response = await fetch(`${this.baseUrl}/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(data)
    });

    return response.json();
  }

  async getPayment(id) {
    const response = await fetch(`${this.baseUrl}/payments/${id}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });

    return response.json();
  }
}
