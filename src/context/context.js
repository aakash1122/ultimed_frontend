import React, { createContext, useReducer } from "react";

// context object
export const MyContext = createContext();

const initalState = {
  user: {
    loggedIn: false,
    name: "",
    email: "",
    token: "",
    isAdmin: false,
    loading: false,
  },
  tipses: {
    allTips: [],
    loading: false,
    error: "",
  },
  meds: {
    allMeds: [],
    loading: false,
    error: "",
  },
  search: {
    loading: false,
    data: [],
    searched: false,
  },
};

const reducer = (state = initalState, action) => {
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
          isAdmin: action.payload.data.isAdmin,
        },
      };
    case "FAIL_LOGIN":
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
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
    //? all meds
    case "START_FETCH_MED":
      return {
        ...state,
        meds: {
          ...state.meds,
          loading: true,
        },
      };
    case "FINISH_FETCH_MED":
      return {
        ...state,
        meds: {
          ...state.meds,
          loading: false,
          allMeds: action.payload,
        },
      };
    case "FINISH_FETCH_MORE_MED":
      return {
        ...state,
        meds: {
          ...state.meds,
          allMeds: [...state.meds.allMeds, ...action.payload],
        },
      };
    case "ERROR_FETCH_MED":
      return {
        ...state,
        meds: {
          ...state.meds,
          loading: false,
          error: action.payload,
        },
      };
    // ? tips
    case "START_FETCH_TIPS":
      return {
        ...state,
        tipses: {
          ...state.tipses,
          loading: true,
        },
      };
    case "FINISH_FETCH_TIPS":
      return {
        ...state,
        tipses: {
          ...state.tipses,
          loading: false,
          allTips: action.payload,
        },
      };
    case "FINISH_FETCH_MORE_TIPS":
      return {
        ...state,
        tipses: {
          ...state.tipses,
          allTips: [...state.tipses.allTips, ...action.payload],
        },
      };
    case "FAIL_FETCH_TIPS":
      return {
        ...state,
        tipses: {
          ...state.tipses,
          loading: false,
          error: action.payload,
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
