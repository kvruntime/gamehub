import { create } from "zustand"
import { GameQuery } from "./data"

interface GameQueryStore {
  gameQuery: GameQuery,
  setSearchText: (searchText: string) => void,
  setSortOrder: (sortOrder: string) => void,
  setGenreId: (genreId?: number) => void,
  setPlatformId: (PlatformId?: number) => void,
}
const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: { sortOrder: "", searchGame: "" },
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchGame: searchText } })),
  setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
}))

export default useGameQueryStore