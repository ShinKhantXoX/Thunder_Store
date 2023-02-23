import {useStateContext} from "../StateContext/StateContext";

import {GiCrossedAxes} from "react-icons/gi";
import {AiOutlineMinus,AiOutlinePlus,AiOutlineClear} from "react-icons/ai";
import {BsEmojiHeartEyes,BsFillEmojiFrownFill} from "react-icons/bs"
import {useEffect, useState} from "react";
import {useNavigate,Link} from 'react-router-dom'
import CartItem from "../components/CartItem";
import Spinner from "./spinner/Spinner";

function Cart() {

    const {state:{cart},dispatch} = useStateContext();
    // console.log(cart);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const [total,setTotal] = useState(0);

    const increaseTotal = (price) => {
        setTotal(total + price);
    }

    const decreaseTotal = (price) => {
        setTotal(total - price);
    }

    setTimeout(() => {
        setLoading(false);
    },1500)

    useEffect(() => {
        setTotal(cart?.reduce((initial,current) => initial+parseFloat(current.salePrice) ,0))
    } , [])


    return (
        <div className={'container mx-auto'}>
            {loading ? <Spinner/> : (
                <div>{
                    cart?.length === 0 ? (<div className={'container mx-auto flex justify-center my-5'}>
                        <h1 className={'text-danger text-2xl font-semibold tracking-wider flex items-center gap-3'}>You don't have any order list <BsFillEmojiFrownFill/>
                            <button onClick={() => navigate('/')} className={'bg-primary text-white px-3 py-1 rounded shadow'}>Go Shopping!</button>
                        </h1>
                    </div>) : (<div className={'grid grid-cols-4'}>
                        <div className={'col-span-3'}>
                            <div className={'px-5'}>
                                {cart?.map(c => <CartItem key={c.dealID} c={c} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>)}
                            </div>
                        </div>
                        <div className={'col-span-1'}>
                            <div className={'bg-slate-100 p-5 rounded shadow my-5'}>
                                <h1 className={'text-2xl text-primary tracking-wider mb-3'}>Total - $ {cart?.length === 0 ? "0" : total.toFixed(2)}</h1>
                                <Link to={'/success'}>
                                    <button onClick={() => dispatch({type:"CART_EMPTY"})} className={'bg-primary text-white px-3 py-1 rounded shadow'}>Checkout</button>
                                </Link>
                            </div>
                            <div className={'flex justify-center'}>
                                <button onClick={() => dispatch({type:"CART_EMPTY"})} className={'bg-danger text-white px-3 py-1 rounded shadow flex items-center gap-2'}>Clear All <AiOutlineClear/></button>
                            </div>
                        </div>
                    </div>)
                }</div>
            )}
        </div>
    )
}

export default Cart