export default class Https {
  static async get(url: string, config = { method: "GET" }): Promise<any> {
    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();

      return await data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
