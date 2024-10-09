export interface CostumerInterface {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  phone?: number;
  country?: string;
  country_id: number | string;
  password?: string;
}

export interface CountryInterface {
  id: number;
  name: string;
}

export interface LoaderInterface {
  costumerData: CostumerInterface;
  countriesData: CountryInterface[];
}
