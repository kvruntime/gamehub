import useGameTrailer from "../hooks/trailer-hook"
interface Props{
  gameId:number
}
export default function GameTrailer({gameId}:Props) {
  const {data, error, isLoading}=useGameTrailer(gameId)
  console.log(data)
  console.log(data?.results)
  return (
    <></>
  )
}