import {FcCalendar} from "react-icons/fc"
import {MdOutlineUpdate} from "react-icons/md"
import {GiPriceTag} from "react-icons/gi"
import {Link} from 'react-router-dom';
import {useStateContext} from "../StateContext/StateContext";
import ScrollReveal from "scrollreveal";


function Card({item}) {

    const {dispatch} = useStateContext();

    const rdDate = new Date(item.releaseDate);
    const upDate = new Date(item.lastChange);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (

        <div>
            <div
                className="w-[300px] bg-slate-100 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

                <img className="mx-5 mt-3 rounded border-2 border-gray" src={item?.thumb} alt=""/>
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-head dark:text-white tracking-wider">{item.title?.substring(0, 12)}...</h5>

                    <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">{item.metacriticLink?.substring(0, 25)}...</p>
                    <p className={'text-sm text-info mb-3'}>Steam Rating - {item.steamRatingText}</p>
                    <p className={'text-sm text-info mb-3'}>Steam Rating Percent - {item.steamRatingPercent}</p>
                    <div className={'mb-3'}>
                        <small className={'text-sm font-semibold'}>Rating - <span className={'text-primary'}>{item.dealRating}%</span></small>
                    </div>
                    <p className={'flex items-center gap-3 mb-3'}><FcCalendar/> <span className={'text-para text-sm'}>{months[rdDate.getMonth()]}/{rdDate.getDay()}/{rdDate.getFullYear()}</span> </p>
                    <p className={'flex items-center gap-3 mb-3'}><MdOutlineUpdate className={'text-primary'}/> <span className={'text-info text-sm'}>{months[upDate.getMonth()]}/{upDate.getDay()}/{upDate.getFullYear()}</span> </p>
                    <div className={'flex justify-between items-center gap-3 mb-3 tracking-wider font-semibold'}>
                        <p className={'text-slate-400 line-through'}>$ {item.normalPrice}</p>
                        <Link to={'/register'}>
                            <p className={'text-info flex items-center gap-3 border-info border-2 px-2 py-1 rounded hover:bg-info hover:text-white duration-300'}><GiPriceTag className={'text-lg'}/> $ {item.salePrice}</p>
                        </Link>
                    </div>
                    <div className={'flex items-center justify-between'}>
                            <button onClick={() => dispatch({type:"ADD_TO_CART", payload:item})}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary duration-300  rounded-lg hover:bg-sky-500 transform transition hover:scale-90 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">
                                Add To Cart
                            </button>
                        <Link to={`/detail/${item.dealID}`}>
                            <button
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-head duration-300  rounded-lg hover:bg-slate-400 transform transition hover:scale-90 focus:ring-4 focus:outline-none uppercase">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card