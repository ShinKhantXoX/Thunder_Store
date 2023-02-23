import Swal from 'sweetalert2'
import {useNavigate,Link} from "react-router-dom";
import {MdOutlineCreate} from "react-icons/md"

function Login() {

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

    const loginHandler = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        })
        setTimeout(() => {
            navigate('/')
        },2000)

    }

    return (
        <div className={'h-screen flex items-center justify-center'}>


            <form onSubmit={handleSubmit} className={'bg-sky-100 p-5 rounded shadow'}>
                <h1 className={'text-primary text-lg font-semibold mb-3'}>Sign in to our platform</h1>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" id="email"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="name@johndoe.com"  />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        password</label>
                    <input type="password" id="password"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            />
                </div>
                <div className="flex justify-between mb-6">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                   required/>
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                            me</label>
                    </div>
                    <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <div>
                    <button onClick={loginHandler}
                            className="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to Your Account
                    </button>
                </div>
                <div className={'flex items-center gap-3 mt-6'}>
                    <p className={'text-para text-sm'}>Not registered?</p>
                    <Link to={'/register'}>
                        <p className={'text-primary tracking-wider text-sm flex items-center gap-2'}>Create account <MdOutlineCreate/></p>
                    </Link>
                </div>
            </form>


        </div>
    )
}

export default Login