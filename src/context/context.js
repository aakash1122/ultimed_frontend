import React, { createContext, useReducer } from "react";

// context object
export const MyContext = createContext();

const initalState = {
  user: {
    loggedIn: false,
    name: "",
    email: "",
    token: "",
    loading: false,
  },
  tipses: [],
  Meds: [],
  search: {
    loading: false,
    data: [],
    searched: false,
  },
};

const reducer = (state = initalState, action) => {
  console.log("reducer called", action);
  switch (action.type) {
    case "START_LOGIN":
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };
    case "FINISH_LOGIN":
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          loggedIn: true,
          id: action.payload.data.id,
          name: action.payload.data.name,
          email: action.payload.data.email,
          token: action.payload.token,
        },
      };
    case "LOGOUT":
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          loggedIn: false,
          name: "",
          email: "",
          token: "",
        },
      };
    case "SEARCH_MED":
      return {
        ...state,
        search: {
          ...state.search,
          loading: true,
          searched: true,
        },
      };
    case "FINISH_SEARCH_MED":
      return {
        ...state,
        search: {
          ...state.search,
          loading: false,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <MyContext.Provider value={[state, dispatch]}>
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
