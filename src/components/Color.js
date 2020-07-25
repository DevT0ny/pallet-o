import React from 'react'
import copy from '../icons/copy.svg'
import plus from '../icons/plus.svg'
import trash from '../icons/trash.svg'
export default function Color({color,id,remove,copyClassName}) {
    var log = (color,id)=> {
        // console.log(color,id)
    }
    var copyId = `copyId-${id}`
    return (
        <div 
            className="w-full h-20 rounded-md shadow-lg  border-2 border-gray-400 overflow-hidden relative hover:border-blue-600 hover:shadow-xl transition-shadow duration-200" 
            style={{transition:"border .2s ease-in"}}
        >
            <div className="w-full h-full absolute top-0 left-0" style={{backgroundColor:color}}>
                <div className="opacity-0" id={copyId}>{color}</div>
            </div>
            <div className="w-full h-full opacity-0 transition-opacity duration-200 ease-in hover:opacity-50 bg-black  absolute top-0 left-0 flex flex-row justify-around " >
                <i className="icon p-4 inline-block rounded-full text-lg my-auto bg-center" onClick={ ()=>log(color,id) } style={{backgroundImage:`url(${plus})` ,backgroundRepeat:"no-repeat"   }}> </i>
                <i className={"icon p-4 inline-block rounded-full text-lg my-auto bg-center  "+copyClassName} onClick={ ()=>log(color,id) } 
                     data-clipboard-action="copy" data-clipboard-target={'#'+copyId}
                    style={{backgroundImage:`url(${copy})` ,backgroundRepeat:"no-repeat"   }}> </i>
                <i className="icon p-4 inline-block rounded-full text-lg my-auto bg-center" onClick={ ()=>remove(id) } style={{backgroundImage:`url(${trash})` ,backgroundRepeat:"no-repeat"    }}> </i>
            </div>
        </div>
    )
}