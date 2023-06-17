import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { Product } from "../Components/Products/Product";

type CartItem = Product & { quantity: number };

type State = {
  items: CartItem[];
};

type Action =
  | { type: "ADD"; item: Product; quantity: number }
  | { type: "REMOVE"; id: number }
  | { type: "INCREMENT"; id: number }
  | { type: "DECREMENT"; id: number };


const initialState: State = {
  items: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD":
      const existingItem = state.items.find((item) => item.id === action.item.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.item.id) {
              return {
                ...item,
                quantity: item.quantity + action.quantity,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.item, quantity: action.quantity }],
        };
      }
    
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

      case "INCREMENT":
  return {
    ...state,
    items: state.items.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    }),
};

case "DECREMENT":
  return {
    ...state,
    items: state.items.map((item) => {
      if (item.id === action.id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    }),
};
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const savedState = localStorage.getItem("cartState");
  const initialCartState = savedState ? JSON.parse(savedState) : initialState;

  const [state, dispatch] = useReducer(reducer, initialCartState);

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
