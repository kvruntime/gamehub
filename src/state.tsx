import React, { useReducer } from "react"

interface Action {
  type: "ADD" | "DELETE"
  item: string
}

interface StateContextType {
  item: string,
  dispatch: React.Dispatch<Action>
}

const stateReducer = (state: string, action: Action): string => {
  if (action.type === "ADD")
    return `ADD ${state}`
  if (action.type === "DELETE")
    return `DELETE ${state}`
  return state;
}

const [state, dispatch] = useReducer(stateReducer, "")

const StateContext = React.createContext<StateContextType>({} as StateContextType)


interface Props {
  children: React.ReactNode
}

function StateProvider({ children }: Props) {
  return (
    <StateContext.Provider value={{ item: state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider