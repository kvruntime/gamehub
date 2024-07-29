import usePlaformsHook from "./platforms-hook"

const usePlaformHook = (id?: number) => {
  const { data: platforms } = usePlaformsHook()
  return platforms.results.find(p => p.id === id)
}
export default usePlaformHook