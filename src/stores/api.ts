import { defineStore } from "pinia"
import { MainApi } from "../services/api"
import type { Countries } from "../types/apiData"

export type RootState = {
  countriesData: Countries.RootObject[]
}

export const useApi = defineStore({
  id: "api",
  state: () => {
    return {
      countriesData: [] as Countries.RootObject[],
      countryData: [] as Countries.RootObject[],
    }
  },
  actions: {
    async fetchCountries() {
      try {
        const api = MainApi.getInstance()
        this.countriesData = await api.getCountries()
      } catch (error) {
        // showTooltip(error)
        // let the form component display the error
        console.error(error)
        return error
      }
    },
    async fetchCountry(name: string | string[]) {
      try {
        const api = MainApi.getInstance()
        this.countryData = await api.getCountry(name)
      } catch (error) {
        // showTooltip(error)
        // let the form component display the error
        console.error(error)
        return error
      }
    },
  },
})
