import useGenresHook from "../hooks/genres-hook"

export default function GenreList() {
  const{genres, isloading, error}= useGenresHook()
  return (
    <>
      <div>Genre list</div>
      <ul>
      {genres.map(g=> <li key={g.id}>{g.name}</li>)}
      </ul>
    </>
  )
}