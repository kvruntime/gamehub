
import axios from "axios";


const httpClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_KEY
  }
})
export default httpClient