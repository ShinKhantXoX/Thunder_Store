import {useParams} from "react-router-dom";
import {getData} from "../api";
import {useEffect, useState} from "react";
import {FcCalendar} from "react-icons/fc";
import {TbWorldUpload} from "react-icons/tb"
import {MdFeedback} from "react-icons/md"
import {useStateContext} from "../StateContext/StateContext";
import Spinner from "./spinner/Spinner";

function ProductDetails() {

    const {state:{cart},dispatch} = useStateContext();

    const {id} = useParams();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // console.log(id);
    const [detail,setDetail] = useState([]);
    const [loading,setLoading] = useState(true);

    const getDetailData = async () => {
        const data = await getData(`/deals?id=${id}`)
        setDetail(data.gameInfo)
        setLoading(false);
    }

    useEffect(() => {
        getDetailData();
    }, [])

    const rdDate = new Date(detail.releaseDate);


    // console.log(detail);

    return (
        <div className={'container mx-auto my-5'}>

            {loading ? <Spinner/> : (<div>
                <img className={'w-[300px] border-info border-2 rounded shadow'} src={detail.thumb} alt=""/>
                <h1 className={'text-head text-xl font-semibold my-3'}>{detail.name}</h1>
                <div className={'flex items-center justify-between my-3'}>
                    <p>Link - <span className={'text-info font-semibold'}>{detail.metacriticLink}</span></p>

                </div>
                <div className={'flex items-center justify-between my-3'}>
                    <p className={'text-xl font-semibold tracking-wider text-primary flex items-center gap-3'}><FcCalendar className={'text-2xl'}/>{months[rdDate.getMonth()]}/{rdDate.getDay()}/{rdDate.getFullYear()}</p>
                    <p className={'flex items-center gap-3 text-primary'}><TbWorldUpload className={'text-xl'}/> {detail.publisher}</p>
                </div>
                <div className={'my-3'}>
                    <h1 className={'text-xl text-head font-semibold tracking-wider flex items-center gap-2'}>Steam Feedback <MdFeedback className={'text-primary text-xl'}/></h1>
                    <div className={'flex items-center justify-between'}>
                        <p>Rating Text - <span className={'text-primary font-semibold tracking-wider'}>{detail.steamRatingText}</span></p>
                        <p>Rating Percent - <span className={'text-primary font-semibold tracking-wider'}>{detail.steamRatingPercent}%</span></p>
                    </div>
                </div>
                <button onClick={() => dispatch({type:"ADD_TO_CART", payload:detail})}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary duration-300  rounded-lg hover:bg-sky-500 transform transition hover:scale-90 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">
                    Add To Cart
                </button>
            </div>)}

        </div>
    )
}

export default ProductDetails