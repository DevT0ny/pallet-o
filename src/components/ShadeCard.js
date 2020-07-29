import React from 'react'
import copy from '../icons/copy.svg'
export default function ShadeCard({color,copyId,textColor,copyClassName,showPopup}) {

    // var copyId = `shadeCopyId-${id}`
    return (
      <div  className="w-full h-24 overflow-hidden relative " style={{backgroundColor:color }}>
        <div className="ml-2 mt-2 font-semibold" style={{ color: textColor }} >{color}</div>
        <span className="opacity-0" id={copyId}>{color}</span>
        <div className="w-full h-full opacity-0 transition-opacity duration-200 ease-in hover:opacity-50 bg-black  absolute top-0 left-0 flex flex-row justify-center items-center " >
            <i
              className={"icon p-6 inline-block rounded-full text-lg my-auto bg-center "+ copyClassName}
              data-clipboard-action="copy" data-clipboard-target={'#'+copyId}
              style={{backgroundImage:`url(${copy})` ,backgroundRepeat:"no-repeat" ,backgroundSize: "40%"  }}
              onClick={ ()=>showPopup(true)}
            >
            </i>
        </div>
      </div>
    )
}
