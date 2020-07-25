import React from 'react'
// import copy from '../icons/copy.svg'

export default function Header() {

    var onSubmit = (e)=>{
        e.preventDefault()
        
    }
    return (
        <header className="w-full h-16 bg-white fixed z-10">
            <form onSubmit={onSubmit} className="h-full w-full py-2 px-6 bg-gray-500/  items-center flex flex-row" autoComplete="off">
                <input type="color" className="w-10 h-8 border-0 rounded outline-none focus:border-blue-400 border-2 border-gray-300 origin-top translate-x-16 "></input>
                <input type="text"  className="w-24 h-8 mx-4 text-center   bg-gray-300 focus:shadow-outline outline-none rounded"name="color" id="input--color"/>
                <input type="submit" className="w-16 h-8 bg-blue-500 hover:bg-blue-400 rounded text-white font-semibold focus:shadow-outline outline-none " value="Add"/>
            </form>
        </header>
    )
}
