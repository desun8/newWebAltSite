import Https from "@/scripts/helpers/Https";
import { Card } from "../types";

export const getWorksAll = async (): Promise<Card[]> => {
  return await Https.get("/api/works");
};
