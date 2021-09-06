import Https from "@/scripts/helpers/Https";
import { Item } from "../types";

export const getWorksAll = async (): Promise<Item[]> => {
  return await Https.get("/api/works");
};
