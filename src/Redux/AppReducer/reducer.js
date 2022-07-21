import * as types from "./actionTypes";
import { loadData, saveData } from "../../utils/localstorage";
const initialState = loadData("freshlyAppState") || {
  data: [],
  isLoading: false,
  cart: [],
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQ: {
      saveData("freshlyAppState", {
        ...state,
        isLoading: true,
        isLoading: false,
      });
      return {
        ...state,
        isLoading: true,
        isLoading: false,
      };
    }

    case types.GET_DATA_SUCCESS: {
      saveData("freshlyAppState", {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
      });
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
      };
    }

    case types.GET_DATA_FAILURE: {
      saveData("freshlyAppState", {
        ...state,
        isLoading: false,
        isError: false,
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case types.ADD_DATA_TO_CART_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_DATA_TO_CART_SUCCESS: {
      saveData("freshlyAppState", {
        ...state,
        isLoading: false,
        isError: false,
        cart: [...state.cart, payload],
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: [...state.cart, payload],
      };
    }
    case types.ADD_DATA_TO_CART_FAILURE: {
      saveData("freshlyAppState", {
        ...state,
        isLoading: false,
        isError: true,
      });
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.DELETE_DATA_FROM_CART: {
      let flag = true;
      const data = state.cart.filter((meal) => {
        if (meal.id !== payload) {
          return meal;
        } else if (flag) {
          flag = false;
        } else {
          return meal;
        }
      });
      saveData("freshlyAppState", {
        ...state,
        isLoading: false,
        isError: false,
        cart: data,
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: data,
      };
    }

    case types.CLEAR_CART_DATA: {
      saveData("freshlyAppState", {
        ...state,
        cart: [],
      });
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};
