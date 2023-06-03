const currentEnv = process.env.NODE_ENV;

const DEV_API_URL = "https://light-eel-sundress.cyclic.app/api";
const PROD_API_URL = "https://light-eel-sundress.cyclic.app/api";

export const BASE_URL =
  currentEnv === "development" ? DEV_API_URL : PROD_API_URL;
