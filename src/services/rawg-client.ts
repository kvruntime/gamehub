import { AxiosRequestConfig } from "axios"
import { FetchResponse } from "../data"
import httpClient from "./http-client"

export default class RawgClient<T> {
  private endpoint!: string
  constructor(endpoint: string) { this.endpoint = endpoint }

  getAll = (requests?: AxiosRequestConfig) => {
    return httpClient.get<FetchResponse<T>>(this.endpoint, { ...requests }).then(res => res.data)
  }

  get = (id:string) => {
    return httpClient.get<T>(this.endpoint+"/"+id).then(res=>res.data)
  }
}