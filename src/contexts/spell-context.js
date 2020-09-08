import React, { useReducer, createContext, useEffect } from "react";

export const SpellContext = createContext();

const initState = {
  spells: [],
  character: {
    percent: 0,
    flat: 0,
    buffs: [],
  },
};

const saveState = (state) => {
  localStorage.setItem('spellContextState', btoa(JSON.stringify(state)));
  console.log("Saved State")
}

const getState = () =>{
  const encoded = localStorage.getItem('spellContextState') 
  if(encoded === undefined || encoded === null) {
    return initState
  }
  let loadedState = JSON.parse(atob(encoded));
  loadedState.character.buffs = [] // Clear buffs on load
  return loadedState;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SPELL":
      return {
        spells: [...state.spells, action.payload],
        character: state.character,
      };
    case "DEL_SPELL":
      return {
        spells: state.spells.filter((ele) => ele.id !== action.payload),
        character: state.character,
      };
    case "UPDATE_SPELL":
      return {
        spells: state.spells.map((ele) => {
          if (ele.id === action.payload.id) {
            return action.payload;
          }
          return ele;
        }),
        character: state.character,
      };
    case "UPDATE_CHARACTER":
      return {
        character: action.payload,
        spells: state.spells,
      };
    default:
      throw new Error("Action not valid");
  }
};

export const SpellContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, getState());

  useEffect(()=>{
    saveState(state)
  }, [state])
  return (
    <SpellContext.Provider value={[state, dispatch]}>
      {props.children}
    </SpellContext.Provider>
  );
};
