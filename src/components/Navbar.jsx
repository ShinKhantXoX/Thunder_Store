import {SiGamejolt} from "react-icons/si";
import {CiLogin} from "react-icons/ci"
import {Link} from "react-router-dom";
import {FcSearch} from "react-icons/fc";
import {FaOpencart} from "react-icons/fa";
import {SiSeagate} from "react-icons/si"
import {useStateContext} from "../StateContext/StateContext";

function Navbar() {

    const {setSearch,state:{cart}} = useStateContext();

    return (
        <>

            <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link to={'/'} className="flex items-center gap-3">
                        <SiGamejolt className={'text-2xl text-primary'}/>
                        <span
                            className="self-center text-primary text-xl font-semibold whitespace-nowrap dark:text-white uppercase flex items-center">Thunder<SiSeagate/>tore</span>
                    </Link>
                    <div className="flex items-center">
                        <a href="tel:5541251234"
                           className="mr-6 text-sm font-medium text-para dark:text-white hover:underline">(555)
                            412-1234</a>
                        <Link to={'/login'}>
                            <div className="text-sm font-medium text-primary dark:text-blue-500 hover:underline flex items-center gap-2">Login
                                <CiLogin className={'text-lg font-semibold'}/></div>
                        </Link>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div className="flex items-center justify-between">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <a href="#" className="text-head dark:text-white hover:underline"
                                   aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-head dark:text-white hover:underline">Company</a>
                            </li>
                            <li>
                                <a href="#" className="text-head dark:text-white hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" className="text-head dark:text-white hover:underline">Features</a>
                            </li>
                        </ul>
                        <div className={'flex items-center gap-3'}>
                            <Link to={'/cart'}>
                                <div className={'bg-primary text-white text-xl px-2 py-1 rounded shadow-sm flex items-center gap-2'}>
                                    <FaOpencart className={cart.length >=1 && "animate-bounce"}/>
                                    <small>{cart.length}</small>
                                </div>
                            </Link>
                            <div className={'border-gray border-1 w-60 px-3 py-1 flex items-center rounded shadow'}>
                                <FcSearch className={'text-2xl animate-bounce'}/>
                                <input onChange={(e) => setSearch(e.target.value)} type="text"
                                       className=" bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       placeholder={"Search..."}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar