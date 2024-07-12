
import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c36fee3fabbd48cba4127e13811b5fd5"
  }
})
export default httpClient