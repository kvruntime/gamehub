import { useEffect, useState } from "react";
import httpClient from "../services/http-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import useHook from "./generic-hook";
import { Genre } from "../data";

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string,
  parent_platforms: { platform: Platform }[]
  metacritic: number
}



const useGamesHook = (selectedGenre: Genre | null) => useHook<Game>("/games", { params: { genre: selectedGenre?.id } }, [selectedGenre?.id])
export default useGamesHook;
