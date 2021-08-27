export default class Https {
  static async get(url: string, config = { method: "GET" }): Promise<any> {
    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("🚀 ~ file: Https.ts ~ line 6 ~ Https ~ get ~ data", data);

      if (data?.success === false) {
        throw new Error(`Ошибка на сервере: ${data.message || ""}`);
      }

      return await data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
