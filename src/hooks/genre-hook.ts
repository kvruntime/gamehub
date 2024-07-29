import useGenresHook from "./genres-hook"

const useGenreHook = (id?: number) => {
  const { data: genres } = useGenresHook()
  return genres?.results.find(g => g.id === id)
}
export default useGenreHook