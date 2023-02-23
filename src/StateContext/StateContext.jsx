import {createContext, useEffect, useReducer, useState ,useContext} from "react";
import {getData} from "../api";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [productList,setProductList] = useState([]);
    const [search,setSearch] = useState('');

    const initialState = {
        product: [],
        cart : []
    }

    const reducer = (state,action) => {
        switch (action.type){
            case "GET_PRODUCT":
                return {...state, product: action.payload};
            case "ADD_TO_CART":
                const item = action.payload;
                const isExisted = state.cart?.find(c => c.dealID === item.dealID);
                if (isExisted) {
                    return (
                        {...state, cart: state.cart?.map(c => c.dealID === item.dealID ? {...item} : {...c})}
                    )
                } else {
                    return (
                        {...state, cart: [...state.cart, {...item}]}
                    )
                }
            case "DELETE_FROM_CART":
                return {...state, cart: state.cart?.filter(c => c.dealID !== action.payload.dealID)}
            case "CART_EMPTY":
                return {...state, cart: state.cart = []}
            default: return  state
        }
    }

    const getProductList = async () => {
        const data = await getData('/deals?storeID=1&upperPrice=15')
        setProductList(data);
    }

    useEffect(() => {
        getProductList();
    }, [])

    useEffect(() => {
        dispatch({type:"GET_PRODUCT", payload:productList})
        const filterApi = productList.filter(pd => pd.title.toLowerCase().includes(search.toLowerCase()));
        dispatch({type:"GET_PRODUCT", payload:filterApi});
    }, [productList,search])

    const [state,dispatch] = useReducer(reducer,initialState);

    const data = {state,dispatch,search,setSearch};

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);