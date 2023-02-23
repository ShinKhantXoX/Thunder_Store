import {GiCrossedAxes} from "react-icons/gi";
import {BsEmojiHeartEyes} from "react-icons/bs";
import {SiSteam} from "react-icons/si";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useState} from "react";
import {useStateContext} from "../StateContext/StateContext";


function CartItem({c,increaseTotal,decreaseTotal}){
    const {state:{cart},dispatch} = useStateContext();

    const streamUrl = 'https://www.cheapshark.com/redirect?dealID=';
    let [qty,setQty] = useState(1);

    const increaseHandler = () => {
        setQty(prev => prev +1);
        increaseTotal(parseFloat(c?.salePrice))
    }

    const decreaseHandler = () => {
        if(qty>1){
            setQty(prev => prev -1);
            decreaseTotal(parseFloat(c?.salePrice))
        }
    }

    const deleteHandler = () => {
        dispatch({type:"DELETE_FROM_CART", payload: c});
        decreaseTotal(parseFloat(c?.salePrice)*qty)
    }

    return(
        <div key={c.dealID}>
            <div className={'my-5 bg-slate-100 rounded shadow py-6 px-5'}>
                <div className={'flex items-start justify-between'}>
                    <img src={c.thumb} className={'w-[300px] border-info border-2 rounded shadow'} alt=""/>
                    <div onClick={deleteHandler} className={'bg-danger text-white text-xl rounded-full p-1 cursor-pointer'}>
                        <GiCrossedAxes/>
                    </div>
                </div>
                <h1 className={'text-2xl font-semibold tracking-wider my-2'}>{c.title}</h1>
                <div className={'flex items-center justify-between'}>
                    <p>Rating Text - <span className={'text-primary font-semibold'}>{c.steamRatingText}</span></p>
                    <p>Rating Percent - <span className={'text-primary font-semibold'}>{c.steamRatingPercent}%</span></p>
                </div>
                <div className={'flex items-center justify-between my-3'}>
                    <button className={'border-gray border-2 text-slate-400 px-2 py-1 rounded shadow line-through flex items-center gap-3'}>$ {(c.normalPrice *qty).toFixed(2)} {(c.normalPrice *qty).toFixed(2) > 100 && <BsEmojiHeartEyes className={'text-primary text-lh'}/>}</button>
                    <button className={'bg-primary text-white px-2 py-1 rounded shadow'}>$ {(c?.salePrice *qty).toFixed(2)}</button>
                    <a href={streamUrl+c.gameID} target="_blank"><SiSteam className={'text-xl text-primary animate-pulse'}/></a>
                </div>
                <div className={'flex items-center'}>
                    <button onClick={decreaseHandler} className={'bg-primary text-white text-xl px-2 py-[7px] rounded-l shadow'}><AiOutlineMinus/></button>
                    <button className={'border-gray border-2 text-primary text-lg px-2 py-[1px] rounded-l shadow'}>{qty}</button>
                    <button onClick={increaseHandler} className={'bg-primary text-white text-xl px-2 py-[7px] rounded-r shadow'}><AiOutlinePlus/></button>
                </div>

            </div>
        </div>
    )
}

export default CartItem;