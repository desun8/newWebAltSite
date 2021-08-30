import Https from "@/scripts/helpers/Https1";
import { CardResponse } from "../types";

export const getWorksMain = async (): Promise<CardResponse[]> => {
  return await Https.get("/api/works/main");
};
