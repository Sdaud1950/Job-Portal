import React from 'react'
import img404 from '../assets/404.png'
import { FaExclamationTriangle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';


const PageNotFound = () => {

    const navigate = useNavigate()
    const HandelNav = () => {
        navigate('/')
    }

    return (
        <div>
            <section className='text-center flex flex-col justify-center items-center h-96'>
                <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
                <h1 className="text-2xl">404 Not Found</h1>
                <p className="text-5xl ">This Page does not exist</p>
                <button onClick={HandelNav} className="text-white bg-black hover:bg-white-900 hover:text-white rounded-md px-3 py-2 mt-3">
                    Go Back
                </button>

            </section>
        </div>
    )
}

export default PageNotFound
