import axios from "axios";

const apiBreweries = axios.create({
  baseURL: "https://api.openbrewerydb.org/v1/breweries",
});

export const getBreweries = async () => {
  try {
    const response = await apiBreweries.get("/", {
      params: {
        per_page: 5,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching breweries:", error);
    throw error;
  }
};

export const getBreweriesInCalifornia = async () => {
  try {
    const response = await apiBreweries.get("/", {
      params: {
        per_page: 5,
        by_state: "california",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching breweries in California:", error);
    throw error;
  }
};

export const getBreweryById = async (id: string) => {
  try {
    const response = await apiBreweries.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching brewery with ID ${id}:`, error);
    throw error;
  }
};
