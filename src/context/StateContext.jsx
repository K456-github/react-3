import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ childern }) => {
  const [productList, setproductList] = useState([]);
  const [search,setsearch] = useState('')

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", productList });
    const filterProduct = productList.filter(item=> DataTransferItemList.includes(search))
    dispatch({type:"GET_PRODUCT",payload:filterProduct})
  }, [productList]);

  const fetchdata = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setproductList(data);
  };

  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch,search,setsearch };

  return (
    <StateContext.Provider value={data}>
        {childern}
    </StateContext.Provider>
  )
  ;
};

export const StateContextCustom = () => useContext(StateContext);
