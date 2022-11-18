import axios from "axios"import axios from "axios";
import { useDispatch } from "react-redux";
,
import { ADD_TO_CART } from "../reducer/cartReducer";
export const addItemToCart= (id,quantity) => async (useDispatch, getState) =>  {


    const {data} = await axios.get (´/api/producto/${id}´)
    dispatch ({
        type: ADD_TO_CART,
        payload:{
            product: data.product._id
            nombre: data.product.nombre,
            precio: data.product.precio,
            imagen: data.product.imagen [0].url,
            inventario: data.product.inventario,
            quantity
        }
    })
    localStorage.setItem_("cartItems",JSON.stringify(getState().cart.cartItems))
    export const removeItemFromCart = (id) => async (dispatch, getState) => {
        dispatch ({
            type = REMOVE_ITEM_CART,
            payload: id
        })
            localStorage.setItem_("cartItems",JSON.stringify(getState().cart.cartItems))
        
    } 
export const saveShippingInfo = (data) => async (dispatch) =>¨{
    
}
