import {Link} from "react-router-dom";
import {BsEmojiHeartEyesFill} from "react-icons/bs"



function Success(){
   


    return (
        <div className={'h-64 flex justify-center items-center'}>
            <div className={'p-5 bg-slate-200 shadow rounded'}>
                <h1 className={'text-xl text-info font-semibold tracking-wider'}>Thanks For Purchasing</h1>
                <Link to={'/'}>
                    <button className={'bg-primary text-white px-3 py-2 rounded shadow mt-3 flex items-center gap-2'}>Go Shopping <BsEmojiHeartEyesFill/></button>
                </Link>
            </div>
        </div>
    )
}

export default Success;