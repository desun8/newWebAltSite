import Https from "@/scripts/helpers/Https1";
import { Card } from "../types";

export const getWorksAll = async (): Promise<Card[]> => {
  return await Https.get("/api/works");
};
