import HttpClient from '../plugins/httpClient';
import type { Countries } from '../types/apiData';

export class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }

    return this.classInstance;
  }


  public getCountries = () => this.instance.get<Countries.RootObject[]>('/all');
  
  public getCountry = (name: string | string[]) => this.instance.get<Countries.RootObject>(`/name/${name}`);
}
